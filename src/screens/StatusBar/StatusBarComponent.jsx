import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function StatusBarComponent() {
  return (
    <View style={{ height: Platform.OS === 'ios' ? 18 : 25 }}>
      <StatusBar style="auto" />
    </View>
  );
}
