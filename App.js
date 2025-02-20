import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from './Pages/StartPage';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="StartPage" component={StartPage} options={{headerShown:false}}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

