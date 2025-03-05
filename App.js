import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import LovedProvider from "./provider/lovedContext";
import CartProvider from "./provider/cartContext";
import { enableScreens } from 'react-native-screens';
import { StatusBar } from "react-native";
import colors from "./config/colors";
enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <LovedProvider>
        <CartProvider>
          <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
          <StackNavigator />
        </CartProvider>
      </LovedProvider>
    </NavigationContainer>
  );
};

export default App;
