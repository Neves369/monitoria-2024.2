import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.principal}></View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            style={styles.itemSection}
            resizeMode="cover"
            resizeMethod="auto"
            source={require("../../assets/musculação.webp")}
          />
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>MUSCULAÇÃO</Text>
            <View style={styles.info}>
              <MaterialIcons name="graphic-eq" size={24} color={"grey"} />
              <Text>NÍVEL</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemReverse}>
          <ImageBackground
            style={styles.itemSection}
            resizeMode="cover"
            resizeMethod="auto"
            source={require("../../assets/crossfit.jpg")}
          />
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>CROSSFIT</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <ImageBackground
            style={styles.itemSection}
            resizeMode="cover"
            resizeMethod="auto"
            source={require("../../assets/funcional.jpg")}
          />
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>FUNCIONAL</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemReverse}>
          <ImageBackground
            style={styles.itemSection}
            resizeMode="cover"
            resizeMethod="auto"
            source={require("../../assets/calistenia.jpg")}
          />
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>CALISTENIA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <ImageBackground
            style={styles.itemSection}
            resizeMode="cover"
            resizeMethod="auto"
            source={require("../../assets/academia.jpg")}
          />
          <View style={styles.itemSection}>
            <Text style={styles.itemTitle}>ACADEMIAS</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "red",
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
