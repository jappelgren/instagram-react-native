import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function NavBar() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      border: 'solid',
      justifyContent: 'center',
      alignContent: 'space-between'
    },
    icon: {
      width: 25,
      height: 25,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('./iconmonstr-home-6.svg')} />
    </View>
  );
}
