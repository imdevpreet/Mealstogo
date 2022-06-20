import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hour && restaurant.opening_hour.open_now,
      isClosedTemporarily: restaurant.bussiess_status === "ClosedTemporarily",
    };
  });

  return camelize(mappedResults);
};
