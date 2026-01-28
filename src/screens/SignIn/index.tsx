import { Button } from "../../components/Button/Index";
import { Input } from "../../components/Input";
import { Background, Container, Espaco, Logo, Overlay,Subtitle,Title } from "./styles";  

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";  
import { useNavigation } from "@react-navigation/native";

import {useForm,Controller} from 'react-hook-form'

const bgImage = require("../../assets/background.jpg");  

type FormDataProps = {
  username: string;
  email: string;
  password: string;

}

export function SignIn() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();
  
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  function handleGoBack() {
    navigator.navigate("signUp");
  }

  function handleSignIn({username, email, password}: FormDataProps) {
    console.log({username, email, password});
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
        name="username"
        rules={{
          required:'Insira o seu primeiro nome'
        }}
        render={({field:{onChange,value}})=>(
        <Input
         placeholder="Nome de usuário" 
         onChangeText={onChange}
         value={value}
         />
        )}
        />
      {errors.username?.message && (<Subtitle>{errors.username.message}</Subtitle>)}
       
        <Controller 
        control={control}
        name="email" 
        rules={{
          required:'Insira o seu e-mail',
          pattern:{
            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:'E-mail inválido'
          }     
        }}
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
    
    </Container>
    </Overlay>
    </Background>
  );
}

        
