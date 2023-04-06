import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { store } from "./src/redux/store";
import { setIsLoggedIn } from "./src/redux/slices/RecipeSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import HomePage from "./src/pages/HomePage";
import Login from "./src/pages/authentication/Login";
import Signup from "./src/pages/authentication/SignUp";
import AddNewRecipe from "./src/pages/AddNewRecipe";

const Stack = createNativeStackNavigator();

const Routing = () => {
  const isLoggedIn = useSelector((state) => state?.recipe?.loggedIn);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator
            initialRouteName="Home"
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
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="AddRecipe" component={AddNewRecipe} />
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
