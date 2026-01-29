import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDtos";
import { set } from "react-hook-form";

export type AuthContextDataProps   = {
  user: UserDTO;
  signIn : (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps  ) {
  const [user, setUser] = useState({
    id: "1",
    name: "Oseias",
    email: "oseias@gmail.com",
    token: "token12345",
  });

  function signIn(email: string, password: string) {
    // lógica de autenticação 
    setUser({
      id: "1",
      name: "Oseias",
      email: "oseias@gmail.com",
      token: "token12345",
    });
  }    

  return (    
      <AuthContext.Provider value={{user, signIn}}>
          {children}
      </AuthContext.Provider>
  );
}   

