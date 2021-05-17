import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router';

export default function NavBar({ cameraOn, setCameraOn }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'yellow',
    },
    icon: {
      width: 25,
      height: 25,
    },
  });

  const history = useHistory();

  const handleCameraPress = () => {
    setCameraOn(true);
    history.push('/camera');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Image
          style={styles.icon}
          source={require('./img/iconmonstr-home-6-240.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/search')}>
        <Image
          style={styles.icon}
          source={require('./img/iconmonstr-magnifier-2-240.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCameraPress}>
        <Image
          style={styles.icon}
          source={require('./img/iconmonstr-photo-camera-4-240.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/favorites')}>
        <Image
          style={styles.icon}
          source={require('./img/iconmonstr-favorite-2-240.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('/profile')}>
        <Image
          style={styles.icon}
          source={require('./img/iconmonstr-user-19-240.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
