import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Card } from "ui";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <View className="max-h-40">
        <Card>
          <View className="flex flex-1 w-full">
            <Text className="mb-2 text-default">Some text here</Text>
            <View className="ml-auto mt-auto w-full justify-end items-end">
              <Button
                onClick={() => {
                  console.log("Pressed!");
                  alert("Pressed!");
                }}
                text="Boop"
              />
            </View>
          </View>
        </Card>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
