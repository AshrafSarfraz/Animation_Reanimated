import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First_Screen from '../Screen/Width_Animation';
import GestureDemo1 from '../Screen/GestureDemo';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='GestureDemo' >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack