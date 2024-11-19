import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useContext, useState } from "react";
import background from "../../assets/background.png";
import AuthContext from "../../context/auth";
import UsuarioService from "../../services/UsuarioService";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn }: any = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Função chamada ao logar
  const logar = (data: any) => {
    setLoading(true);

    UsuarioService.login(data)
      .then((resp: any) => {
        if (resp.status == 200) {
          signIn(resp.data[0]);
        } else {
          console.log("Erro ao realizar login!");
        }
      })
      .catch((e) => {
        console.log("Erro: ", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.signInContainer}>
          <Text style={styles.label}>SIGN IN</Text>
        </View>

        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={60}
              placeholderTextColor={"white"}
              style={styles.input}
              placeholder="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>E-mail é obrigatório.</Text>
        )}

        <Controller
          control={control}
          name="senha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              maxLength={12}
              placeholderTextColor={"white"}
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.senha && (
          <Text style={{ color: "red" }}>Senha é obrigatória.</Text>
        )}

        <TouchableOpacity
          disabled={loading}
          onPress={handleSubmit(!loading ? logar : () => {})}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.textButton}>ENTRAR</Text>
          )}
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
