import React from 'react';

import { MyMap } from "./style";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import iconLc from "../../assets/icon_location.png";

export default function Map({lat,lng}) {

    const iconLocation = new L.Icon({
        iconUrl: iconLc,
        iconSize: new L.Point(45, 45),
        className: 'leaflet-icon-location'
    });

    const location = [lat, lng];

    return (
        <MyMap>
            <MapContainer center={location} zoom={17} style={{ width: "100vw", height: "100vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={location} icon={iconLocation}/>
            </MapContainer>
        </MyMap>
    )
}
