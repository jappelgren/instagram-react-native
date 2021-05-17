import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const takePicture = async () => {
  //   if (!Camera) return
  //   const photo = await Camera.takePictureAsync();
  //   console.log(photo);
  //   setPreviewVisible(true);
  //   setCapturedImage(photo);
  // }

  const snap = async () => {
    if (!camera) return;
    let photo = await camera.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(photo.uri);
  };

  return (
    <View>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
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
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={snap}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                }}
              />
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
// import React from 'react';
// import {RNCamera, Camera} from 'react-native-camera';
// import { View, Text, ScrollView } from 'react-native';

// export default function Photo() {

//     function takePicture(e) {
//         const options = {};
//         //options.location = ...
//         e.camera.capture({metadata: options})
//           .then((data) => console.log(data))
//           .catch(err => console.error(err));
//       }

//     return (
//         <View>
//         <Camera
//           ref={(cam) => {
//             camera = cam;
//           }}
//           aspect={Camera.constants.Aspect.fill}>
//           <Text onPress={(e) => takePicture.bind(e)}>[CAPTURE]</Text>
//         </Camera>
//       </View>
//     )

// }
