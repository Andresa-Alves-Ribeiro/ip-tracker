import React from 'react';
import L from "leaflet";
import iconLc from "../../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MyMap } from "./style";
import 'leaflet/dist/leaflet.css';

export default function Map({ lat, lon }) {

    const iconLocation = new L.Icon({
        iconUrl: iconLc,
        iconSize: new L.Point(40, 40),
        className: 'leaflet-icon-location'
    });

    const position = [lat, lon];

    return (
        <MyMap>
            <MapContainer center={position} zoom={17} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconLocation}>
                </Marker>
            </MapContainer>
        </MyMap>
    )
}