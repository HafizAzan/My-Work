import { location } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (search = "toronto") => {
  return new Promise((resolve, reject) => {
    const locationMockData = location[search];

    if (!locationMockData) {
      reject("not found");
    }

    const transformLocationData = locationTransformData(location[search]);

    resolve(transformLocationData);
  });
};

const locationTransformData = (locationData) => {
  const { results } = locationData;
  const formattedResponse = camelize(results);
  const { geometry } = formattedResponse[0];

  return {
    lat: geometry.location.lat,
    lng: geometry.location.lng,
    viewport: geometry.viewport,
  };
};
