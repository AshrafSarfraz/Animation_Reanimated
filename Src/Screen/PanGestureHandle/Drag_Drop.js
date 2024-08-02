import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated ,{ useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming }
 from 'react-native-reanimated'

const Drag_Drop = () => {
    const X=useSharedValue(0)
    const Y=useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{translateX: X.value}, {translateY:Y.value}],
        };
      });
    const GestureHandler=useAnimatedGestureHandler({
    onStart:(e,c)=>{
     c.startx=X.value,
     c.starty=Y.value
    },
    onActive:(e,c)=>{
    X.value=c.startx+e.translationX
    Y.value=c.starty+e.translationY
    },
    onEnd:(e,c)=>{
       const distance=Math.sqrt(X.value**2+Y.value**2)
       if(distance<150){
        X.value=withTiming(0,{duration:500})
        Y.value=withTiming(0,{duration:500})
       } }
    })
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.Container}>
    <View style={styles.Circle}>
    <PanGestureHandler  onGestureEvent={GestureHandler}>
    <Animated.View style={[styles.Box,animatedStyle]}>
    </Animated.View>
    </PanGestureHandler>
    </View>
    </View>
    </GestureHandlerRootView>
  )
}

export default Drag_Drop

const styles = StyleSheet.create({
 Container:{
  justifyContent:"center",
  alignItems:"center",
  flex:1,
 },
 Circle:{
   width:350,height:350,
   borderRadius:200,
   justifyContent:"center",
   alignItems:"center",
   borderWidth:5,
   borderColor:'purple'
 },
 Box:{
    width:80,
    height:80,
    backgroundColor:"purple",
    borderRadius:5
 }
})