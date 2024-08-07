import React, { useState } from "react";
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } 
from "react-native-reanimated";


//Ashraf Sarfraz
const Interpolate_Animation=()=>{
    const Animate=useSharedValue(1)
    const [click,setclick]=useState(true)
    
    const Animated_Style=useAnimatedStyle(()=>{
    const width=interpolate(Animate.value,[1,0],[100,300])
    const borderRadius=interpolate(Animate.value,[1,0],[100,300])
    const backgroundColor = interpolate(Animate.value, [1,0], ['#FF0000', '#0000FF']); 
     return{
         width:width,
         height:width,
         backgroundColor:backgroundColor,
         borderRadius:borderRadius,
        }
    })

    const handlePress=()=>{
        if(click){
            Animate.value=withTiming(1,{duration:[1500]})
        }else{
            Animate.value=withTiming(0,{duration:[1500]})
        }
        setclick(!click) 
    }
    // withTiming(1,{duration:[1500]})
    // withTiming(0,{duration:[1500]})
    return(
       <View  style={styles.Container}>
        <Animated.View style={[Animated_Style]}>
        </Animated.View>
        <TouchableOpacity  style={styles.Btn} onPress={handlePress} >
        <Text  style={styles.Txt}>Click me</Text>
        </TouchableOpacity>
       </View>
    )
}
export default Interpolate_Animation

const styles=StyleSheet.create({
Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
Btn:{
    width:150,
    height:50,
    backgroundColor:'red',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
    marginTop:"5%"
},
Txt:{
    color:'white',
    fontSize:14,
    fontWeight:"bold"
}
})