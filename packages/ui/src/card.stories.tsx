import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "./button";

import { Card } from "./card";
import { Text, View } from "react-native";

export default {
  title: "components/card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Basic = {
  args: {
    children: (
      <View className="flex flex-1 w-full">
        <Text className="mb-2 text-default">Some text here</Text>
        <View className="ml-auto mt-auto w-full justify-end items-end">
          <Button text="Hello" />
        </View>
      </View>
    ),
  },
};
