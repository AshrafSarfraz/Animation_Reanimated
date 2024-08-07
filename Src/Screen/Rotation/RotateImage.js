import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat } from 'react-native-reanimated';

const RotatingImageOnPress = () => {
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    };
  });

  const handlePress = () => {
    // Start continuous rotation
    rotate.value = withRepeat(
      withTiming(360, { duration: 1000 }, () => {}), // Rotate from 0 to 360 degrees
      -1, // Repeat indefinitely   (Agr onPress hata kr Direct Likh dien to negative and positive aha ga)
      false, // Clockwise rotation
    );
  };

//   const handlePress = () => {
//     rotate.value = withRepeat(withTiming(360, { duration: 1000 },-1,true)  ); 
//   };
//   const handlePress = () => {
//     rotate.value = withRepeat(withTiming(360, { duration: 1000 },3,true)  ); 
//   };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Image
          source={require('../../Assets/h1.jpg')}
          style={[styles.image, animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,  // Width of the image
    height: 100, // Height of the image
  },
});

export default RotatingImageOnPress;
