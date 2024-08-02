import React from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const data = [
  { id: '1', name: 'A', title: 'Demo Message', description: 'Lorem ipsum is a placeholder text', timing: '2:00 PM' },
  { id: '2', name: 'B', title: 'Another Message', description: 'More placeholder text', timing: '3:00 PM' },
  { id: '3', name: 'C', title: 'Demo Message', description: 'Lorem ipsum is a placeholder text', timing: '4:00 PM' },
  { id: '4', name: 'D', title: 'Another Message', description: 'More placeholder text', timing: '6:30 PM' },
 
];

const SwiperItem = ({ item }) => {
  const Animation = useSharedValue(0);
  const GestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.start = Animation.value;
    },
    onActive: (e, c) => {
      Animation.value = c.start + e.translationX;
    },
    onEnd: (e, c) => {
      Animation.value = withSpring(0);
    },
  });

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: Animation.value }],
    };
  });

  const LeftIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: Animation.value > 55 ? withSpring(2) : withSpring(1) },
      ],
    };
  });

  const RightIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: Animation.value < -50 ? withSpring(2) : withSpring(1) },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={GestureHandler}>
      <Animated.View style={styles.Bg}>
        <Animated.View style={[styles.LeftIcon, LeftIconAnimatedStyle]}>
          <Image
            source={require('../../Assets/delteshow.png')}
            style={styles.Img}
          />
        </Animated.View>
        <Animated.View style={[styles.RightIcon, RightIconAnimatedStyle]}>
          <Image
            source={require('../../Assets/delteshow.png')}
            style={styles.Img}
          />
        </Animated.View>
        <Animated.View style={[styles.Front, AnimatedStyle]}>
          <View style={styles.Name_Container}>
            <View style={styles.Name_Con}>
              <Text style={styles.Name_Txt}>{item.name}</Text>
            </View>
            <View style={styles.Sms_Detail}>
              <Text style={styles.Sms_Title}>{item.title}</Text>
              <Text style={styles.Sms_Desc}>
                {item.description}
              </Text>
            </View>
          </View>
          <Text style={styles.Timing}>{item.timing}</Text>
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Swiper_FlatList = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <SwiperItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.Container}
      />
    </GestureHandlerRootView>
  );
};

export default  Swiper_FlatList ;

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bg: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'center',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 5, // Space between items
  },
  Front: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  LeftIcon: {
    marginLeft: 20,
  },
  RightIcon: {
    marginRight: 20,
  },
  Img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  Name_Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Name_Con: {
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name_Txt: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
  },
  Sms_Detail: {
    marginLeft: 10,
    height: 47,
    justifyContent: 'space-between',
  },
  Sms_Title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  Sms_Desc: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '400',
  },
  Timing: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    top: '-4%',
  },
});
