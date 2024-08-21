import { mockImages, restaurant } from "./restaurant.mock";
import camelize from "camelize";

export const restaurantRequest = (search = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const restaurantMockData = restaurant[search];

    if (!restaurantMockData) {
      reject("not found");
    }

    const transformLocationData = restaurantTransformData(restaurant[search]);
    resolve(transformLocationData);
  });
};

const restaurantTransformData = (restaurantData) => {
  const { results } = restaurantData;
  const formattedResponse = camelize(results);

  const mappedResults = formattedResponse?.map((singleRestaurant) => {
    singleRestaurant.photos =
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];

    return {
      ...singleRestaurant,
      address: singleRestaurant?.vicinity,
      isOpenNow: Boolean(singleRestaurant?.openingHours?.openNow),
      isClosedTemporarily:
        singleRestaurant?.businessStatus === "CLOSED_TEMPORARILY",
    };
  });

  return mappedResults;
};
