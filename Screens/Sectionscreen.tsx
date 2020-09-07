/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';

import {RouteStackParameters} from '../Routes/NavigatorTypes';

type SectionscreenProps = StackScreenProps<RouteStackParameters, 'Section'>;

const Sectionscreen: FC<SectionscreenProps> = ({
  route,
  navigation,
}: SectionscreenProps) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  useEffect(() => {
    return () => {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  const section = route.params.section;
  return (
    <Container>
      <StatusBar hidden={true} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', top: 40, right: 20}}>
        <CloseView>
          <Icon name="ios-close" size={32} color="#4775f2" />
        </CloseView>
      </TouchableOpacity>
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
    </Container>
  );
};

export default Sectionscreen;

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Cover = styled.View`
  height: 375px;
  z-index: -1;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
