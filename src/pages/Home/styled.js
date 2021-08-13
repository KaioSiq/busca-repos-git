import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const h1 = styled.h1`
    font-family: Sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const h4 = styled.h4`
    font-family: Sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-family: Sans-serif;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    font-family: Sans-serif;
    

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    font-family: Sans-serif;
`;