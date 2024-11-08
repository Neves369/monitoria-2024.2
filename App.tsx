import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import logo from "./assets/icon.png";

export default function App() {
  // Define o estado para email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função chamada ao logar
  const logar = () => {
    console.log("entrou!");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setEmail(e); // Atualiza o estado do email ao digitar
        }}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setSenha(e); // Atualiza o estado da senha ao digitar
        }}
        value={senha}
      />

      <TouchableOpacity
        onPress={() => {
          logar(); // Chama a função logar ao pressionar o botão
        }}
        style={styles.button}
      >
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b9595",
    gap: 25, // Espaçamento entre os itens
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, // Espaçamento interno
  },
  button: {
    padding: 12, // Espaçamento interno do botão
    width: 300,
    backgroundColor: "#4accf0",
    alignItems: "center",
    borderRadius: 5, // Bordas arredondadas do botão
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
