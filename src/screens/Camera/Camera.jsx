import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';



export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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

  return (
    <View>
      <Camera style={styles.camera} type={type}>
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
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 12,
  },
  camera: {
    flexGrow: 12,
  },
  buttonContainer: {
    flex: 12,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flexGrow: .1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
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
