import { React, useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const MapsPage = ({ isLoaded }) => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // const center = {
  //   lat: -2.5,
  //   lng: 118.0,
  // };

  const center = {
    lat: position.latitude,
    lng: position.longitude,
  };

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={1000}>
        {center && (
          <Marker
            position={center}
            onClick={() => {
              console.log(center);
            }}
          />
        )}
      </GoogleMap>
    )
  );
};

export default MapsPage;
