import { useState, useEffect } from "react";

const LocationFinder = () => {
  const [lat, SetLat] = useState(null);
  const [errorMessage, setErrorMsg] = useState("");
  //state = { lat: null, errorMessage: "" };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => SetLat(position.coords.latitude),
      (error) => setErrorMsg(error.message)
    );
  }, []);

  return [lat, errorMessage];
};

export default LocationFinder;
