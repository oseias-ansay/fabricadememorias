import { Button } from "../../components/Button/Index";
import { Input } from "../../components/Input";
import { Background, Container, Espaco, Logo, Overlay,Title } from "./styles";  

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";  
import { useNavigation } from "@react-navigation/native";

const bgImage = require("../../assets/background.jpg");      

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  function handleGoBack() {
    navigator.navigate("signIn");
  }
  return (
    <Background source={bgImage} resizeMode="cover"> 
    <Overlay>
    <Container>   
        <Logo>Fábrica de Memórias</Logo>
        <Title>Familia Solyom Ansay</Title>
        <Espaco />
       <Input placeholder="Nome de usuário" />
       <Input placeholder="Email" />
       <Input placeholder="Senha" secureTextEntry />  
       <Espaco />
       <Button title="Cadastrar Conta" />
       <Button title="Voltar a tela inicial" onPress={handleGoBack}  /> 
    
    </Container>
    </Overlay>
    </Background>
  );
}

        
