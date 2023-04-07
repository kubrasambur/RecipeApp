import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  ScrollView,
  Pressable,
  Button,
} from "native-base";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../redux/store";
import { setFilteredMeals, setUsers } from "../redux/slices/RecipeSlice";

export default function MealCard({ navigation }) {
  const users = useSelector((state) => state?.recipe?.users);
  const email = useSelector((state) => state?.recipe?.email);
  const filteredMeals = useSelector((state) => state.recipe.filteredMeals);
  const categories = useSelector((state) => state?.recipe?.categories);

  const u = users?.find((user) => user?.email === email);

  const [user, setUser] = useState(u);

  useEffect(() => {
    setUser(u);
  }, [users]);

  return (
    <VStack flex={1} bg="blueGray.300" pt={3} pl={3}>
      <ScrollView>
        {filteredMeals.map((meal, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("Details", { meal })}
              bg="white"
              borderRightRadius={20}
              w="98%"
              mb={3}
              h={10}
              justifyContent="center"
            >
              <Text color="gray.700" pl={3}>
                {meal.id}-{meal.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <Button w="95%" mb={3} onPress={() => navigation.navigate("AddRecipe")}>
        Add new Recipe
      </Button>
    </VStack>
  );
}
