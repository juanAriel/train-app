import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ActionButtonProps {
  text: string;
  icon: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  icon,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={icon as any}
        size={24}
        color="#2D3748"
      />

      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    paddingVertical: 14,
    paddingHorizontal: 18,

    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 4,
  },

  buttonPressed: {
    backgroundColor: "#E2E8F0",
  },

  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#2D3748",
  },
});

export default ActionButton;