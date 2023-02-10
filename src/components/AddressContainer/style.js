import styled from 'styled-components';

export const Loading = styled.aside`

    color: blue;
    border: 3px solid;
    border-color: blue blue blue transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
    z-index: 1001;
    padding: 35px 0 20px 0;

    span {
        margin: 0 auto;
        text-align: start;
        line-height: 26px;

        > p:first-child {
            color: gray;
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
    
        > div, label {
            font-size: 1.3rem;
            font-weight: 600;
            color:var(--very-dark-gray);
            margin-top: 0.5rem;
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


@media(max-width: 700px)

    {
        flex-direction:column;
        margin-top: 3.2rem;
        min-height:152px;
        padding:35px 15px 15px 15px;
        box-shadow: 0px 20px 40px -15px rgba(0,0,0,.2);
        > span{
            text-align:left;
            height:auto;
            width:auto;
            > p:first-of-type{
                font-size:.6rem;
            }
            
            > div{
                font-size:1.7rem;
                margin-top:10px;
                word-wrap:break-word;
                max-width:160px;
                width:auto;
                max-height:70%;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            #loading{
            margin:30px auto 5px auto ;
            animation: load 1s linear infinite;
             }
            :nth-child(n+2)::before{
                content:"";
                background: #ddd;
                position:absolute;
                transform:translate(-30px,0);
                height:85px;
                width:1px;
            }
        }
    }

`

