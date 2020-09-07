import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Homescreen from '../Screens/Homescreen';
import Sectionscreen from '../Screens/Sectionscreen';
import {RouteStackParameters, RouteTabParameters} from './NavigatorTypes';
import Coursescreen from '../Screens/Coursescreen';
import Projectscreen from '../Screens/Projectscreen';

const Stack = createStackNavigator<RouteStackParameters>();

export const HomeStackNavigator = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Homescreen} />
      <Screen name="Section" component={Sectionscreen} />
    </Navigator>
  );
};

const Tab = createBottomTabNavigator<RouteTabParameters>();

const tabBarVisible = (route: any): boolean => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case 'Section':
      return false;
    default:
      return true;
  }
};

export const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen
        name="Home"
        component={HomeStackNavigator}
        options={({route}) => ({
          tabBarVisible: tabBarVisible(route),
          ...homeTabOptions,
        })}
      />
      <Screen
        name="Courses"
        component={Coursescreen}
        options={coursesTabOptions}
      />
      <Screen
        name="Projects"
        component={Projectscreen}
        options={projectsTabOptions}
      />
    </Navigator>
  );
};

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: activeColor,
  inactiveTintColor: inactiveColor,
};

const homeTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({focused}: any) => (
    <Icon
      name="ios-home"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const coursesTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({focused}: any) => (
    <Icon
      name="ios-albums"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const projectsTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({focused}: any) => (
    <Icon
      name="ios-folder"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};
