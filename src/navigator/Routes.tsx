import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStackNavigator/>
        </NavigationContainer>
    );
}

export default Routes;
