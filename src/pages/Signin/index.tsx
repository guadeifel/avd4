import React from "react";
import {
  View, 
  Image,
  Text 
} from "react-native"

import Watering from '../../assets/watering.png';

import { 
  Container,
  Content,
  Title,
  SubTitle,
  Imagem
 } from "./styles";

export function Signin(){
  return (
    <>
      <Container>
        <Content>
          <Title>
            Gerecie {`\n`}
            suas plantas de {`\n`}
            forma fácil
          </Title>
        </Content>

        <Imagem 
          source={Watering}
          resizeMode="stretch"
        />  

        <Content>
          <SubTitle>
            Não esqueça mais de regar suas {`\n`} 
            plantas.Nós lembramos você {`\n`}
            sempre que precisar
          </SubTitle>
        </Content>
      </Container>
    </>    
  )
}