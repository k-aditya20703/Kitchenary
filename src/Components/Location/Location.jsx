import React from "react";
import "./Location.css";
const Location = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      latitude: null,
      longitude: null,
    },
    error: null,
  });

  useEffect(() => {
    const onSuccess = (position) => {
      setLocation({
        loaded: true,
        coordinates: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        error: null,
      });
    };

    const onError = (error) => {
      setLocation({
        loaded: true,
        coordinates: null,
        error: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default Location;
