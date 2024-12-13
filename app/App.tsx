import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./(tabs)/index"; // Asegúrate de que la ruta sea correcta

export default function App() {
 return (
  <NavigationContainer>
   <Index />
  </NavigationContainer>
 );
}
