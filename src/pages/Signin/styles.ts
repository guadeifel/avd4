import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
`
export const Content = styled.View`
  margin-top: -40px;
`
export const Title = styled.Text`
  font-size: 28;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 38;
  font-family: ${({theme})=> theme.fonts.heading};
  line-height: 34px;
`
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-top: 20;
  padding-bottom: 20;
  color: ${({theme})=> theme.colors.heading};
  font-family: ${({theme})=> theme.fonts.text};
`
export const Imagem = styled.Image`
  height: Dimensions.get('window').20%
`