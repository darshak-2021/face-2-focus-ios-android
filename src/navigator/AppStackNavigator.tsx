import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import QuotationgPage from '../pages/QuotationPage';

import LoginModule from '../pages/LoginPage';

import CameraModulePage from '../pages/CameraModulePage';

import UserProfilePage from '../pages/UserProfilePage';

import UserPictureSnapPage from '../pages/UserPictureSnapPage';

import MeditationListAudios from '../pages/MeditationListAudios';

import AudioBeginPage from '../pages/AudioBeginPage';

import AudioPlayerController from '../pages/AudioPlayerController';

import PickerPictureSnap from '../pages/PickerPictureSnap';


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
        options={{headerShown: false, animationEnabled:false}}
      />
      <Stack.Screen
        name="CameraModule"
        component={CameraModulePage}
        options={({navigation}) => ({headerShown: false})}
      />
      <Stack.Screen
        name="UserPictureSnap"
        component={UserPictureSnapPage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="PickerPicture"
        component={PickerPictureSnap}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="MeditationListAudios"
        component={MeditationListAudios}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="AudioBegin"
        component={AudioBeginPage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
       <Stack.Screen
        name="AudioPlayerController"
        component={AudioPlayerController}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="UserProfilePage"
        component={UserProfilePage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      
    </Stack.Navigator>
  );
};
export default AppStacknavigator;
