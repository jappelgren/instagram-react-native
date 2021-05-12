import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NavBar from './src/screens/NavBar/NavBar.jsx';

export default function App() {
  const styles = StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',

    },
    mainView: {
      flexGrow: 12,
    }

  });
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      {/* vv placeholder vv */}
      <ScrollView style={styles.mainView}>
        <Text>Hi</Text>
      </ScrollView>
      {/* ^^ placeholder ^^ */}
      <NavBar />
    </View>
  );
}
