export const fetchBeerData = () => {
  return fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data) => {
      // Return the transformed data
      return {
        name: data[0].name,
        tag: data[0].tagline,
        info: data[0].description,
        image: data[0].image_url,
        volume: {
          value: data[0].volume.value,
          unit: data[0].volume.unit,
        },
        boilVolume: {
          value: data[0].boil_volume.value,
          unit: data[0].boil_volume.unit,
        },
        tempMash: data[0].method.mash_temp[0].temp.value,
        tempFer: data[0].method.fermentation.temp.value,
        malt: data[0].ingredients.malt,
        hops: data[0].ingredients.hops,
        yeast: data[0].ingredients.yeast,
        foodPairing: data[0].food_pairing,
      };
    })
    .catch((error) => {
      console.error("Error fetching beer data:", error);
      return null;
    });
};
