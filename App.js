import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Feed from './src/screens/Feed/Feed.jsx';
import NavBar from './src/screens/NavBar/NavBar.jsx';
import Profile from './src/screens/Profile/Profile.jsx';
import StatusBarComponent from './src/screens/StatusBar/StatusBarComponent.jsx';


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

  console.log();
  return (
    <NativeRouter>
      <StatusBarComponent />
      <View style={styles.mainContainer}>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <NavBar />
      </View>
    </NativeRouter>
  );
}
