import { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import LoadingScreen from "../components/atoms/LoadingScreen";

export default function SplashScreen({ navigation }: any) {
  const bounceEffect = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceEffect, {
          toValue: -20,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceEffect, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: bounceEffect }] }}>
        <Image
          source={require("../../assets/logo-train.png")}
          style={styles.image}
        />
      </Animated.View>
      <Text style={styles.title}>Train App</Text>
      <LoadingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#04a6d8",
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
    borderRadius: 60,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});
