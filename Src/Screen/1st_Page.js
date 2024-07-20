import React from 'react';
import { Button, Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export default function First_Screen() {
  const Animated_Width = useSharedValue(100);

  const handlePress = () => {
    Animated_Width.value = Animated_Width.value + 50;
  };
  const handlePress1 = () => {
    Animated_Width.value = Animated_Width.value  -50;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: Animated_Width.value,
      height: 100,
      backgroundColor: 'violet',
    };
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,}}>
      <Animated.View style={[animatedStyle]}>
       
      </Animated.View>
    <View style={{}} > 
     <TouchableOpacity onPress={handlePress} style={{ backgroundColor: 'yellow', width: 100,height:55,}}>
      <Text>Press</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={handlePress} style={{ backgroundColor: 'red', width: 100,}}>
      <Text>Press</Text>
     </TouchableOpacity>
     </View>
     
    </View>
  );
}
