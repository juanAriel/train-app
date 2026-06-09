import { View, Text, StyleSheet } from "react-native";
import ButtonLine from "../components/atoms/ButtonLine";
import ActionButton from "../components/atoms/ActionButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚆 Mi Tren</Text>

      <Text style={styles.subtitle}>Seleccione una línea</Text>

      <View style={styles.buttonsContainer}>
        <ButtonLine
          text="Línea Roja"
          onPress={() => {}}
          style={{ backgroundColor: "#F56565" }}
        />

        <ButtonLine
          text="Línea Verde"
          onPress={() => {}}
          style={{ backgroundColor: "#48BB78" }}
        />

        <ButtonLine
          text="Línea Amarilla"
          onPress={() => {}}
          style={{ backgroundColor: "#ECC94B" }}
        />

        <ActionButton 
          text="Salir de la aplicacion" 
          icon="exit-to-app" 
          onPress={() => {}} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04A6D8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    color: "#EAF9FF",
    marginBottom: 35,
  },

  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
});
