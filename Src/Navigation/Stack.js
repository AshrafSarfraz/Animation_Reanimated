import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First_Screen from '../Screen/Width_Animation';
import Interpolate_Animation from '../Screen/Interpolate/Interpolate';
import Buttons_Animation from '../Screen/Home/Buttons';
import First_Page from '../Screen/Animation/First_Page';
import EaseOut from '../Screen/ScrollView/EaseOut';
import FlipAnimation from '../Screen/FlipCard/Flipcard';
import Swiper from '../Screen/ScrollView/Swiper';
import GestureDemo1 from '../Screen/PanGestureHandle/GestureDemo';
import Drag_Drop from '../Screen/PanGestureHandle/Drag_Drop';
import Swiper_FlatList from '../Screen/ScrollView/Swiper_Flatlist';
import Tinder_Cards from '../Screen/TinderCards.js/TinderCard';
import RotatingImageOnPress from '../Screen/Rotation/RotateImage';
import Vertical_Buttons from '../Screen/Interpolate/Vertical_Buttons';
import AnimatedBottom from '../Screen/Engineer/AnimatedBottom';
import AnimatedBtn from '../Screen/Engineer/AnimatedBtn';
import AnimatedBtnLoader from '../Screen/Engineer/AnimatedBtnLoading';
import CartDemo2 from '../Screen/Engineer/CartDemo2';
import Demo1 from '../Screen/Engineer/Demo1';
import Demo2 from '../Screen/Engineer/Demo2';
import MoneyAnimation from '../Screen/Engineer/MoneyAnimation';
import SensorDemo from '../Screen/Engineer/SensorDemo';
import WpAnimation2 from '../Screen/Engineer/WpAnimation2';
import WpDemo from '../Screen/Engineer/WpDemo';
import YoutubeDemo from '../Screen/Engineer/YoutubeDemo';
import PizzaAnimation from '../Screen/AnimatedFlatlist/PizzaAni';


const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PizzaAni"
        screenOptions={{ headerShown: false }} // This will hide headers globally
      >
        <Stack.Screen name="FirstPage" component={First_Page} />
        <Stack.Screen name="FirstScreen" component={First_Screen} />
        <Stack.Screen name="EaseOut" component={EaseOut} />
        <Stack.Screen name="Button_Ani" component={Buttons_Animation} />
        <Stack.Screen name="RotatingImageOnPress" component={RotatingImageOnPress} />
        <Stack.Screen name="Interpolate" component={Interpolate_Animation} />
        <Stack.Screen name="GestureDemo" component={GestureDemo1} />
        <Stack.Screen name="Drag_Drop" component={Drag_Drop} />
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name="Swiper_Flatlist" component={Swiper_FlatList} />
        <Stack.Screen name="FlipCard" component={FlipAnimation} />
        <Stack.Screen name="Tinder_Cards" component={Tinder_Cards} />
        <Stack.Screen name="AnimatedBottom" component={AnimatedBottom} />
        <Stack.Screen name="AnimatedBtn" component={AnimatedBtn} />
        <Stack.Screen name="AnimtedBtnLoading" component={AnimatedBtnLoader} />
        <Stack.Screen name="CartDemo" component={CartDemo2} />
        <Stack.Screen name="Anim2" component={Demo1} />
        <Stack.Screen name="Anim3" component={Demo2} />
        <Stack.Screen name="Anim" component={MoneyAnimation} />
        <Stack.Screen name="Anim7" component={SensorDemo} />
        <Stack.Screen name="Anim8" component={WpAnimation2} />
        <Stack.Screen name="Anim9" component={WpDemo} />
        <Stack.Screen name="Anim99" component={YoutubeDemo} />
        <Stack.Screen name="PizzaAni" component={PizzaAnimation} />
        <Stack.Screen name="Vertical_Buttons" component={Vertical_Buttons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
