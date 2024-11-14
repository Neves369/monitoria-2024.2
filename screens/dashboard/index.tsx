import data from "../../data.json";
import { View, ScrollView, StyleSheet } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";
import Carrossel from "../../components/dashboard/carrossel";
import { DashboardProps } from "../../routes/app.routes";

const Dashboard = ({ navigation }: DashboardProps) => {
  // Precisei criar uma função para filtrar os exercícios por categoria
  const buscarExercios = (nome: string) => {
    const categoria = data.categorias.find(
      (atividade) => atividade.nome === nome
    );
    const exercicios = categoria ? categoria.exercicios : [];
    navigation.navigate("Treino", exercicios);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.principal}>
        <Carrossel />
      </View>

      <View style={styles.menu}>
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[0].nome);
          }}
          item={data.categorias[0]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[1].nome);
          }}
          item={data.categorias[1]}
          resizeMode="cover"
          reverseItem={true}
        />
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[2].nome);
          }}
          item={data.categorias[2]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[3].nome);
          }}
          item={data.categorias[3]}
          resizeMode="cover"
          reverseItem={true}
        />
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[4].nome);
          }}
          item={data.categorias[4]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          onPress={() => {
            buscarExercios(data.categorias[5].nome);
          }}
          item={data.categorias[5]}
          resizeMode="cover"
          reverseItem={true}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  principal: {
    height: 400,
    width: "100%",
  },
  menu: {
    width: "100%",
  },
  item: {
    minHeight: 100,
    flexDirection: "row",
  },
  itemReverse: {
    minHeight: 100,
    flexDirection: "row-reverse",
  },
  itemSection: {
    flex: 1,
    padding: 16,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    gap: 5,
    flexDirection: "row",
  },
});
