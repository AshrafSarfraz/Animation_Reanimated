import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First_Screen from '../Screen/Width_Animation';
import GestureDemo1 from '../Screen/GestureDemo';
import Interpolate_Animation from '../Screen/Interpolate';
import Buttons_Animation from '../Screen/Home/Buttons';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Button_Ani' screenOptions={{headerShown:'false'}} >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack