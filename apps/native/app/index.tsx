import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Button, Card } from "ui";
import { styled } from "nativewind";

const StyledLink = styled(Link);

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Overview" }} />

      <View className="max-h-40">
        <Card>
          <View className="flex flex-1 w-full">
            <Text className="mb-2 text-default">Some text here</Text>
            {/* <View className="ml-auto mt-auto w-full justify-end items-end"> */}
            {/* <Button
                onClick={() => {
                  console.log("Pressed!");
                  alert("Pressed!");
                }}
                text="Boop"
              /> */}
            {/* </View> */}
            <View className="rounded-md overflow-hidden">
              <StyledLink
                className="text-white bg-action-primary p-4 items-center text-center"
                href="/details"
                suppressHighlighting
              >
                Go to Details
              </StyledLink>
            </View>
          </View>
        </Card>
      </View>

      {/* Use the `Link` component to enable optimized client-side routing. */}
    </View>
  );
}
