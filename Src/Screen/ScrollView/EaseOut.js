import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Slider from '../../Components/Slider';

const Data = [
  { Images: require('../../Assets/h1.jpg') },
  { Images: require('../../Assets/h2.jpg') },
  { Images: require('../../Assets/h3.jpg') },
  { Images: require('../../Assets/h4.jpg') },
  { Images: require('../../Assets/h5.jpg') },
];

const EaseOut = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const X = e.nativeEvent.contentOffset.x;
    const index = Math.round(X / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <Slider Images={item.Images} index={index} CurrentIndex={CurrentIndex} />
  );

  return (
    <View style={styles.Container}>
      <FlatList
        data={Data}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default EaseOut;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
});
