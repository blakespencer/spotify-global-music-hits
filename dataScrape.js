const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { Song, Week, Artist, Country, Rank, Stream } = require('./db/models');

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

const createSong = async (week, country, element, $) => {
  try {
    // console.log(country[0]);
    const track = $(element).find('td.chart-table-track');
    const artist = await Artist.findOrCreate({
      where: {
        artist: $(track)
          .find('span')
          .text(),
      },
    });
    const song = await Song.findOrCreate({
      where: {
        title: $(track)
          .find('strong')
          .text(),
        artistId: artist[0].id,
      },
    });
    const rank = +$(element)
      .find('.chart-table-position')
      .text();
    const streams = parseStreams(
      $(element)
        .find('.chart-table-streams')
        .text()
    );
    await Stream.findOrCreate({
      where: {
        rank,
        songId: song[0].id,
        weekId: week[0].id,
        countryId: country[0].id,
        streams,
      },
    });
    // await Rank.findOrCreate({
    //   where: {
    //     rank,
    //     songId: song[0].id,
    //     weekId: week[0].id,
    //     streams,
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
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

const delayedRequest = delay(async (weeks, idx, countryData, week, $) => {
  try {
    const weekData = await Week.findOrCreate({
      where: {
        week: weeks[idx],
      },
    });
    const htmlWeek = await fetchHTML(
      `https://spotifycharts.com/regional/${
        countryData[0].dataValues.country
      }/weekly/${week}`
    );
    $ = cheerio.load(htmlWeek);
    const tr = $('tbody').find('tr');
    tr.each(async (index, element) => {
      await createSong(weekData, countryData, element, $);
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
    const countriesSet = new Set(getCountries($));
    const countries = [];
    countriesSet.forEach(country => {
      countries.push(country);
    });
    console.log(countries[0]);
    for (let i = 0; i < countries.length; i++) {
      const countryData = await Country.findOrCreate({
        where: {
          country: countries[i],
        },
      });
      // delaying the request by 2 seconds
      for (let i = 0; i < weeks.length; i++) {
        await delayedRequest(200, weeks, i, countryData, weeks[i], $);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const test = async () => {
  try {
    const array = await Artist.findAll({
      include: [Song],
    });
    let artist = array[0];
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i].dataValues.songs.length);
      if (artist.dataValues.songs.length < array[i].dataValues.songs.length) {
        artist = array[i];
      }
    }
    const { songs } = artist.dataValues;
    console.log(artist.artist, songs.length);
  } catch (error) {
    console.log(error);
  }
};

const rank = async () => {
  try {
    const array = await Rank.findAll({
      where: {
        rank: 200,
      },
      include: [{ model: Song, include: [Artist] }, Week],
    });
    console.log(array[0].dataValues.week.dataValues);
  } catch (error) {
    console.log(error);
  }
};

const song = async () => {
  try {
    const array = await Song.findAll({
      where: {
        id: 1,
      },
      include: [Week, Rank],
    });
    const ranks = [];
    array[0].dataValues.ranks.forEach(elem => {
      ranks.push(elem.dataValues.rank);
    });
    console.log(ranks);
  } catch (error) {
    console.log(error);
  }
};

// test();
// rank();
// song();

retriveData();
