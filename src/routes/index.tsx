import React from "react";
import { useContext } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth  } from "../hooks/useAuth";  

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function Routes() {
const { user } = useAuth();
console.log("Usuário Logado:", user);

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}