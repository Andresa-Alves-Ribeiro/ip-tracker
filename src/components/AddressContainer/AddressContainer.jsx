import React from "react";
//import Loading from "../Loading/Loading";
import { Address, Loading } from "./style";

export default function AddressContainer({ data }) {
    const { query, city, countryCode, timezone, isp } = data;

    let location = false || city + countryCode;

    return (
        <div>
            <span>
                <p>Endereço IP</p>
                <div>{query || <Loading id="loading" />}</div>
            </span>

            <span>
                <p>Localização</p>
                <div>
                    {
                        <span>
                            <label>{city}</label><br />
                            <label>{countryCode}</label>
                        </span> || <Loading id="loading" />
                    }
                </div>
            </span>

            <span>
                <p>Fuso horário</p>
                <div>{timezone || <Loading id="loading" />}</div>
            </span>

            <span>
                <p>isp</p>
                <div>{timezone || <Loading id="loading" />}</div>
            </span>
        </div>
    )
}