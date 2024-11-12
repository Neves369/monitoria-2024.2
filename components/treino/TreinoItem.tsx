import React from "react";
import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

const TreinoItem = ({ item }: any) => {
  console.log(item);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.nome}</Text>
    </View>
  );
};

export default TreinoItem;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
  },
});
