import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


export default function CameraApp({ setCameraOn }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { mediaStatus } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setHasMediaPermission(mediaStatus === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let photo = 0;

  const snap = async () => {
    if (!camera) return;
    photo = await camera.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(photo.uri);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const onExit = () => {
    setCameraOn(false);
    history.push("/");
  };

  const goToCaption = () => {

    history.push('/caption');
  }

  return (
    <View>
      {previewVisible ? (
        <View>
          <Image
            style={{ height: "100%", zIndex: 1 }}
            source={{ uri: `${capturedImage?.uri}` }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", flex: 1, zIndex: 2, position: "absolute" }}
          >
            <TouchableOpacity
              style={{ height: 50, width: 50 }}
              onPress={() => setPreviewVisible(false)}
            >
              <Image
                style={{ height: 25, width: 25, margin: 20 }}
                source={require("./img/iconmonstr-arrow-64-240.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          
         
            {/* style={{width: "%", flex: 1, zIndex: 2, position: "absolute" }} */}
          
            <TouchableOpacity
              style={{ height: 50, width: 50, margin: 20 }}
              onPress={() => goToCaption()}
            >
              <Text style={{color: '#1da1f2', fontSize: 22, }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          ratio={"16:9"}
          ref={(ref) => {
            camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "flex-end",
              padding: 15,
            }}
          >
            <TouchableOpacity onPress={onExit}>
              <Text style={{ fontSize: 30, color: "white", fontWeight: "200" }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={snap}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                  }}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
