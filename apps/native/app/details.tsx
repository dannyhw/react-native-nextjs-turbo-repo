import { View, Text } from "react-native";

export default function Details({ navigation }: any) {
  return (
    <View>
      <Text
        className="text-blue-500 underline"
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          navigation.goBack();
        }}
      >
        go back
      </Text>
    </View>
  );
}
