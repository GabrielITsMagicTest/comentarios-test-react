import styled from 'styled-components'

export const Container = styled.div `
    width: 80%;
    max-width: 360px;
    height: 100%;
    display: block;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 50px;
        width: 200px;
    }

    textarea {
        width: 100%;
        height: 138px;
        margin-top: 50px;
        margin-bottom: 25px;
        padding: 15px;
    }

    ul {
        width: 100%;
    }

    ul li {
        background: rgba(255,255,255,0.14);
        width: 100%;
        height: 68px;
        margin-top: 20px;
        list-style-type: none;
        display: flex;
        align-items: center;
        padding: 15px;
        color: white;
    }
`

export const Button = styled.button `
    background-color: ${ props => props.isOn ? '#000000' : 'gray'};
    border-radius: 10px;
    width: 100%;
    height: 64px;
    color: white;
    border: none;
    pointer-events: ${ props => props.isOn ? 'auto' : 'none'};

    &:active {
        background-color: gray;
    }
`