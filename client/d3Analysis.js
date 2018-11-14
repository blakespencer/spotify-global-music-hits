const globalFilter = dataset => {
  const globalNested = d3
    .nest()
    .key(d => {
      return d.country;
    })
    // .rollup(leaves => leaves)
    .entries(dataset);

  const array = globalNested.filter(song => song.key === 'global')[0].values;
  const output = {};
  array.forEach(song => {
    output[song.songArtist] = song;
  });
  return output;
};

const d3analyse2 = data => {
  const countryNested = d3
    // creates a nest with keys initially empty
    .nest()
    // creates a key for countries, values will be the data with the same key. The Key takes in a callback function
    .key((d, i) => {
      return d.country;
    })
    // This applys the nest operator to a specific array
    .entries(data);
  const countryCount = countryNested.length;

  const countryNestedStreams = d3
    .nest()
    .key(d => d.country)
    .rollup(leaves => {
      leaves.forEach(leaf => {
        leaf.songArtist = leaf.song + leaf.artist;
      });

      const array = d3
        .nest()
        .key(d => d.songArtist)
        .rollup(leaves => {
          const totalStreams = d3.sum(leaves, d => +d.streams);
          const { artist, country, song } = leaves[0];

          const weekDiff = d3
            .nest()
            .key(d => d.songArtist)
            .rollup(leaves => {
              const overallAverage = leaves.length / countryCount;

              const leavesNested = d3
                .nest()
                .key(d => d.country)
                .rollup(leaves => leaves.length - overallAverage)
                .entries(leaves);
            })
            .entries(data);

          console.log(weekDiff[0]);

          return { artist, country, song, totalStreams };
        })
        .entries(leaves);
      return array;
    })
    .entries(data);

  console.log(countryNestedStreams);
};

const d3analyse = data => {
  const globalSongsObject = globalFilter(data);
  const countryNested = d3
    // creates a nest with keys initially empty
    .nest()
    // creates a key for countries, values will be the data with the same key. The Key takes in a callback function
    .key((d, i) => {
      return d.country;
    })
    // This applys the nest operator to a specific array
    .entries(data);

  const countryCount = countryNested.length;

  // console.log(countryNestedStreams);

  const nestedDataV2 = d3
    .nest()
    // this will create all the unique songs (default will return all the rows associated to it)
    .key(d => {
      return d.songArtist;
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
          return d.country;
        })
        // formatting the values as how many countries - the average
        .rollup(moreLeaves => {
          return moreLeaves.length - overallAverage;
        })
        .entries(leaves);
      // For each song we are looking at for each country it is in and finding the
      return {
        overallAvg: overallAverage,
        nested: leavesNested,
      };
    })
    .entries(data);
  console.log(nestedDataV2);
  const countriesFormat = {};
  const output = [];

  // array of countries
  countryNested.forEach(country => {
    const countryName = country.key,
      maxWeeks = {
        songKey: 'placeholder',
        weekDiff: -1000,
        song: '',
        artist: '',
      };
    nestedDataV2.forEach(song => {
      // look at its values, find the country value, if the value is greater than the weeks
      const nestedSong = song.value.nested.filter(songdata => {
        return songdata.key === countryName;
      });
      if (nestedSong[0]) {
        var nestedSongData = nestedSong[0];
        if (
          maxWeeks.weekDiff < nestedSongData.value &&
          globalSongsObject[song.key]
        ) {
          maxWeeks.songKey = song.key;
          maxWeeks.weekDiff = nestedSongData.value;
        }
      }
      countriesFormat[countryName] = maxWeeks;
    });
  });
  Object.keys(countriesFormat).forEach(key => {
    output.push({
      country: key,
      song: countriesFormat[key].songKey,
      weekDiff: countriesFormat[key].weekDiff,
    });
  });
  return output;
};

const data = [];
//Load in data
dataset = [];
d3.csv('../dataScrape/spotify_data_top_200.csv', function(d, i) {
  d.songArtist = d.song + d.artist;
  dataset.push(d);
}).then(() => {
  d3analyse2(dataset);
  // globalFilter(dataset);
});
