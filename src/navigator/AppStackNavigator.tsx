import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import QuotationgPage from '../pages/QuotationPage';

import LoginModule from '../pages/Auth/LoginPage';

import SignUpPage from '../pages/Auth/SignUpPage';


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
    </Stack.Navigator>
  );
};
export default AppStacknavigator;
