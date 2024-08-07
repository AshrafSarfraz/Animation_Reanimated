import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Button = ({ index, isActive, onPress, MyImg }) => {
  const height = useSharedValue(50);

  useEffect(() => {
    height.value = withTiming(isActive ? 100 : 50, { duration: 300 });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <Animated.View style={[styles.button, animatedStyle]}>
      <Image source={MyImg} style={styles.Imgstyle} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  Imgstyle:{
    width:30,height:30
  }
});
