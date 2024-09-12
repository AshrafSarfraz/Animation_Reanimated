import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import TextInputs from '../../Components/TextInputs'
import Pizzas from '../../Components/Pizzas'

const Data = [
  { id: 1, Images: require('../../Assets/pizza1.png'), Bg: require('../../Assets/dottedpage.jpg') },
  { id: 2, Images: require('../../Assets/pizza2.png'), Bg: require('../../Assets/dottedpage.jpg') },
  { id: 3, Images: require('../../Assets/pizza3.png'), Bg: require('../../Assets/dottedpage.jpg') },
  { id: 4, Images: require('../../Assets/pizza4.png'), Bg: require('../../Assets/dottedpage.jpg') },
]

const PizzaAnimation = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0)

  return (
    <View style={styles.Container}>
      <ImageBackground source={require('../../Assets/bg.jpg')} style={styles.Bg}>
        <Header onPress={() => {}} onPress1={() => {}} />
        <TextInputs />
        <View style={styles.FlatListContainer}>
          <FlatList
            data={Data}
            horizontal
            showsHorizontalScrollIndicator={false}  // Hide scroll indicator for cleaner UI
            keyExtractor={(item) => item.id.toString()}
            onScroll={(e)=>{
              const X=e.nativeEvent.contentOffset.x;
              const ItemWidth=250;
              setCurrentIndex((X/ItemWidth).toFixed())
            }}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.PizzaItemContainer}>
                  <Pizzas PizzaImages={item.Images} index={index} CurrentIndex={CurrentIndex} bgImg={item.Bg} />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.Bottom}>
          <View style={styles.Txt_Cont}>
            <Text style={styles.Txt}>Lorem Lipsum Is That</Text>
            <Text style={styles.Txt1}>Lorem Lipsum Is</Text>
          </View>
          <View style={styles.ImgCont}>
            <Image source={require('../../Assets/delteshow.png')} style={styles.Edit} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PizzaAnimation

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  FlatListContainer: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  PizzaItemContainer: {
    width: 280, // Set a fixed width for each pizza item
    marginRight: 10, // Give some space between the items
  },
  Bottom: {
    width: '92%',
    backgroundColor: 'white',
    height: 90,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%'
  },
  Txt_Cont: {
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  Txt: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  Txt1: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400'
  },
  ImgCont: {
    backgroundColor: 'yellow',
    width: 80,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Edit: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
})
