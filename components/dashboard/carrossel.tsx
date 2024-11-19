import { memo } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("screen");

const renderItem = ({ item }: any) => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={20}
      source={item.imagem}
    >
      <View style={styles.overlay} />
      <Image style={styles.imagem} source={item.imagem} />
    </ImageBackground>
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
      <TouchableWithoutFeedback>
        <Carousel
          enabled={false}
          data={data}
          width={width}
          autoPlay={true}
          autoPlayInterval={2000}
          renderItem={renderItem}
          scrollAnimationDuration={2000}
        />
      </TouchableWithoutFeedback>
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
  background: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Preenche a tela
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
