import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather wherever you go</Text>
      <StatusBar style="light" />
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 100,
    paddingHorizontal: 20
  },
  text: {
    color: "white",
    fontSize: 35,
  }
});
