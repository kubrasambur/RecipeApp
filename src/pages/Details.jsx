import { View, Text } from "react-native";
import React from "react";

export default function Details({ route }) {
  const { meal } = route.params;

  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
}
