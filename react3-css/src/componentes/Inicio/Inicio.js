import React from "react";
import styled from "styled-components";
export default class Inicio extends React.Component{
    render(){
        return(
            <div>
                <Titulo>Hola mundo</Titulo>
                <Button>Iniciar</Button>
            </div>
            
        )
    }
}


const Titulo = styled.h1`
font-size: 1.5em;
text-align: center;
color: blue;
`;

const Button = styled.button`
border-radius: 20px;
border: 2px
`;