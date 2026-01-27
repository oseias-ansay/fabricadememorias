import styled from "styled-components/native";

/* Background como ImageBackground */
export const Background = styled.ImageBackground`
  flex: 1;
`;

/* Overlay para sombrear a imagem, por exemplo */
export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.35);
  justify-content: center;
`;

/* Container central */
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

/* Textos */
export const Logo = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRINCIPAL};
  font-size: ${({  theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top:130px;
 
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECUNDARIA};
  font-size: ${({  theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  align-items:center;
  margin-left:10px;
 
`;

export const Subtitle = styled.Text`

  color: ${({ theme }) => theme.COLORS.BRANCO};
  font-size: ${({  theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;