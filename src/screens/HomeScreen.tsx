import { View, Text, StyleSheet } from "react-native";
import ButtonLine from "../components/atoms/ButtonLine";
import ActionButton from "../components/atoms/ActionButton";
import { Alert, BackHandler } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const handleExitApp = () => {
    Alert.alert("Salir", "¿Desea cerrar la aplicación?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Salir",
        style: "destructive",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <MaterialCommunityIcons name="train" size={40} color="#FFF" />
        Sistema de trenes
      </Text>

      <Text style={styles.subtitle}>Seleccione una línea</Text>

      <View style={styles.buttonsContainer}>
        <ButtonLine
          text="Línea Roja"
          style={{ backgroundColor: "#F56565" }}
          onPress={() =>
            navigation.navigate("Line", {
              lineName: "Línea Roja",
              color: "#F56565",
            })
          }
        />

        <ButtonLine
          text="Línea Verde"
          onPress={() =>
            navigation.navigate("Line", {
              lineName: "Línea Verde",
              color: "#48BB78",
            })
          }
          style={{ backgroundColor: "#48BB78" }}
        />

        <ButtonLine
          text="Línea Amarilla"
          onPress={() =>
            navigation.navigate("Line", {
              lineName: "Línea Amarilla",
              color: "#ECC94B",
            })
          }
          style={{ backgroundColor: "#ECC94B" }}
        />

        <ActionButton
          text="Salir de la aplicacion"
          icon="exit-to-app"
          onPress={handleExitApp}
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
