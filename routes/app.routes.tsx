import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Dashboard from "../screens/dashboard";
import Treino from "../screens/treino";

// Define o tipo StackNavigation que representa a estrutura das rotas na navegação de stack.
// Esse tipo descreve duas rotas (Dashboard e Treino)
// e os parâmetros que cada uma delas aceita:
// Dashboard: Não aceita parâmetros (undefined).
// Treino: Aceita um array de itens.
type StackNavigation = {
  Dashboard: undefined;
  Treino: Array<any>;
};

// Exportando 3 tipos que serão usados para tipar as props nas telas e na navegação:
// StackTypes: Usado para tipar a propriedade navigation em componentes que utilizam a navegação stack.
// DashboardProps: Usado para tipar as props do componente Dashboard. Inclui informações sobre a navegação e os parâmetros da rota Dashboard.
// TreinoProps: Usado para tipar as props do componente Treino. Inclui informações sobre a navegação e os parâmetros da rota Perfil.
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type DashboardProps = NativeStackScreenProps<
  StackNavigation,
  "Dashboard"
>;
export type TreinoProps = NativeStackScreenProps<StackNavigation, "Treino">;

// Criação do stack navigator do tipo StackNavigation,
//garantindo que navegação siga a estrutura de rotas e parâmetros definidos no mesmo.
const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

// O StackComponent é um componente funcional que define a estrutura de navegação.
// Dentro dele, você configura as telas (Screen) que compõem a navegação stack
const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Dashboard">
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          animation: "slide_from_left",
        }}
      />
      <Screen
        name="Treino"
        component={Treino}
        options={{
          animation: "slide_from_left",
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;