import IUsuario from "../models/IUsuario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

// Define uma interface para os dados que o contexto de autenticação irá fornecer.
// A interface AuthContextData descreve a estrutura dos dados que
//serão disponibilizados no contexto.
export interface AuthContextData {
  signed: boolean;
  user: IUsuario;
  signIn(usuario: IUsuario): Promise<void>;
}

// Cria um contexto de autenticação.
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Define o provedor de autenticação,
// que irá envolver os componentes que precisam acessar o contexto.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(undefined); // Estado para armazenar os dados do usuário
  const [signed, setSigned] = useState<any>(false); // Estado para indicar se o usuário está autenticado

  // Recupera o usuário da memória para mante-lo logado
  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser: any = await AsyncStorage.getItem("@Usuario:user");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setSigned(true);
      }
    };
    loadStorageData();
  }, []);

  // Função assíncrona para realizar o login.
  const signIn = async (usuario: IUsuario) => {
    //salva o usuário na memória para mante-lo logado
    await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));
    setUser(usuario); // Armazena os dados do usuário no estado.
    setSigned(true); // Atualiza o estado para indicar que o usuário está autenticado.

    // Retorna uma promessa resolvida,
    // indicando que a operação de login foi bem-sucedida.
    return Promise.resolve();
  };

  // Retorna o provedor do contexto,
  // passando os dados e funções necessárias para os componentes filhos.
  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Exporta o contexto.
export default AuthContext;
