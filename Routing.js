import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { store } from "./src/redux/store";
import { setIsLoggedIn } from "./src/redux/slices/RecipeSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import Categories from "./src/pages/Categories";
import Login from "./src/pages/authentication/Login";
import Signup from "./src/pages/authentication/SignUp";
import AddNewRecipe from "./src/pages/AddNewRecipe";
import Details from "./src/pages/Details";
import MealCard from "./src/pages/MealCard";

const Stack = createNativeStackNavigator();

const Routing = () => {
  const isLoggedIn = useSelector((state) => state?.recipe?.loggedIn);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerTitleAlign: "center",
              headerRight: () => (
                <Button
                  onPress={() => store.dispatch(setIsLoggedIn(false))}
                  bg="danger.700"
                  size="sm"
                  _text={{ fontWeight: "bold" }}
                  endIcon={<Icon as={MaterialCommunityIcons} name="logout" />}
                >
                  Log Out
                </Button>
              ),
            }}
          >
            <>
              <Stack.Screen name="Categories" component={Categories} />
              <Stack.Screen name="AddRecipe" component={AddNewRecipe} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Meals" component={MealCard} />
            </>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Routing;
