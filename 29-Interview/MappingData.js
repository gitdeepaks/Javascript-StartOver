const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [42, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValue: {
      config_key: 100,
    },
  },
  {
    dataValue: {
      config_key: 200,
    },
  },
];
const result = loc
  .map((locEl, index) => {
    return locEl.location_key.map((locationKey) => {
      return {
        location_key: locationKey,
        config_key: bulkConfig[index].dataValue.config_key,
        autoassign: locEl.autoassign,
      };
    });
  })
  .reduce((arr, acc) => arr.concat(acc), []);
console.log(result);
