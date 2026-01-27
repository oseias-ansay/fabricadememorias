import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 320px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY}  ;
  border-radius: 8px;
  align-items: center;
 
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
  color: ${({ theme }) => theme.COLORS.BRANCO};
  padding: 10px;

`;