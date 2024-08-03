import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TinderCard = ({ item, onSwipeLeft, onSwipeRight, index, totalCards, onCardSwiped, visible }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);
  const cardOpacity = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
      rotation.value = translateX.value / (SCREEN_WIDTH / 2) * 15;
    },
    onEnd: () => {
      if (translateX.value < -SCREEN_WIDTH / 2) {
        // Swiped left
        runOnJS(onSwipeLeft)();
        cardOpacity.value = withSpring(0);
        translateX.value = withSpring(-SCREEN_WIDTH, {}, () => {
          translateX.value = 0;
          translateY.value = 0;
          rotation.value = 0;
          cardOpacity.value = 1;
          runOnJS(onCardSwiped)();
        });
      } else if (translateX.value > SCREEN_WIDTH / 2) {
        // Swiped right
        runOnJS(onSwipeRight)();
        cardOpacity.value = withSpring(0);
        translateX.value = withSpring(SCREEN_WIDTH, {}, () => {
          translateX.value = 0;
          translateY.value = 0;
          rotation.value = 0;
          cardOpacity.value = 1;
          runOnJS(onCardSwiped)();
        });
      } else {
        // Reset position
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotation.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${rotation.value}deg` },
    ],
    opacity: cardOpacity.value,
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle, { opacity: visible ? 1 : 0 }]}>
        <Image source={item} style={styles.image} />
      </Animated.View>
    </PanGestureHandler>
  );
};

const Tinder_Cards = () => {
  const cardImages = [
    require('../../Assets/h1.jpg'),
    require('../../Assets/h2.jpg'),
    require('../../Assets/h3.jpg'),
    require('../../Assets/h4.jpg'),
    require('../../Assets/h5.jpg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(cardImages.map(() => true));

  const onSwipeLeft = () => {
    // Swipe left action
  };

  const onSwipeRight = () => {
    // Swipe right action
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onCardSwiped = async () => {
    if (currentIndex === cardImages.length - 1) {
      await delay(200);  // Delay for 200ms before resetting
      setVisibleCards(cardImages.map(() => true));
      setCurrentIndex(0);
    } else {
      // Hide swiped card and move to next
      setVisibleCards((prev) => {
        const updated = [...prev];
        updated[currentIndex] = false;
        return updated;
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {cardImages.map((image, index) => (
        <TinderCard
          key={index}
          item={image}
          index={index}
          totalCards={cardImages.length}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          onCardSwiped={onCardSwiped}
          visible={visibleCards[index]}
        />
      )).reverse()}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  card: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 1.2,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Tinder_Cards;
