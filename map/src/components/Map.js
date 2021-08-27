import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { blueIcon, redIcon } from './Icons';
import "./styles.css";

function Map() {
  const menti = [1.35735, 103.7];
  const locations = [
    { name: "menti", position: [1.35735, 103.7], size: 40 },
    { name: "mentor", position: [1.35735, 103.94], size: 30 },
    { name: "mentor", position: [1.35735, 103.8], size: 30 }
  ];
  return (
    <MapContainer
      className="leaflet-container"
      center={menti}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => {
        return (
          <Marker
            position={location.position}
            key={index}
            icon={location.name === "menti" ? blueIcon : redIcon}>
            <Popup>
              Name: {location.name} <br />
              latitude: {location.position[0]}
              <br />
              longtitude: {location.position[1]}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
export default Map;