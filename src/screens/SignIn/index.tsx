import { useState } from "react";
import { Button } from "../../components/Button/Index";
import { Input } from "../../components/Input";
import { Background, Container, Espaco, Logo, Overlay,Subtitle,Title } from "./styles";  
import { useAuth } from "../../hooks/useAuth";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";  
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm,Controller, set} from 'react-hook-form'
import { Alert } from "react-native";
const bgImage = require("../../assets/background.jpg");  

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup
    .string().email('E-mail inválido')
    .required('E-mail obrigatório').email('Insira um e-mail válido'),
  password: yup
    .string().min(6,'A senha deve ter pelo menos 6 dígitos')
    .required('Senha obrigatória'),
});
export function SignIn() {  
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
  resolver: yupResolver(signInSchema),
});

  
const navigator = useNavigation<AuthNavigatorRoutesProps>();
  function handleGoBack() {
  navigator.navigate("signUp");
  }

async function handleSignIn({email, password}: FormDataProps) {
  try {
  setIsLoading(true);
  } catch (error) {
  const isAppError = error instanceof Error; 
  const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.';
  setIsLoading(false);

  Alert.alert('Entrar', title);
  }
 
}
  return (
    <Background source={bgImage} resizeMode="cover"> 
    <Overlay>
    <Container>   
        <Logo>Fábrica de Memórias</Logo>
        <Title>Familia Solyom Ansay</Title>
        <Subtitle>Faça seu login</Subtitle>
        <Espaco />
       
        <Controller 
        control={control}
        name="email" 
        render={({field:{onChange,value}})=>(
        <Input
         placeholder="Email" 
         onChangeText={onChange}
         value={value}
         />
        )}
        />
      
        <Controller 
        control={control}
        name="password"
        render={({field:{onChange,value}})=>(
        <Input
         placeholder="Senha" 
         secureTextEntry 
         onChangeText={onChange} 
         value={value} />
        )}
        />

       <Espaco />
       <Button title="Entrar" onPress={handleSubmit(handleSignIn )}  />
       <Button title="Criar a sua conta" onPress={handleGoBack}  /> 

       <Subtitle>Esqueceu sua senha?</Subtitle>
    
    </Container>
    </Overlay>
    </Background>
  );
}

        
