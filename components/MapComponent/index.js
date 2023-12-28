// components/MapComponent.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: parseFloat(lat), // memastikan tipe data adalah float
    lng: parseFloat(lng),
  };

  return (
    <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
