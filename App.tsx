import { SafeAreaView } from "react-native";
import Dashboard from "./screens/dashboard";
import Login from "./screens/login";
import Treino from "./screens/treino";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Treino />
    </SafeAreaView>
  );
}
