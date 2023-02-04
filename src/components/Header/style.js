import styled from 'styled-components';

import BackgroundHeader from "../../assets/pattern-bg.png";

export const ContainerHeader = styled.header`

width: 100%;
height: 300px;
background: url(${BackgroundHeader}) no-repeat;
display: flex;
flex-direction: column;
align-items: center;

> h2 {
    text-align: center;
    color: #fff;
    margin: 40px;
}
`