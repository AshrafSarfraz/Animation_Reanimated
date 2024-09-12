import { StyleSheet, Text,Image,TextInput , TouchableOpacity, View } from 'react-native'
import React from 'react'


const TextInputs = () => {
  return (
    <View style={styles.Container}>
        <TouchableOpacity>
        <Image source={require('../Assets/search.png')} style={styles.Search} />
        </TouchableOpacity>
        <TextInput placeholder='Search Here...'  style={styles.Input}/>
     
    </View>
  )
}

export default TextInputs

const styles = StyleSheet.create({
    Container:{
     height:55,
     width:'92%',
     alignSelf:"center",
     borderRadius:25,
     alignItems:"center",
     flexDirection:'row',
     paddingHorizontal:'3%',
     backgroundColor:"#fff",
     marginTop:'3%'
    },
    Search:{
        height:30,
        width:30,
        tintColor:"silver",
        marginRight:"2%"
    },
    Input:{
        fontSize:14,
        fontWeight:'400',
        color:'silver',
       
    }
    

})