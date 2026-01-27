import { createContext, ReactNode } from "react";
import { UserDTO } from "../dtos/UserDtos";
import { ThemeProvider } from "@react-navigation/native";
import theme from "../theme";
import { Loading } from "../components/Loading";

export type AuthContextDataProps   = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps  ) {
  return (
     <AuthContext.Provider value={{
         user: {
          id: "1",
          name: "Oseias",
          email: "oseias@gmail.com",
          token: "token-de-teste",
         }                
        }}>
          {children}

        </AuthContext.Provider>
  );
}

