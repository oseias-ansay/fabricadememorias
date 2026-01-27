import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

export const Overlay = styled.View`
  flex: 1;
  /* usar rgba para manter a imagem visível por baixo */
  background-color: rgba(0, 0, 0, 0.25);
 
`;

export const Container = styled.View`

  flex: 1;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRANCO};
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRANCO};
  font-size: 16px;
  margin-bottom: 12px;
`;