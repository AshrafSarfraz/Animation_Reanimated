import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'

const Header = ({onPress,onPress1}) => {
  return (
    <View style={styles.Container}>
     <TouchableOpacity onPress={onPress}  style={styles.Btn}>
      <Image source={require('../Assets/Avatar.png')}  style={styles.Avatar}/>
     </TouchableOpacity>
     <Image source={require('../Assets/logo.png')} style={styles.logo} />
     <TouchableOpacity onPress={onPress1}  style={styles.Btn}>
      <Image source={require('../Assets/wishlist.png')}  style={styles.Avatar}/>
     </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Container:{
        width:'92%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        alignSelf:"center",
        height:80
    },
    Avatar:{
        width:30,height:30,resizeMode:"contain",
        tintColor:"white"
    },
    logo:{
        width:180,height:180,resizeMode:"contain"
    },

})