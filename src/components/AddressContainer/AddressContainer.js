import React from "react";
import { Address, Loading, VerticalLine } from "./style";

export default function AddressContainer({ data }) {
    const { query, city, countryCode, timezone, isp } = data;

    return (
        <Address>

            <span>
                <p>IP Address</p>
                <div>{query || < Loading id="loading" />} </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Location</p>
                <div>{
                    <span>
                    
                        <label>{city}</label><br/>
                        <label>{countryCode}</label>
                    
                    </span> || < Loading id="loading" />} 
                </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Timezone</p>
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