import React from 'react';
import { ButText, TouchableOpacity, View,StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export default function First_Screen() {
  const Animated_Width = useSharedValue(100);

  const handlePress = () => {
    Animated_Width.value = Animated_Width.value + 50;
  };
  const handlePress1 = () => {
    Animated_Width.value = Animated_Width.value -50;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: Animated_Width.value,
      height: 100,
      backgroundColor: 'violet',
      borderRadius:20,
    };
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,}}>
      <Animated.View style={[animatedStyle]}>
      </Animated.View>
      <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={[styles.button, styles.lightButton]}>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress1} style={[styles.button, styles.darkButton]}>
        <Text style={styles.buttonText}>Less</Text>
      </TouchableOpacity>
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:"5%",
    paddingHorizontal: 20, // Optional: Add padding to the sides

  },
  button: {
    width: 150,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  lightButton: {
    backgroundColor: 'brown', // Example of light color
  },
  darkButton: {
    backgroundColor: 'darkred', // Example of dark color
  },
  buttonText: {
    color: 'white', // Text color for both buttons
    fontSize: 16, // Example font size
  },
});