import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Feed() {
 return (
  <SafeAreaView style={styles.container}>
   <Text style={styles.text}>FEED</Text>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
 },
 text: {
  fontSize: 24,
  color: "#000",
 },
});
