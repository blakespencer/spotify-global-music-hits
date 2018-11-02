const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { Song, Week, Artist, Country } = require('./db/models');

const fetchHTML = async address => {
  try {
    const res = await fetch(address);
    const html = await res.text();
    return html;
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (element, $) => {
  try {
    const track = $(element).find('td.chart-table-track');
    const song = await Song.findOrCreate({
      where: {
        title: $(track)
          .find('strong')
          .text(),
      },
    });
    const artist = await Artist.findOrCreate({
      where: {
        artist: $(track)
          .find('span')
          .text(),
      },
    });
    const rank = $(element)
      .find('.chart-table-position')
      .text();
    const streams = $(element)
      .find('.chart-table-streams')
      .text();
    await song[0].setArtist(artist[0]);
  } catch (error) {
    console.log(error);
  }
};

// need find week first and then associate it to each song with rank
// triple join table
// country has many weeks... then weeks has many songs through rank

const retriveData = async () => {
  try {
    const songs = [];
    const html = await fetchHTML(
      'https://spotifycharts.com/regional/us/weekly/2018-09-14--2018-09-21'
    );
    let $ = cheerio.load(html);
    const tr = $('tbody').find('tr');
    // create week before for-loop
    tr.each(async (index, element) => {
      await createSong(element, $);
    });
    const week = await Week.findOrCreate({
      where: {
        week: '2018-09-14--2018-09-21',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

retriveData();
