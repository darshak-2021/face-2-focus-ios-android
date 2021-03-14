import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import QuotationgPage from '../pages/QuotationPage';

import LoginModule from '../pages/LoginPage';

import SignUpPage from '../pages/Auth/SignUpPage';

import UserProfilePage from '../pages/UserProfilePage'


const Stack = createStackNavigator();

const AppStacknavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QuotationPage"
        component={QuotationgPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginModule"
        component={LoginModule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpModule"
        component={SignUpPage}
        options={({navigation}) => ({headerShown: false})}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfilePage}
        options={({navigation}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};
export default AppStacknavigator;
