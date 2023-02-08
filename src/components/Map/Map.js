import React from 'react';

import { MyMap } from "./style";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import iconLc from "../../assets/images/icon_location.png";

export default function Map({lat,lon}) {

    const iconLocation = new L.Icon({
        iconUrl: iconLc,
        iconSize: new L.Point(45, 45),
        className: 'leaflet-icon-location'
    });

    const Location = [lat, lon];

    return (
        <MyMap>
            <MapContainer center={Location} zoom={17} style={{padding: 2}}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />

                <Marker position={Location} icon={iconLocation}/>
            </MapContainer>
        </MyMap>
    )
}
