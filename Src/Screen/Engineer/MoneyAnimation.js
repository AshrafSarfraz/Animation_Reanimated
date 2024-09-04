import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
const MoneyAnimation = () => {
  const image1 = useSharedValue('0deg');
  const image4 = useSharedValue('0deg');
  const image2 = useSharedValue('0deg');
  const image3 = useSharedValue('0deg');
  const image1Style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: image1.value}],
    };
  });
  const image2Style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: image2.value}],
    };
  });
  const image3Style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: image3.value}],
    };
  });
  const image4Style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: image4.value}],
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight:"10%"
        }}>
        <AnimatedImage
          source={require('../../Assets/Money.png')}
          style={[
            {width: 150, height: 300, position: 'absolute', left: 160},
            image4Style,
          ]}
        />
        <AnimatedImage
          source={require('../../Assets/Money.png')}
          style={[
            {width: 150, height: 300, position: 'absolute', left: 160},
            image1Style,
          ]}
        />
        <AnimatedImage
           source={require('../../Assets/Money.png')}
          style={[
            {width: 150, height: 300, position: 'absolute', left: 160},
            image2Style,
          ]}
        />

        <AnimatedImage
           source={require('../../Assets/Money.png')}
          style={[{width: 150, height: 300, position: 'absolute',left: 160}, image3Style]}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          alignSelf: 'center',
        }}
        onPress={() => {
          image1.value = withSpring('20deg');
          image4.value = withSpring('30deg');
          image2.value = withSpring('15deg');
          image3.value = withSpring('0deg');
        }}>
        <Text style={{color: 'white'}}>Increase Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoneyAnimation;
