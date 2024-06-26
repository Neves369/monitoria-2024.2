import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import image from "../../assets/background.png";
import logo from "../../assets/adaptive-icon.png";
import { useForm, Controller } from "react-hook-form";
import app from "../../app.json";
const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submeter = (data: any) => {
    console.log("teste: ", data);
  };

  return (
    //Componente de imagem de fundo
    <ImageBackground source={image} style={styles.container} resizeMode="cover">
      <View style={styles.backgroundContainer}>
        {/* Componente de imagem com nossa logo */}
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>EconoMês</Text>
        <Text style={styles.text}>
          A economia é maior se você não comprar nada
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Login</Text>

        {/* Componente de entrada de texto */}
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>E-mail é obrigatório</Text>
        )}
        <Controller
          control={control}
          name="senha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={value}
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              secureTextEntry={true}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>Senha é obrigatório</Text>
        )}

        {/* View que pode ser pressionada, possui as mesmas propriedades de um button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(submeter)}
        >
          <Text style={styles.buttonText}>{app.expo.version}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 /* Ocupa toda a tela */,
  },
  backgroundContainer: {
    flex: 2 /* Ocupa 2/3 a tela */,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
  },
  text: {
    fontSize: 12,
    color: "#ffffff",
    position: "absolute",
    bottom: 0,
  },
  loginContainer: {
    flex: 1 /* Ocupa 1/3 a tela */,
    elevation: 5,
    backgroundColor: "#ececec",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-between" /* Alinha verticalmente o conteúdo */,
    padding: 20 /* Adiciona padding ao container */,
  },
  titleLogin: {
    fontSize: 24,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%" /* Do tamanho do componente pai*/,
  },
  button: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default LoginScreen;
