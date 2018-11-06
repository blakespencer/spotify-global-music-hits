const d3 = require('d3');
const parse = require('csv-parse');
const assert = require('assert');
const fetch = require('node-fetch');
const csv = require('fast-csv');
const fs = require('fs');

// const csvUnresolved = fetch('http://127.0.0.1:5500/test.csv').then(
//   data => data
// );

// Promise.all([csvUnresolved]).then(response => {
//   console.log(response[0].artist);
// });

const stream = fs.createReadStream('test.csv');

// const analyseData = data => {
//   const uniqueSongsSet = new Set();
//   data.forEach(row => uniqueSongsSet.add(row[6]));
//   const uniqueSongs = [];
//   uniqueSongsSet.forEach(country => {
//     uniqueSongs.push(country);
//   });
//   console.log(uniqueSongs.length);
// };

const header = [
  'artist',
  'song',
  'rank',
  'streams',
  'country',
  'week',
  'songArtist',
];

const d3analyse = data => {
  const countryNested = d3
    .nest()
    // creates a key for countries, values will be the data with the same key
    .key(d => {
      return d[4];
    })
    .entries(data);

  const countryCount = countryNested.length;
  const nestedData = d3
    .nest()
    .key(d => {
      return d[6];
    })
    // leaves is the array and then formatting to what you want it to look like
    .rollup(leaves => {
      return leaves.length / countryCount;
    })
    .entries(data);

  const nestedDataV2 = d3
    .nest()
    // this will create all the unique songs (default will return all the rows associated to it)
    .key(d => {
      return d[6];
    })
    // leaves is the array and then formatting to what you want it to look like
    .rollup(leaves => {
      // defining one of the keys and values
      const overallAverage = leaves.length / countryCount;
      // nesting further
      const leavesNested = d3
        .nest()
        // this will create all the unique countries data entry is LEAVES!!!!
        .key(d => {
          return d[4];
        })
        // formatting the values as how many countries - the average
        .rollup(moreLeaves => {
          return moreLeaves.length - overallAverage;
        })
        .entries(leaves);

      return {
        overallAvg: overallAverage,
        nested: leavesNested,
      };
    })
    .entries(data);
  const countriesFormat = {};

  // array of countries
  countryNested.forEach(country => {
    const countryName = country.key,
      maxWeeks = {
        songKey: 'placeholder',
        weekDiff: -1000,
      };
    nestedDataV2.forEach(song => {
      // look at its values, find the country value, if the value is greater than the weeks

      const nestedSong = song.value.nested.filter(songdata => {
        return songdata.key === countryName;
      });
      if (nestedSong[0]) {
        var nestedSongData = nestedSong[0];
        if (maxWeeks.weekDiff < nestedSongData.value) {
          maxWeeks.songKey = song.key;
          maxWeeks.weekDiff = nestedSongData.value;
        }
      }
      countriesFormat[countryName] = maxWeeks;
    });
  });
  console.log(countriesFormat);

  let sum = 0;
  const nestedByCountry = d3
    .nest()
    .key(d => {
      return d[6];
    })
    .key(d => {
      return d[4];
    })
    .rollup(leaves => {
      const thisSongData = nestedData.filter(function(d) {
        return d.key == leaves[0][6];
      })[0];

      const thisSongAvg = thisSongData.value;

      const diff = leaves.length - thisSongAvg;
      // console.log(diff);
      sum += diff;
      return diff;
    })
    .entries(data);
};

const data = [];

// Reading the csv file
const csvStream = csv()
  .on('data', function(row) {
    const arstitSong = row[0] + row[1];
    row.push(arstitSong);
    data.push(row);
  })
  .on('end', function() {
    d3analyse(data);
    console.log('done');
  });

stream.pipe(csvStream);

// const output = [];
// parse(
//   `
//   "1","2","3"
//   "a","b","c"
// `,
//   {
//     trim: true,
//     skip_empty_lines: true,
//   }
// )
//   // Use the readable stream api
//   .on('readable', function() {
//     let record;
//     while ((record = this.read())) {
//       output.push(record);
//     }
//   })
//   // When we are done, test that the parsed output matched what expected
//   .on('end', function() {
//     assert.deepEqual(output, [['1', '2', '3'], ['a', 'b', 'c']]);
//   });

// const data = {
//   country1: {
//     song: 'song1',
//     weeks: 10,
//   },
//   country2: {
//     song: 'song2',
//     weeks: -1000,
//   },
// };
