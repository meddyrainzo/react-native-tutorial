import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';

type LogoProps = {
  image: ImageSourcePropType;
  title: string;
};

const Logo: FC<LogoProps> = ({image, title}) => (
  <Container>
    <Icon source={image} resizeMode="contain" />
    <Title>{title}</Title>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;

const Icon = styled.Image`
  height: 36px;
  width: 36px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
`;
