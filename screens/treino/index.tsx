import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TreinoItem from "../../components/treino/TreinoItem";

const Treino = () => {
  const [treinos, setTreinos] = useState([
    { id: 1, nome: "Treino 1" },
    { id: 2, nome: "Treino 2" },
    { id: 3, nome: "Treino 3" },
    { id: 4, nome: "Treino 4" },
    { id: 5, nome: "Treino 5" },
    { id: 6, nome: "Treino 6" },
    { id: 7, nome: "Treino 7" },
    { id: 8, nome: "Treino 8" },
    { id: 9, nome: "Treino 9" },
  ]);

  const Header = () => {
    return <View style={styles.header} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={treinos}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => {
          return <TreinoItem item={item} />;
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default Treino;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 10,
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "blue",
  },
});
