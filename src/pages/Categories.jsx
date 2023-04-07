import React, { useEffect, useState } from "react";
import { Pressable, VStack, Text } from "native-base";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { setFilteredMeals } from "../redux/slices/RecipeSlice";

export default function HomePage({ navigation }) {
  const categories = useSelector((state) => state?.recipe?.categories);
  const users = useSelector((state) => state?.recipe?.users);
  const email = useSelector((state) => state?.recipe?.email);
  const filteredMeals = useSelector((state) => state?.recipe?.filteredMeals);

  const u = users?.find((user) => user?.email === email);
  const [user, setUser] = useState(u);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setUser(u);
  }, [users]);

  useEffect(() => {
    setFilteredCategories(categories);
    store.dispatch(setFilteredMeals(user?.recipes));
  }, [categories]);

  function handleFilter(text) {
    if (text) {
      const newData = user?.recipes.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      store.dispatch(setFilteredMeals(newData));
      setSearch(text);
    } else {
      store.dispatch(setFilteredMeals(user?.recipes));
      setSearch(text);
    }
  }

  return (
    <VStack flex={1} bg="blueGray.300" alignItems="center">
      <SearchBar onChangeText={(text) => handleFilter(text)} value={search} />
      <VStack w="93%" alignItems="center">
        {filteredCategories?.map((category, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("Meals")}
              bg="white"
              borderRightRadius={20}
              w="98%"
              mb={3}
              h={10}
              justifyContent="center"
            >
              <Text color="gray.700" pl={3}>
                {category}
              </Text>
            </Pressable>
          );
        })}
      </VStack>
    </VStack>
  );
}
