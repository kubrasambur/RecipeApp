import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Button, VStack } from "native-base";
import SearchBar from "../components/SearchBar";
import MealCard from "../components/MealCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomePage({ navigation }) {
  return (
    <VStack flex={1} bg="white" alignItems="center">
      <SearchBar />
      <MealCard />
      <Button w="95%" mb={3} onPress={() => navigation.navigate("AddRecipe")}>
        Add new Recipe
      </Button>
    </VStack>
  );
}
