import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


import QuotationgPage from '../pages/QuotationPage';

import LoginModule from '../pages/LoginPage';

const Stack = createStackNavigator();

const AppStacknavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuotationPage" component={QuotationgPage} options={{headerShown:false}} />
        <Stack.Screen name="LoginModule" component={LoginModule} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStacknavigator;
