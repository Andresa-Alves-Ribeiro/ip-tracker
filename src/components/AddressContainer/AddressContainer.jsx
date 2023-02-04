import React from "react";

export default function AddressContainer({ data }) {
    const { query, city, countryCode, timezone, isp } = data;

    let location = false || city + countryCode;

    return (
        <div>
            <span>
                <p>Endereço IP</p>
                <div>{query || < Loading id="loading" />}</div>
            </span>

            <span></span>
        </div>
    )
}