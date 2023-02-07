import React from "react";
import { Address, Loading, VerticalLine } from "./style";

export default function AddressContainer({ data }) {
    const { query, city, countryCode, timezone, isp } = data;

    let location = false || city + countryCode;

    return (
        <Address>

            <span>
                <p>Endereço do IP</p>
                <div>{query || < Loading id="loading" />} </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Localização</p>
                <div>{
                    <span>
                    
                        <label>{city}</label><br/>
                        <label>{countryCode}</label>
                    
                    </span> || < Loading id="loading" />} 
                </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Fuso horário</p>
                <div>{timezone || < Loading id="loading" />}</div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>isp</p>
                <div>{isp || < Loading id="loading" />}</div>
            </span>
        </Address>
    )
}