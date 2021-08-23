import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cities from './cities.json';
import "./styles.css";



function App() {

  const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city, index) =>
        <Marker
          key={index}
          position={[city.lat, city.lng]}
        >
          <Popup>
            <b>{city.city}<br/>{city.country}</b>
          </Popup>

        </Marker>
      )}


    </MapContainer >
  );
}

export default App;
