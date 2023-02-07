import React from 'react';

import { ContainerHeader } from "./style";


export default function Header({children}) {

    return (
        <ContainerHeader>
            
            <h2>IP Address Tracker</h2>

            {children}

        </ContainerHeader>
    )
}
