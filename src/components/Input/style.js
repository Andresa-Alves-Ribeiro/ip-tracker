import styled from 'styled-components';

export const InputBox = styled.div`

width: 87%;
max-width: 450px;
height: 45px;

input {
    height: 100%;
    width: 90%;
    border-top-left-radius:12px;
    border-bottom-left-radius:12px;
    padding: 0 18px;
    color: var(--very-dark-gray);
    
       ::placeholder{
            color: gray;
        }
}


button {
        background: #000;
        height:100%;
        width:10%;
        border-top-right-radius:12px;
        border-bottom-right-radius:12px;
        color: #fff;
        font-weight:700;
        transition:.4s;
        :hover{
            background: #333;
        }
    }

    button img {
        width: 12px;
    }
`