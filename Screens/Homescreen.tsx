/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useEffect, useState, FC} from 'react';
import styled from 'styled-components/native';
import Card from '../components/Card';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {NotificationIcon} from '../components/Icons';
import Avatar from '../components/Avatar';
import Logo from '../components/Logo';
import {businesses, courseLessons, courses} from '../fake/data';
import {Business} from '../models/Business';
import {CourseLesson} from '../models/CourseLesson';
import CourseCard from '../components/CourseCard';
import {Course} from '../models/Course';
import Menu from '../components/Menu';
import {RootState} from '../reducers/reducers';
import {openMenu} from '../actions/menuAction';
import {RouteStackParameters} from '../Routes/NavigatorTypes';

Icon.loadFont();

type HomescreenProps = StackScreenProps<RouteStackParameters, 'Home'>;

const Homescreen: FC<HomescreenProps> = ({navigation}: HomescreenProps) => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));

  const dispatch = useDispatch();
  const menuAction = useSelector((state: RootState) => state.menu.action);
  const userName = useSelector((state: RootState) => state.user.name);

  const toggleMenu = useMemo(() => {
    if (menuAction === 'openMenu') {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          useNativeDriver: false,
        }),
      ]).start();
      StatusBar.setBarStyle('light-content', true);
    }
    if (menuAction === 'closeMenu') {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 250,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: false,
        }),
      ]).start();
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [menuAction, scale, opacity]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    toggleMenu;
  }, [toggleMenu]);

  const createLogos = () =>
    businesses.map((business: Business, index: number) => (
      <Logo image={business.image} title={business.title} key={index} />
    ));

  const createCourseLessons = () =>
    courseLessons.map((lesson: CourseLesson, index: number) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.push('Section', {section: lesson})}>
        <Card
          key={index}
          containerStyle={{marginLeft: 20}}
          title={lesson.title}
          image={lesson.image}
          caption={lesson.caption}
          logo={lesson.logo}
          subtitle={lesson.subtitle}
        />
      </TouchableOpacity>
    ));

  const createCourses = () =>
    courses.map((course: Course, index) => (
      <CourseCard
        key={index}
        image={course.image}
        logo={course.logo}
        title={course.title}
        subtitle={course.subtitle}
        avatar={course.avatar}
        caption={course.caption}
        author={course.author}
      />
    ));

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{transform: [{scale}], opacity}}>
        <SafeAreaView>
          <ScrollView style={{height: '100%'}}>
            <TitleBar>
              <TouchableOpacity
                onPress={() => dispatch(openMenu())}
                style={{position: 'absolute'}}>
                <Avatar />
              </TouchableOpacity>
              <Title> Welcome back </Title>
              <Name>{userName}</Name>
              <NotificationIcon
                size={24}
                color="#4775f2"
                style={{position: 'absolute', right: 36, top: 5}}
              />
            </TitleBar>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                padding: 20,
                marginTop: 10,
                paddingHorizontal: 12,
              }}>
              {createLogos()}
            </ScrollView>
            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{paddingBottom: 30}}
              showsHorizontalScrollIndicator={false}>
              {createCourseLessons()}
            </ScrollView>
            <Subtitle>Popular courses</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                padding: 20,
                marginTop: 10,
                paddingHorizontal: 12,
              }}>
              {createCourses()}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default Homescreen;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  padding-left: 60px;
  margin-top: 40px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: bold;
  padding: 0;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 20px;
  text-transform: uppercase;
`;
