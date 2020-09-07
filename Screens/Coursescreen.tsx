import React, {FC} from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {RouteTabParameters} from '../Routes/NavigatorTypes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type CoursescreenProps = BottomTabScreenProps<RouteTabParameters, 'Courses'>;

const Coursescreen: FC<CoursescreenProps> = ({
  navigation,
}: CoursescreenProps) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Title>Courses screen</Title>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Coursescreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 16px;
`;
