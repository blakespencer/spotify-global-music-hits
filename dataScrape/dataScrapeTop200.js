const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');
// const csv = require('fast-csv');
// const ws = fs.createWriteStream('my.csv');
const csvWriter = require('csv-write-stream');
const writer = csvWriter({
  headers: ['artist', 'song', 'rank', 'streams', 'country', 'week'],
});
writer.pipe(fs.createWriteStream('spotify_data_top200.csv'));

const fetchHTML = async address => {
  try {
    const res = await fetch(address);
    const html = await res.text();
    return html;
  } catch (error) {
    console.log(error);
  }
};

// gets rid of commas
const parseStreams = stream => {
  return +stream.split(',').join('');
};

const createSong = (week, country, element, $) => {
  // console.log(country[0]);
  const track = $(element).find('td.chart-table-track');
  const artist = $(track)
    .find('span')
    .text()
    .slice(3);
  const song = $(track)
    .find('strong')
    .text();

  const rank = +$(element)
    .find('.chart-table-position')
    .text();
  const streams = parseStreams(
    $(element)
      .find('.chart-table-streams')
      .text()
  );
  // writer.write([artist, song, rank, streams, country, week]);
  writer.write([artist, song, rank, streams, country, week]);
};

// need find week first and then associate it to each song with rank
// triple join table
// country has many weeks... then weeks has many songs through rank

const getWeeks = $ => {
  const weeks = [];
  $('.chart-filters-list')
    .find('[data-type=date]')
    .find('ul')
    .find('li')
    .each((index, element) => {
      weeks.push(element.attribs['data-value']);
    });
  return weeks;
};

const getCountries = $ => {
  const countries = [];
  $('.chart-filters-list')
    .find('[data-type=country]')
    .find('ul')
    .find('li')
    .each((index, element) => {
      countries.push(element.attribs['data-value']);
    });
  return countries;
};

const delay = func => (time, ...args) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(func(...args));
    }, time);
  });

const delayedRequest = delay(async (idx, country, week, $) => {
  try {
    const htmlWeek = await fetchHTML(
      `https://spotifycharts.com/regional/${country}/weekly/${week}`
    );
    $ = cheerio.load(htmlWeek);
    const tr = $('tbody').find('tr');
    tr.each((index, element) => {
      createSong(week, country, element, $);
    });
  } catch (error) {
    console.log(error);
  }
});

const retriveData = async () => {
  try {
    const html = await fetchHTML(
      'https://spotifycharts.com/regional/global/weekly/'
    );
    let $ = cheerio.load(html);
    const weeks = getWeeks($);
    // Getting rid of duplicates
    const countriesSet = new Set(getCountries($));
    const countries = [];
    countriesSet.forEach(country => {
      countries.push(country);
    });

    for (let i = 0; i < countries.length; i++) {
      // delaying the request by 2 seconds
      for (let j = 0; j < weeks.length; j++) {
        await delayedRequest(5, i, countries[i], weeks[j], $);
      }
    }
    writer.end();
    console.log('finished');
  } catch (error) {
    console.log(error);
  }
};

retriveData();
