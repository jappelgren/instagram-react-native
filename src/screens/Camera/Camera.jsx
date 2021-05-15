
import React, { PureComponent, useState, useEffect, useRef } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'expo-permissions'

export default function CameraApp() {
    let [flash, setFlash] = useState('off')
    let [zoom, setZoom] = useState(0)
    let [autoFocus, setAutoFocus] = useState('on')
    let [depth, setDepth] = useState(0)
    let [type, setType] = useState('back')
    let [permission, setPermission] = useState('undetermined')
    let cameraRef = useRef(null)
    useEffect(() => {
        Permissions.check('photo').then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        setPermission(response);
        });
    }, []);

    function toggleFlash() {
        setFlash(flashModeOrder[flash])
    }
    function zoomOut() {
        setZoom(zoom - 0.1 < 0 ? 0 : zoom - 0.1)
    }
    function zoomIn() {    
        setZoom(zoom + 0.1 > 1 ? 1 : zoom + 0.1);
    }
    const takePicture = async() => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(soptions);
            console.log(data.uri);  
        }
    };
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={type}
          flashMode={flash}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}


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
