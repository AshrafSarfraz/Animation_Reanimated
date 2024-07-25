import React, { useState } from "react";
import {Text,View,TouchableOpacity,StyleSheet, Image, Alert} from 'react-native'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

//Ashraf_Sarfraz1
const Buttons_Animation=()=>{
     const Animation=useSharedValue(0)
     const Long_Bar=useSharedValue(0)
     const [isPressed,setIsPressed]=useState(false)
     const [isClick,setIsClick]=useState(false)

     const Animated_Style=useAnimatedStyle(()=>{
        const Width=interpolate(Animation.value,[0,1],[60,250])
        const borderRadius=interpolate(Animation.value,[0,1],[150,150])
        const color = interpolateColor(Animation.value, [0, 1], ['blue', 'blue']); 
        const Bottom=interpolate(Animation.value,[0,1],[10,-50])
        const Right=interpolate(Animation.value,[0,1],[10,-50]) 
        return{
                width:Width,
                height:Width,
                borderRadius:borderRadius,
                backgroundColor:color,
                justifyContent:'center',
                alignItems:"center",
                bottom:Bottom,
                right:Right
        }
     })
     const Long_Animated_Style=useAnimatedStyle(()=>{
        const Height=interpolate(Long_Bar.value,[0,1],[70,250])
        const Padding_Vertical=interpolate(Long_Bar.value,[0,1],[0,15])
        const justify_Content=interpolate(Long_Bar.value,[0,1],['center','space-between'])
        return{
                height:Height,
                justifyContent:justify_Content,
                paddingVertical:Padding_Vertical
               
        }
     })
     const OnPress=()=>{
        if(isPressed){
            Animation.value=withSpring(0)
        }else{
            Animation.value=withSpring(1)
        }
        setIsPressed(!isPressed)
     }
     const OnPress1=()=>{
        if(isClick){
            Long_Bar.value=withSpring(0)
        }else{
            Long_Bar.value=withSpring(1)
        }
        setIsClick(!isClick)
     }


    return(
       <View  style={styles.Container}>
        <Animated.View style={[styles.Box,Animated_Style]}>
        {
        isPressed?
       ( <View style={styles.Btn_Container}>
        <TouchableOpacity  style={[styles.Btn1,{top:90,left:0}]} onPress={()=>{Alert.alert('Pressed')}} >
        <Image source={require('../../Assets/Nameicon.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.Btn1,{top:40,left:-25}]} onPress={()=>{Alert.alert('Pressed')}} >
        <Image source={require('../../Assets/delteshow.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.Btn1,{top:3,left:-30}]} onPress={()=>{Alert.alert('Pressed')}}>
        <Image source={require('../../Assets/fluent.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.Btn1,{top:-7,left:-20}]} onPress={()=>{Alert.alert('Pressed')}}>
        <Image source={require('../../Assets/dateicon.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        </View>):null
       }
        {
          isPressed?(
            <TouchableOpacity  style={styles.Plus_Btn} onPress={OnPress} >
            <Image source={require('../../Assets/crossicon.png')} resizeMode="contain" style={{tintColor:'white',width:30,height:30}}/>
            </TouchableOpacity>
          )  :
          (
            <TouchableOpacity  style={styles.Plus_Btn} onPress={OnPress} >
            <Image source={require('../../Assets/PlusWhite.png')} resizeMode="contain" style={{tintColor:'white'}}/>
            </TouchableOpacity>
          ) 
        }
      
      
        </Animated.View>
        <Animated.View style={[styles.LongBar,Long_Animated_Style]}>
        {
        isClick?
       ( <View style={styles.Btn_Container1}>
        <TouchableOpacity  style={[styles.Btn1,]} onPress={()=>{Alert.alert('Pressed')}} >
        <Image source={require('../../Assets/Nameicon.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.Btn1,]} onPress={()=>{Alert.alert('Pressed')}} >
        <Image source={require('../../Assets/delteshow.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.Btn1,]} onPress={()=>{Alert.alert('Pressed')}}>
        <Image source={require('../../Assets/fluent.png')} resizeMode="contain" style={styles.Img}/>
        </TouchableOpacity>
        </View>):null
       }
        {
          isClick?(
            <TouchableOpacity  style={styles.Plus_Btn} onPress={OnPress1} >
            <Image source={require('../../Assets/crossicon.png')} resizeMode="contain" style={{tintColor:'white',width:30,height:30}}/>
            </TouchableOpacity>
          )  :
          (
            <TouchableOpacity  style={styles.Plus_Btn} onPress={OnPress1} >
            <Image source={require('../../Assets/PlusWhite.png')} resizeMode="contain" style={{tintColor:'white'}}/>
            </TouchableOpacity>
          ) 
        }
       

      
      
        </Animated.View>
      

       </View>
    )
}
export default Buttons_Animation

const styles=StyleSheet.create({
Container:{
  flex:1,
},
Box:{
   position:"absolute",
},
Plus_Btn:{

  backgroundColor:"blue"
},
Txt:{
    color:'white',
    fontSize:14,
    fontWeight:"bold"
},
Btn_Container:{
    flexDirection:"row",
    width:'60%',
    borderRadius:100,
    justifyContent:"space-between",
    position:'absolute',
    alignSelf:"flex-start",
    top:20,
    left:10
    
},
Btn1:{
 width:45,
 height:45,
 justifyContent:"center",
 alignItems:"center",
 borderRadius:25

},
Img:{
    tintColor:'#fff',
    width:35,height:35,
},
LongBar:{
    width:70,
    backgroundColor:'red',
    position:"absolute",
    bottom:10,
    left:10,
    borderRadius:50,
    alignItems:"center"
},
Btn_Container1:{
    borderRadius:100,
    height:'70%',
    justifyContent:'space-between'
},

})