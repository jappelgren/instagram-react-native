import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import { NativeRouter, Route } from "react-router-native";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers/_root.reducer';
import Camera from "./src/screens/Camera/Camera.jsx";
import Caption from "./src/screens/Caption/Caption.jsx";
import Favorites from "./src/screens/Favorites/Favorites.jsx";
import Feed from "./src/screens/Feed/Feed.jsx";
import NavBar from "./src/screens/NavBar/NavBar.jsx";
import Profile from "./src/screens/Profile/Profile.jsx";
import Search from "./src/screens/Search/Search";
import StatusBarComponent from "./src/screens/StatusBar/StatusBarComponent.jsx";



export default function App() {
  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    mainView: {
      flexGrow: 12,
    },
  });


  const [cameraOn, setCameraOn] = useState(false);
  const sagaMiddleware = createSagaMiddleware();

  const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList)
  );

  console.log();
  return (
    <Provider store={store}>
      <NativeRouter>
        <StatusBarComponent />
        <View style={styles.mainContainer}>
          <Text>{/* `{currentRoute}` */}</Text>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/camera">
            <Camera setCameraOn={setCameraOn} />
          </Route>
          {cameraOn ? null : <NavBar setCameraOn={setCameraOn} />}
          <Route exact path="/caption">
            <Caption />
          </Route>
        </View>
      </NativeRouter>
    </Provider>
  );
}
