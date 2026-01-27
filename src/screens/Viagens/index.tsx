import React from "react";
import { Background, Overlay, Container, Title, Subtitle, Logo } from "./styles";
import { Grade } from "../../components/Grade";

const bgImage = require("../../assets/background.jpg");

export function Viagens() {
  return (
    <Background source={bgImage} resizeMode="cover">
      <Overlay>

        <Container>
          <Logo>Fábrica de Memórias</Logo>
          <Title>Família Solyom Ansay</Title>
          <Grade />  
       
        </Container>

        </Overlay>
    </Background>
  );
}