import Login from "../screens/login";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// Define o tipo StackNavigation que representa a estrutura das rotas na navegação de stack.
// Esse tipo descreve uma rota (Login)
// e o parâmetro que  ela aceita:
// Login: Não aceita parâmetros (undefined).
type StackNavigation = {
  Login: undefined;
};

// Exportando 2 tipos que serão usados para tipar as props nas telas e na navegação:
// StackTypes: Usado para tipar a propriedade navigation em componentes que utilizam a navegação stack.
// LoginProps: Usado para tipar as props do componente Login. Inclui informações sobre a navegação e os parâmetros da rota Login.
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Login">;

// Criação do stack navigator do tipo StackNavigation,
// garantindo que navegação siga a estrutura de rotas e parâmetros definidos no mesmo.
const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

// O StackComponent é um componente funcional que define a estrutura de navegação.
// Dentro dele, você configura as telas (Screen) que compõem a navegação stack
const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthRoutes;
