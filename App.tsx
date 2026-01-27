
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes"; // ajustado para apontar para src/routes/index.tsx
import { AuthContextProvider } from "./src/contexts/AuthContext";
import theme from "./src/theme";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <AuthContextProvider >
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </AuthContextProvider >   
  );
}