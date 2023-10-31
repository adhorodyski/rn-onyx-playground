import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import {
  CollectionScreenJotai,
  CollectionScreenOnyx,
} from '../pages/jotai-onyx/CollectionScreen';
import {CollectionScreenJotaiMMKV} from '../pages/jotai-mmkv/CollectionScreen';

export type RootStackParamList = {
  Home: undefined;
  JotaiCollection: undefined;
  WithOnyxCollection: undefined;
  JotaiMmkvCollection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Experiments'}}
      />
      <Stack.Screen
        name="JotaiCollection"
        component={CollectionScreenJotai}
        options={{title: 'Jotai + Onyx (Collection)'}}
      />
      <Stack.Screen
        name="WithOnyxCollection"
        component={CollectionScreenOnyx}
        options={{title: 'withOnyx + Onyx (Collection)'}}
      />
      <Stack.Screen
        name="JotaiMmkvCollection"
        component={CollectionScreenJotaiMMKV}
        options={{title: 'Jotai + MMKV (Collection)'}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
