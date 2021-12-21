import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/loginScreen';
import RegisterScreen from './src/screens/registerScreen';

const Stack = createNativeStackNavigator();

const stackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
          },
          headerTitleStyle: {
            fontSize: 30,
            color: '#fff',
            flexGrow: 1,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Sign in'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stackNavigator;
