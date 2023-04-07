import React, { useState } from "react";
import { Button, FormControl, Input, VStack } from "native-base";
import { store } from "../redux/store";
import { setUsers } from "../redux/slices/RecipeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";

const AddNewRecipe = ({ navigation }) => {
  const users = useSelector((state) => state?.recipe?.users);
  const email = useSelector((state) => state?.recipe?.email);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleAddMeal() {
    let recipe = {
      id: uuid.v4(),
      title,
      description: desc,
    };
    const alteredUsers = users.map((user) => {
      if (user.email === email) {
        user.recipes = [...user.recipes, recipe];
      }
      return user;
    });

    AsyncStorage.setItem("users", JSON.stringify(alteredUsers));
    store.dispatch(setUsers(alteredUsers));
    navigation.navigate("Meals");
  }

  return (
    <VStack flex={1} bg="white" space={3} pt="5" px={4}>
      <FormControl>
        <FormControl.Label>Title</FormControl.Label>
        <Input value={title} onChangeText={setTitle} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Desc</FormControl.Label>
        <Input value={desc} onChangeText={setDesc} />
      </FormControl>
      <Button mt="2" colorScheme="indigo" onPress={handleAddMeal}>
        Add Recipe
      </Button>
    </VStack>
  );
};

export default AddNewRecipe;
