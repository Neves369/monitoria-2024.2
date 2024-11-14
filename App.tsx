import Routes from "./routes";
import { AuthProvider } from "./context/auth";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // Permite que a navegação funcione corretamente.
    <NavigationContainer>
      {/* O AuthProvider envolve as rotas da aplicação, permitindo que os componentes 
          dentro dele acessem o contexto de autenticação. */}
      <AuthProvider>
        {/* O componente Routes é responsável por definir as diferentes telas 
            ou páginas da aplicação e como navegar entre elas. */}
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
