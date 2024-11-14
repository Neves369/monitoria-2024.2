import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";
import data from "../../data.json";
import { TreinoProps } from "../../routes/app.routes";

const Treino = ({ route, navigation }: TreinoProps) => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(route.params);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={treinos}
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
});
