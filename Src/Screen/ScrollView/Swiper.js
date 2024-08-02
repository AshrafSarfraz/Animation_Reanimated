import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const Swiper = () => {
  const Animation = useSharedValue(0);
  const GestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.start = Animation.value;
    },
    onActive: (e, c) => {
      Animation.value = c.start + e.translationX;
    },
    onEnd: (e, c) => {
      Animation.value = withSpring(0)
    },
  });
  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: Animation.value}],
    };
  });
  const LeftIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: Animation.value > 55 ? withSpring(2) : withSpring(1)},
      ],
    };
  });
  const RightIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: Animation.value < -55 ? withSpring(2) : withSpring(1)},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.Container}>
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
                  <Text style={styles.Name_Txt}>A</Text>
                </View>
                <View style={styles.Sms_Detail}>
                  <Text style={styles.Sms_Title}>Demo Message</Text>
                  <Text style={styles.Sms_Desc}>
                    Lorem ipsum is a placeholder text
                  </Text>
                </View>
              </View>
              <Text style={styles.Timing}>2:00 PM</Text>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Swiper;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
