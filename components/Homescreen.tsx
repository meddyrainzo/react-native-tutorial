/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import Card from './Card';
import {ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {NotificationIcon} from './Icons';
import Logo from './Logo';
import {businesses, courseLessons, courses} from '../fake/data';
import {Business} from '../models/Business';
import {CourseLesson} from '../models/CourseLesson';
import CourseCard from './CourseCard';
import {Course} from '../models/Course';
import Menu from './Menu';

Icon.loadFont();

const Homescreen = () => {
  const createLogos = () =>
    businesses.map((business: Business, index: number) => (
      <Logo image={business.image} title={business.title} key={index} />
    ));

  const createCourseLessons = () =>
    courseLessons.map((lesson: CourseLesson, index: number) => (
      <Card
        key={index}
        containerStyle={{marginLeft: 20}}
        title={lesson.title}
        image={lesson.image}
        caption={lesson.caption}
        logo={lesson.logo}
        subtitle={lesson.subtitle}
      />
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
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView style={{height: '100%'}}>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title> Welcome back </Title>
            <Name>Meddy Rainzo</Name>
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
    </Container>
  );
};

export default Homescreen;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

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

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 20px;
  text-transform: uppercase;
`;
