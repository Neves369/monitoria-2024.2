import { useContext } from "react";
import AppRoutes from "./app.routes"; // Rotas da aplicação principal
import AuthRoutes from "./auth.routes"; // Rotas de autenticação
import AuthContext from "../context/auth";

// Define o componente Routes que gerencia
// as rotas da aplicação com base no estado de autenticação.
const Routes = () => {
  // Usa o hook useContext para acessar o contexto de autenticação.
  // Desestrutura o valor 'signed' do contexto. Se o contexto não estiver disponível,
  // define 'signed' como false.
  const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
    signed: false,
  };

  // Retorna as rotas apropriadas com base no estado de autenticação do usuário.
  return <>{!signed ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Routes;
