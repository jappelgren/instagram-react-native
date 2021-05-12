import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function NavBar() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    icon: {
      width: 25,
      height: 25,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('./iconmonstr-home-6.svg')} />
      <Image
        style={styles.icon}
        source={require('./iconmonstr-magnifier-2.svg')}
      />
      <Image
        style={styles.icon}
        source={require('./iconmonstr-photo-camera-4.svg')}
      />
      <Image
        style={styles.icon}
        source={require('./iconmonstr-favorite-2.svg')}
      />
      {/* vv Placeholder for profile pic of user vv */}
      <Image style={styles.icon} source={require('./iconmonstr-user-19.svg')} />
      {/* ^^ Placeholder for profile pic of user ^^ */}
    </View>
  );
}
