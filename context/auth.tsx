import { createContext, ReactNode, useState } from "react";

// Define uma interface para os dados que o contexto de autenticação irá fornecer.
// A interface AuthContextData descreve a estrutura dos dados que
//serão disponibilizados no contexto.
interface AuthContextData {
  signed: boolean;
  user: any;
  signIn(usuario: any): Promise<void>;
}

// Cria um contexto de autenticação.
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Define o provedor de autenticação,
// que irá envolver os componentes que precisam acessar o contexto.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(undefined); // Estado para armazenar os dados do usuário
  const [signed, setSigned] = useState<any>(false); // Estado para indicar se o usuário está autenticado

  // Função assíncrona para realizar o login.
  const signIn = async (usuario: any) => {
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
