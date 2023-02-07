import React from 'react';
import { InputBox } from "./style";
import BotaoEnviar from '../../assets/icon-arrow.svg'

export default function Input({ipState, search}) {

    const [ip, setIp] = ipState;

    const handleChange = e => {
        setIp(e.target.value)
    }


    return (
        <InputBox>
            <input type="text" value={ip} onChange={handleChange} placeholder="Search for any IP Address..." />
            <button onClick={() => search(ip)}><img src={BotaoEnviar}></img></button>
        </InputBox>
    )
}