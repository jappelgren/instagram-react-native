import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {useSelector} from 'react-redux';


export default function Caption() {
    const picture = useSelector(state => state.picture);

  

    return (
        <View>
            <Text>Write a Caption</Text>
            <Image style={{width: 500, height: 'auto'}} source={{uri: picture}}/>
        </View>
    )
}
