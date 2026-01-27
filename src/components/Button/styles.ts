import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  max-width: 320px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding-horizontal: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BRANCO};
`;