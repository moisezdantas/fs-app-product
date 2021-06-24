import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import Login from "../pages/Login";
import Products from "../pages/Products";
import User from "../pages/User";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Cadastrar Usuário" component={User} />
       <Stack.Screen name="Produtos" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

