import React from 'react';
import L from "leaflet";
import iconLc from "../../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MyMap } from "./style";

export default function Map({ lat, lon }) {

    const Location = new L.Icon({
        iconUrl: iconLc,
        iconSize: new L.Point(60, 60),
        className: 'leaflet-icon-location'
    });

    return (
        <MyMap>
            <MapContainer center={[lat, lon]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />

                <Marker position={[lat, lon]} icon={Location} />
            </MapContainer>
        </MyMap>
    )
}