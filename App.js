import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Homescreen';
import ResearchScreen from './src/screens/Research/ResearchScreen';
import ResultScreen from './src/screens/Result/ResultScreen';
import CameraScreen from './src/screens/Camera/CameraScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Research" component = {ResearchScreen}/>
        <Stack.Screen name = "Result" component = {ResultScreen}/>
        <Stack.Screen name = "Camera" component = {CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
