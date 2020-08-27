/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Animated, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {menus} from '../static_data/menu';
import {AccountItem} from '../models/AccountItem';
import MenuItem from './MenuItem';

const screenHeight = Dimensions.get('window').height;

const Menu = () => {
  const top = new Animated.Value(screenHeight);

  useEffect(() => {
    Animated.spring(top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, [top]);

  const toggleMenu = () => {
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: false,
    }).start();
  };

  const createMenuItems = () =>
    menus.map((menu: AccountItem, index: number) => (
      <MenuItem
        key={index}
        icon={menu.icon}
        title={menu.title}
        subtitle={menu.subtitle}
      />
    ));

  return (
    <AnimatedContainer style={{top: top}}>
      <Cover>
        <CoverImage source={require('../assets/background2.jpg')} />
        <Title>Meddy Rainzo</Title>
        <SubTitle>Greatest ever</SubTitle>
      </Cover>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}>
        <CloseView>
          <Icon name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>{createMenuItems()}</Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fafafa;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const CoverImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-top: 8px;
`;
