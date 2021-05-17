import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Feed from './src/screens/Feed/Feed.jsx';
import NavBar from './src/screens/NavBar/NavBar.jsx';
import Profile from './src/screens/Profile/Profile.jsx';
import StatusBarComponent from './src/screens/StatusBar/StatusBarComponent.jsx';
import Favorites from './src/screens/Favorites/Favorites.jsx';
import Search from './src/screens/Search/Search';
import Camera from './src/screens/Camera/Camera.jsx';


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

  const [cameraOn, setCameraOn] = useState(false);




  console.log();
  return (
    <NativeRouter>
      <StatusBarComponent />
      <View style={styles.mainContainer}>
        <Text>
          {/* `{currentRoute}` */}
        </Text>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
        <Route exact path='/camera'>
          <Camera />
        </Route>
        {cameraOn ? null : <NavBar setCameraOn={setCameraOn} />}
        

      </View>
    </NativeRouter>
  );
}
