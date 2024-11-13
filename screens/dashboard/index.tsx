import { View, ScrollView, StyleSheet } from "react-native";
import data from "../../data.json";
import TreinoItem from "../../components/menu/TreinoItem";
import Carrossel from "../../components/dashboard/carrossel";

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.principal}>
        <Carrossel />
      </View>

      <View style={styles.menu}>
        <TreinoItem
          item={data.categorias[0]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          item={data.categorias[1]}
          resizeMode="cover"
          reverseItem={true}
        />
        <TreinoItem
          item={data.categorias[2]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          item={data.categorias[3]}
          resizeMode="cover"
          reverseItem={true}
        />
        <TreinoItem
          item={data.categorias[4]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
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
