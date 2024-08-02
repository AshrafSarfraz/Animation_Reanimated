import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const Slider = ({ Images, index, CurrentIndex }) => {
  const X = useSharedValue(0);

  useEffect(() => {
    X.value = CurrentIndex;
  }, [CurrentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: X.value === index ? withTiming(1,{duration:500}) : withSpring(0.3) }],
    };
  });

  return (
    <View style={styles.Container}>
      <Animated.View style={[styles.Animated_Style, animatedStyle]}>
        <Image source={Images} style={styles.Images} />
      </Animated.View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Animated_Style: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Images: {
    width: '80%',
    height: '60%',
    
  },
});
