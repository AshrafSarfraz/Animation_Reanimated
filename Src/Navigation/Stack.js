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
import AnimatedBtnLoader2 from '../Screen/Engineer/AnimatedBtnLoading2';
import AnimatedOnboarding from '../Screen/Engineer/AnimatedOnBoarding';
import Animations from '../Screen/Engineer/Animations';
import BottomNav from '../Screen/Engineer/BottomNav';
import CartDemo2 from '../Screen/Engineer/CartDemo2';
import PuttingIntoCart from '../Screen/Engineer/CartDemo';
import Demo1 from '../Screen/Engineer/Demo1';
import Demo2 from '../Screen/Engineer/Demo2';
import MoneyAnimation from '../Screen/Engineer/MoneyAnimation';
import SensorDemo from '../Screen/Engineer/SensorDemo';
import WpAnimation2 from '../Screen/Engineer/WpAnimation2';
import WpDemo from '../Screen/Engineer/WpDemo';
import YoutubeDemo from '../Screen/Engineer/YoutubeDemo';


const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Anim' screenOptions={{headerShown:'false'}} >
      <Stack.Screen     name="FirstPage"            component={First_Page}            />
      <Stack.Screen     name="FirstScreen"          component={First_Screen}          />
      <Stack.Screen     name="EaseOut"              component={EaseOut}               />
      <Stack.Screen     name="Button_Ani"           component={Buttons_Animation}     />
      <Stack.Screen     name="RotatingImageOnPress" component={RotatingImageOnPress}  />
      <Stack.Screen     name="Interpolate"          component={Interpolate_Animation} />
      <Stack.Screen     name="GestureDemo"          component={GestureDemo1}          />
      <Stack.Screen     name="Drag_Drop"            component={Drag_Drop}             />
      <Stack.Screen     name="Swiper"               component={Swiper}                />
      <Stack.Screen     name="Swiper_Flatlist"      component={Swiper_FlatList}       />
      <Stack.Screen     name="FlipCard"             component={FlipAnimation}         />
      <Stack.Screen     name="Tinder_Cards"         component={Tinder_Cards}          />
      <Stack.Screen     name="AnimatedBottom"       component={AnimatedBottom}        />
      <Stack.Screen     name="AnimatedBtn"          component={AnimatedBtn}           />
      <Stack.Screen     name="AnimtedBtnLoading"    component={AnimatedBtnLoader}     />
      <Stack.Screen     name="Anim1"                 component={CartDemo2}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim2"                 component={Demo1}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim3"                 component={Demo2}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim"                 component={MoneyAnimation}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim7"                 component={SensorDemo}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim8"                 component={WpAnimation2}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim9"                 component={WpDemo}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Anim99"                 component={YoutubeDemo}       options={{title: 'Ashraf Sarfraz'}}  />
      <Stack.Screen     name="Vertical_Buttons"     component={Vertical_Buttons}    />
      
  

       </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack