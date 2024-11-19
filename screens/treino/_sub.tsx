import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";
import { ExerciciosProps } from "../../routes/app.routes";

const TreinoCategoria = ({ route, navigation }: ExerciciosProps) => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(route.params);
  }, [route.params]);

  return (
    <View style={styles.container}>
      {treinos.length > 0 && (
        <FlatList
          data={treinos}
          renderItem={({ item }) => {
            return (
              <TreinoItem
                item={item}
                onPress={() => {
                  navigation.navigate("Exercicio", item);
                }}
                resizeMode="cover"
                reverseItem={false}
              />
            );
          }}
          keyExtractor={(item) => `${item.nome}`}
        />
      )}
    </View>
  );
};

export default TreinoCategoria;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
