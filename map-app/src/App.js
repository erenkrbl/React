import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mentiData from './data/menti-data.json';
import mentorData from './data/mentor-data.json';
import "./styles.css";



function App() {

  const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const ZOOM_LEVEL = 6;
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
      {mentiData.map((menti, index) =>
        <Marker
          key={index}
          position={[menti.lat, menti.lng]}
        >
          <Popup>
            <h4>{"Menti :" + menti.city}</h4>
            <b>{"latitude : " + menti.lat}<br />{" longitude : " + menti.lng}</b>
          </Popup>
        </Marker>
      )}
      {mentorData.map((mentor) =>
        <Marker
          key={mentor.id}
          position={[mentor.gps.latitude, mentor.gps.longitude]}
        >
          <Popup position={[mentor.gps.latitude, mentor.gps.longitude]}>
            <div>
              <h4>{"Mentor: " + mentor.name}</h4>
              <p>
                {"latitude : " +
                  mentor.gps.latitude +
                  " longitude : " +
                  mentor.gps.longitude}
              </p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer >
  );
}

export default App;
