import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";
import { TreinoProps } from "../../routes/app.routes";

const Treino = ({ route, navigation }: TreinoProps) => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(route.params);
  }, []);

  // const buscarExercios = (nome: string) => {
  //   const categoria = data.categorias.find(
  //     (atividade) => atividade.nome === nome
  //   );
  //   const exercicios = categoria ? categoria.exercicios : [];
  //   navigation.navigate("Treino", exercicios);
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={treinos}
        renderItem={({ item }) => {
          return (
            <TreinoItem
              item={item}
              onPress={() => {
                navigation.navigate("Exercicios", item.exercicios);
              }}
              resizeMode="contain"
              reverseItem={false}
            />
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
});
