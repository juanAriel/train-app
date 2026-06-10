import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ActionButton from "../components/atoms/ActionButton";
import RouteMapCard from "../components/molecules/RouteMapCard";
import TrainStatusCard from "../components/molecules/TrainStatusCard";
import InfoCard from "../components/molecules/InfoCard";

export default function LineScreen({ route, navigation }: any) {
  const { lineName, color } = route.params;

  const [activeTab, setActiveTab] = useState<"location" | "info">("location");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <ActionButton
          text="Atrás"
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />

        <View style={styles.lineInfo}>
          <View style={[styles.lineIndicator, { backgroundColor: color }]} />

          <Text style={[styles.title, { color }]}>{lineName}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <ActionButton
          text="Ubicación"
          icon="train"
          onPress={() => setActiveTab("location")}
          style={activeTab === "location" ? styles.activeButton : undefined}
        />

        <ActionButton
          text="Información"
          icon="information-outline"
          onPress={() => setActiveTab("info")}
          style={activeTab === "info" ? styles.activeButton : undefined}
        />
      </View>

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === "location" && (
          <>
            <RouteMapCard currentStation="Estación Central" />

            <TrainStatusCard
              nextStation="Estación Central"
              arrivalTime="12:20"
            />
          </>
        )}

        {activeTab === "info" && (
          <>
            <InfoCard title="Horario de servicio">
              <Text style={styles.infoText}>06:00 - 20:00</Text>
            </InfoCard>

            <InfoCard title="Paradas y precios">
              <View style={styles.row}>
                <Text>Central</Text>
                <Text>Bs 10</Text>
              </View>

              <View style={styles.row}>
                <Text>Norte</Text>
                <Text>Bs 10</Text>
              </View>

              <View style={styles.row}>
                <Text>Sur</Text>
                <Text>Bs 10</Text>
              </View>
            </InfoCard>

            <InfoCard title="Recomendaciones">
              <Text style={styles.bullet}>• Llegar 5 minutos antes</Text>

              <Text style={styles.bullet}>• Los horarios pueden variar</Text>

              <Text style={styles.bullet}>
                • La ruta completa tiene mejor costo
              </Text>
            </InfoCard>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04A6D8",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
  },
  lineInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 18,
    gap: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  lineIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginBottom: 20,
  },

  activeButton: {
    borderWidth: 2,
    width: 160,
    borderColor: "#04A6D8",
  },

  contentContainer: {
    flex: 1,
    maxHeight: 600,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },

  placeholder: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },

  infoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  bullet: {
    color: "#4A5568",
    lineHeight: 22,
  },
});
