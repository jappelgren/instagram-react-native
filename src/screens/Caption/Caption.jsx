import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


export default function Caption() {
  const picture = useSelector((state) => state.picture);
  const history = useHistory();

  const sharePost = () => {
      alert("dumbass");
  }

  return (
    <View>
        <Image
        style={{ height: 400, width: 400, zIndex: 1, resizeMode: "contain" }}
        source={{ uri: `${picture}` }}
      />
      <View
      style={{flexDirection: "row", justifyContent: "space-between", width: "100%", flex: 1, zIndex: 2, position: "absolute"}}
      >
        <TouchableOpacity
        style={{height: 50, width: 50}}
        onPress={() => history.push('/camera')}
        >
          <Image
            style={{ height: 25, width: 25, margin: 10 }}
            source={require("./img/iconmonstr-arrow-64-240.png")}
            resizeMode={"cover"}
          />
        </TouchableOpacity>
        <TouchableOpacity
        style={{height: 50, width: 50, margin: 10}}
        onPress={() => sharePost()}
        >
            <Text style={{color: '#1da1f2', fontSize: 18, }}>Share</Text>
        </TouchableOpacity>
      </View>
      

      <TextInput label="caption" type="outlined">
        write a caption for your shitty picture
      </TextInput>
    </View>
  );
}
