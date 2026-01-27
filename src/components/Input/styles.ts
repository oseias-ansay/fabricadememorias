import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 320px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.SECUNDARIA};  
  border-radius: 8px;
  padding: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
  color: ${({ theme }) => theme.COLORS.BRANCO};
  flex-direction: row;  
  align-items: center;
  margin-top: 20px;
  `;