import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import imageMap from "../../utils/imageMap";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface TreinoItemProps {
  item: any;
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center";
  reverseItem: boolean;
  onPress: any;
}

const TreinoItem = ({
  item,
  resizeMode,
  reverseItem,
  onPress,
}: TreinoItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={reverseItem ? styles.itemReverse : styles.item}
    >
      <ImageBackground
        style={styles.itemSection}
        resizeMode={resizeMode}
        resizeMethod="auto"
        source={imageMap[item.nome] || null}
      />
      <View style={styles.itemSection}>
        <Text style={styles.itemTitle}>{item.nome}</Text>

        {item.exercicios?.length > 0 && (
          <View style={styles.info}>
            <MaterialIcons name="list" size={24} color={"grey"} />
            <Text>{item.exercicios.length} Exercícios</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TreinoItem;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  item: {
    minHeight: 100,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#b5b5b536",
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
