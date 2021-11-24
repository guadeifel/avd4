import React from "react";
import {
  View, 
  Image,
  Text 
} from "react-native"

import Watering from '../../assets/watering.png';
import { Container } from "./styles";

export function Signin(){
  return (
    <>
      <Container>
        <Image source={Watering}/>
      </Container>
    </>    
  )
}