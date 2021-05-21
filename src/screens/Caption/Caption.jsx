import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import {useSelector} from 'react-redux';


export default function Caption() {
    const picture = useSelector(state => state.picture);

  

    return (
        <View>
            <Image style={{ height: 400, width: 400, resizeMode: 'contain' }} source={{uri: `${picture}`}}/>
            <TextInput
            label="Caption"
            type="outlined"
            >
                write a caption for your shitty picture
            </TextInput>
        </View>
    )
}
