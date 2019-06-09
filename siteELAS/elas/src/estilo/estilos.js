import styled from "styled-components"

export const Botao = styled.button`
    height: calc(6px + 5vmin);
    width: calc(25px + 20vmin);
    border-radius: 30px;
    cursor: pointer;
	font-weight: bold;

`;

export const BotaoInicial = styled(Botao)`
    background-color: #D8315B;
    margin: 8%;

`;

export const BotaoRosa = styled(Botao) `
    background-color: #D8315B;
    margin: 8px;
`;

export const BotaoVerde = styled(Botao) `
    background-color: #1B9AAA;
    margin: 8px;
`;