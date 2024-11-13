import { memo } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("screen");

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <Image style={styles.imagem} source={item.imagem} />
    </View>
  );
};

const Carrossel = () => {
  const data = [
    {
      imagem: require("../../assets/carrossel/promo1.png"),
    },
    {
      imagem: require("../../assets/carrossel/promo2.png"),
    },
    {
      imagem: require("../../assets/carrossel/promo3.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        width={width}
        autoPlay={true}
        autoPlayInterval={5000}
        renderItem={renderItem}
        scrollAnimationDuration={2000}
      />
    </View>
  );
};

export default memo(Carrossel);

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#630a0a",
  },
  item: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    height: "100%",
    width: "100%",
  },
});
