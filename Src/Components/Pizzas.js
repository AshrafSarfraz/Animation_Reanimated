import React, { useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

const Pizzas = ({ PizzaImages, index, bgImg, CurrentIndex }) => {
  const PizzaAnimate = useSharedValue(0); // Shared value to track rotation

  // Rotate when CurrentIndex matches the index of the item
  useEffect(() => {
    PizzaAnimate.value=CurrentIndex
  }, [CurrentIndex]); // Depend on both CurrentIndex and index

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate:PizzaAnimate.value==index? withSpring('360deg'):'0deg' }], // Use animated value directly for the rotation
    };
  });

  return (
    <View style={styles.Cont}>
      <ImageBackground source={bgImg} style={styles.bgImg} imageStyle={{ borderRadius: 30 }}>
        <Animated.Image source={PizzaImages} style={[styles.Pizzas, animatedStyle]} />
        <View style={styles.Txt_Cont}>
          <Text style={styles.Pizzas_Name}>Pizza</Text>
          <Text style={styles.Pizzas_Price}>Ashraf_Sarfraz1</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Pizzas;

const styles = StyleSheet.create({
  Cont: {
    marginTop: '14%',
    borderRadius: 30,
  },
  bgImg: {
    width: 250,
    height: 300,
  },
  Pizzas: {
    width: 170,
    height: 170,
    borderRadius: 100,
    alignSelf: 'flex-end',
    marginTop: '-11%',
    marginRight: '-11%',
  },
  Txt_Cont: {
    marginLeft: '5%',
    marginTop: '22%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  Pizzas_Name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  Pizzas_Price: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
});
