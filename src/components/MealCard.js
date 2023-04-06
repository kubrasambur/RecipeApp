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
} from "native-base";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../redux/store";
import { setUsers } from "../redux/slices/RecipeSlice";

export default function MealCard() {
  const users = useSelector((state) => state?.recipe?.users);
  const email = useSelector((state) => state?.recipe?.email);

  const u = users?.find((user) => user?.email === email);
  const [user, setUser] = useState(u);

  console.log(users);

  useEffect(() => {
    setUser(u);
  }, [users]);

  return (
    <ScrollView w="94%">
      {user?.recipes.map((meal) => {
        <Box
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          flexDirection="row"
          mb={2}
        >
          <Box>
            <AspectRatio ratio={7 / 8} w="100px" h="95px">
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image base"
              />
            </AspectRatio>
          </Box>
          <Stack w="100%" px="3" py="1" bg="trueGray.300">
            <HStack justifyContent="space-between">
              <VStack>
                <Heading size="md">{meal.title}</Heading>
                <Text fontSize="xs" color="gray.600" fontWeight="500" ml="-0.5">
                  11
                </Text>
                <Text fontWeight="400">12</Text>
                <Text color="coolGray.600" fontWeight="400">
                  23
                </Text>
              </VStack>
            </HStack>
          </Stack>
        </Box>;
      })}
    </ScrollView>
  );
}
