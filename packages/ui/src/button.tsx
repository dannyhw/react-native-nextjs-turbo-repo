import { styled } from "nativewind";
import React from "react";
import {
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  TouchableOpacityProps,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
  viewStyle?: TouchableOpacityProps["style"];
}

function ButtonToStyle({ text, onClick, viewStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-action-primary text-center pt-4 pb-4 pl-8 pr-8 text-overline rounded-lg"
      style={viewStyle}
      onPress={onClick}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}
export const Button = styled(ButtonToStyle, { props: { viewStyle: true } });
