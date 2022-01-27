import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
