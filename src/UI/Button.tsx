import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { Text } from ".";

import { IButtonProps } from "./types";
import { PADDING, FONT_SIZE, OPACITY, COLORS } from "@styles";



export const Button: React.FC<IButtonProps> = ({ disabled, style, text, textStyle, textWeight = 'extraBold', onPress }) => {
  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          {
            opacity: disabled ? OPACITY.BUTTON_DISABLED : 1
          },
          style
        ]}
      disabled={disabled}
      activeOpacity={OPACITY.BUTTON_ACTIVE_OPACITY}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]} weight={textWeight}>
        {text}
      </Text>
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: PADDING.MEDIUM,
    backgroundColor: COLORS.BACKGROUND
  },
  text: {
    color: COLORS.TEXT,
    fontSize: FONT_SIZE.MEDIUM,
    letterSpacing: 2,
  }
});