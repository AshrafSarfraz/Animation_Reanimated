import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const First_Page = () => {
  const Progress = useSharedValue(1);
  const Scaling=useSharedValue(2)
  const Animated_Style = useAnimatedStyle(() => {
    return {
      opacity: Progress.value,
      borderRadius:(Progress.value*100)/2,
      transform: [{scale:Scaling.value},
      {rotate:`${Progress.value*2*Math.PI}rad`}]
    };
  });

  const OnPress = () => {
    Progress.value = withRepeat(withTiming(0,{duration: 2000}),5,true);
    Scaling.value = withRepeat(withTiming(1,{ duration: 1000}),5,true);
  };

  return (
    <View style={styles.Container}>
      <Animated.View style={[styles.Animated_Box, Animated_Style]} />
      <TouchableOpacity style={styles.Btn} onPress={OnPress}>
        <Text style={styles.Text}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First_Page;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Animated_Box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  Btn: {
    width: 150,
    height: 60,
    backgroundColor: 'yellow',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
