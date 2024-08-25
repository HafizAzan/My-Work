import { createContext, useContext, useEffect, useState } from "react";
import { locationRequest } from "./location.service";
import { restaurantRequest } from "../restaurants/restaurant.service";

const LocationContext = createContext();

const LocationContextComponent = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  const onSearch = (keyword) => {
    if (keyword) {
      setLoading(true);
      setError(null);
      setTimeout(() => {
        setSearchQuery(keyword);
      }, 500);
    }
  };

  useEffect(() => {
    if (!searchQuery.length) return;

    locationRequest(searchQuery)
      .then((res) => {
        setError(null);
        setLocation(res);
        const { lat, lng } = res;
        const payload = `${lat},${lng}`;
        restaurantRequest(payload)
          .then((data) => {
            setRestaurant(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error);
        console.error(error);

        setLoading(false);
      });
  }, [searchQuery]);
  return (
    <LocationContext.Provider
      value={{
        searchQuery,
        error,
        loading,
        location,
        restaurant,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextComponent;

export const useLocationContext = () => {
  return useContext(LocationContext);
};
