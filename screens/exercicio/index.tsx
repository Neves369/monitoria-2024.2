import React, { useLayoutEffect } from "react";
import Youtube from "../../components/tutorial/video";
import { ExercicioProps } from "../../routes/app.routes";
import { View, StyleSheet, ScrollView, Text, Platform } from "react-native";

const Exercicio = ({ route, navigation }: ExercicioProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params && route.params.nome ? route.params.nome : "Detalhes",
    });
  }, [navigation, route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Youtube videoId={"SWVO95XzxKg"} />
      </View>

      <View style={styles.line}>
        <Text style={styles.text}>"Séries: {route.params.series}"</Text>

        <Text style={styles.text}>"Repetições: {route.params.repeticoes}"</Text>
      </View>

      <View style={styles.card2}>
        <Text style={styles.description}>{route.params.descricao}</Text>
      </View>
    </View>
  );
};

export default Exercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  card: {
    justifyContent: "center",
    width: "90%",
    height: 200,
    marginTop: 20,
    backgroundColor: "#f3f3f3",
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //sombra para ios
      },
      android: {
        elevation: 3, // Sombra para Android
      },
    }),
  },

  card2: {
    width: "90%",
    display: "flex",
    minHeight: 100,
    backgroundColor: "#f3f3f3",
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //sombra para ios
      },
      android: {
        elevation: 3, // Sombra para Android
      },
    }),
  },

  line: {
    gap: 10,
    padding: 10,
    width: "95%",
    textAlign: "center",
    flexDirection: "row",
  },

  text: {
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
    backgroundColor: "#d4d4d4",
  },

  description: {
    textAlign: "justify",
    margin: 20,
    fontWeight: "bold",
  },
});
