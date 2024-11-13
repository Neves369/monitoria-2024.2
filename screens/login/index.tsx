import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import { useState } from "react";
import background from "../../assets/background.png";

const Login = () => {
  // Define o estado para email e senha
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  // Função chamada ao logar
  const logar = () => {
    console.log("entrou!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.signInContainer}>
          <Text style={styles.label}>SIGN IN</Text>
        </View>
        <TextInput
          placeholderTextColor={"white"}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          placeholderTextColor={"white"}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={senha}
          onChangeText={(e) => {
            setSenha(e);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            logar(); // Chama a função logar ao pressionar o botão
          }}
          style={styles.button}
        >
          <Text style={styles.textButton}>ENTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    gap: 30,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, // Espaçamento interno
    color: "#fbfbfb",
    backgroundColor: "#e7e7e746",
  },
  button: {
    padding: 20, // Espaçamento interno do botão
    width: "100%",
    backgroundColor: "#e7e7e7",
    alignItems: "center",
    borderRadius: 5, // Bordas arredondadas do botão
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    flex: 1,
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
});
