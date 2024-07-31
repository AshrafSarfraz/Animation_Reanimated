import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First_Screen from '../Screen/Width_Animation';

import Interpolate_Animation from '../Screen/Interpolate';
import Buttons_Animation from '../Screen/Home/Buttons';
import First_Page from '../Screen/Animation/First_Page';
import GestureDemo1 from '../Screen/PanGestureHandle.js/GestureDemo';
import Drag_Drop from '../Screen/PanGestureHandle.js/Drag_Drop';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Drag_Drop' screenOptions={{headerShown:'false'}} >
      <Stack.Screen
          name="First_Page"
          component={First_Page}
          options={{title: 'Ashraf Sarfraz'}}
        />
        <Stack.Screen
          name="Home"
          component={First_Screen}
          options={{title: 'Welcome'}}
        />
         <Stack.Screen
          name="GestureDemo"
          component={GestureDemo1}
          options={{title: 'Welcome'}}
        />
         <Stack.Screen
          name="Interpolate"
          component={Interpolate_Animation}
          options={{title: 'Welcome'}}
        />
         <Stack.Screen
          name="Button_Ani"
          component={Buttons_Animation}
          options={{title: 'Ashraf Sarfraz'}}
        />
         <Stack.Screen
          name="Drag_Drop"
          component={Drag_Drop}
          options={{title: 'Ashraf Sarfraz'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack