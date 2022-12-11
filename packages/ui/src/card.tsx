import React from "react";
import { View } from "react-native";

export interface CardProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Card({ children }: CardProps) {
  return (
    <View className="bg-white shadow-md w-60 h-40 p-4 rounded-md flex items-start">
      {children}
    </View>
  );
}
