import { ComponentProps } from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

type Props = ComponentProps<typeof Container> &{
  errorMessage?: string| null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
}

export function Input({...rest}: TextInputProps) {
  return (
    <Container 
    placeholder="E-mail"
    {...rest} 
    />
  )
}