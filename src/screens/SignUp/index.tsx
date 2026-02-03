import React from "react";
import { Button } from "../../components/Button/Index";
import { Input } from "../../components/Input";
import { Background, Container, Espaco, Logo, Overlay, Subtitle, Title } from "./styles";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

const bgImage = require("../../assets/background.jpg");

type FormDataProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpSchema = yup.object({
  username: yup.string().required("Informe o seu primeiro nome"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Informe o seu e-mail"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Informe a sua senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "As senhas não coincidem")
    .required("Confirme a sua senha"),
});

export function SignUp() {
  
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  // Função para navegar de volta ao "signIn"
  function handleGoBack() {
    navigator.navigate("signIn");
  }

  // Função para registrar o usuário
  async function handleSignUp({ username, email, password }: FormDataProps) {
    try {
      const response = await api.post("/users", { username, email, password });
      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível criar a conta. Tente novamente mais tarde.";
      Alert.alert(title);
    }
  }

  return (
    <Background source={bgImage} resizeMode="cover">
      <Overlay>
        <Container>
          <Logo>Fábrica de Memórias</Logo>
          <Title>Familia Solyom Ansay</Title>
          <Subtitle>Crie sua conta</Subtitle>
          <Espaco />

          {/* Campo de nome de usuário */}
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome de usuário"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.username && <Subtitle>{errors.username.message}</Subtitle>}

          {/* Campo de email */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Subtitle>{errors.email.message}</Subtitle>}

          {/* Campo de senha */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <Subtitle>{errors.password.message}</Subtitle>}

          {/* Campo de confirmação de senha */}
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="done"
              />
            )}
          />
          {errors.confirmPassword && <Subtitle>{errors.confirmPassword.message}</Subtitle>}

          <Espaco />

          <Button title="Cadastrar Conta" onPress={handleSubmit(handleSignUp)} />
          <Button title="Voltar a tela inicial" onPress={handleGoBack} />
        </Container>
      </Overlay>
    </Background>
  );
}