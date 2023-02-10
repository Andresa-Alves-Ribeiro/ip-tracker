import React from "react";
import { Address, Loading, VerticalLine } from "./style";

export default function AddressContainer({ data }) {
    const { ip, location, isp } = data;

    return (
        <Address>

            <span>
                <p>IP Address</p>
                <div className="font-data">{ip || < Loading id="loading" />} </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Location</p>
                <div>{
                    location ?
                        <span>
                            <label className="font-data">{location.city}</label><br />
                            <label>{location.country}</label>
                        </span>
                        : <Loading id="loading" />
                }
                </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>Timezone</p>
                <div>{
                    location ?
                        <span className="font-data">
                            <div>UTC{location.timezone || < Loading id="loading" />}</div>
                        </span>
                        : <Loading id="loading" />
                }
                </div>
            </span>

            <VerticalLine></VerticalLine>

            <span>
                <p>isp</p>
                <div className="font-data">{isp || < Loading id="loading" />}</div>
            </span>
        </Address>
    )
}