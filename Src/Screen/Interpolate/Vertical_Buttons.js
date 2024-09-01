import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../Components/Buttons'; // Ensure the path is correct

const Data = [
  { img: require('../../Assets/crossicon.png') },
  { img: require('../../Assets/dateicon.png') },
  { img: require('../../Assets/delteshow.png') },
  { img: require('../../Assets/Nameicon.png') },
  { img: require('../../Assets/PlusWhite.png') },
];

const Vertical_Buttons = () => {
  const [currentBtn, setCurrentBtn] = useState(null);
  
  const handlePress = (index) => {
    setCurrentBtn(currentBtn === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnBg}>
        {Data.map((item, index) => (
          <Button
            key={index}
            index={index}
            MyImg={item.img}
            isActive={currentBtn === index}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
};

export default Vertical_Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBg: {
    width: 80,
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation:20,
    shadowColor:'#000000',
    padding: 10,
  },
});
