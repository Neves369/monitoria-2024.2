import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";
import data from "../../data.json";

const Treino = () => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(data.categorias[0].exercicios);
  }, []);

  const Header = () => {
    return <View style={styles.header} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={treinos}
        ListHeaderComponent={Header}
        renderItem={({ item }) => {
          return (
            <TreinoItem item={item} resizeMode="contain" reverseItem={false} />
          );
        }}
        keyExtractor={(item) => `${item.nome}`}
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
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "blue",
  },
});
