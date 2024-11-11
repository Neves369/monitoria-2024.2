import { View, StyleSheet, Text } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.comp1}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.comp2}>
        <View style={[styles.conteudo, { backgroundColor: "white" }]}>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
        </View>
        <View
          style={[styles.conteudo, { backgroundColor: "rgb(128, 128, 128)" }]}
        >
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
        </View>
        <View style={[styles.conteudo, { backgroundColor: "rgb(39, 34, 34)" }]}>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
          <View style={styles.item}></View>
        </View>
      </View>
      <View style={styles.comp3}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
};

export default Dashboard;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b9595",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  comp1: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
  },
  comp2: {
    flex: 8,
    backgroundColor: "green",
  },
  comp3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});
