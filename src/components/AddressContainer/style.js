import styled from 'styled-components';

export const Loading = styled.aside`

    color:#CCC;
    border:3px solid ;
    border-color: #eee #eee #eee transparent;
    width:20px;
    height:20px;
    border-radius:50%;

`;

export const Address = styled.div`

    width: 86%;
    max-width: 1100px;
    background: #fff;
    border-radius: 12px;
    margin-top: 2.5rem;
    display: flex;
    flex-direction:row;
    box-shadow: 10px 20px 40px -20px rgba(0,0,0,.2);
    padding: 25px 0 10px 0;

    span {
        margin: 0 auto 10px auto;
        text-align: start;
        line-height: 26px;

        > p:first-child {
            color: gray;
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
    
        > div {
            font-size:1.3em;
            font-weight: 600;
            margin:5px 0;
            color:var(--very-dark-gray);

        }

        #loading {
            margin:10px auto 5px auto ;
            animation: load 1s linear infinite;
        }

        @keyframes load {
            to{transform:rotate(360deg)}
        }

    }

`;

export const VerticalLine = styled.div`
height: 70px;
border: 0.1px solid #CCC;
`