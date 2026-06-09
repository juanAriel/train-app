import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonLineProps {
  text: string;
  icon?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ButtonLine: React.FC<ButtonLineProps> = ({
  text,
  onPress,
  style,
  icon = "train",
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.button, style]}
    >
      <View style={styles.content}>
        <MaterialCommunityIcons name={icon as any} size={40} color="#FFF" />

        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    borderRadius: 75,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 2,
    borderColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    elevation: 8,
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
});

export default ButtonLine;
