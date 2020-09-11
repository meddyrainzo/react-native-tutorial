/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, StatusBar, Linking, ScrollView} from 'react-native';
// import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import Markdown from 'react-native-showdown';
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

  let webview: any = null;

  const handleWebviewNavigation = (event: any) => {
    if (event.url !== 'about:blank') {
      webview.stopLoading();
      Linking.openURL(event.url);
    }
  };

  const section = route.params.section;
  return (
    <ScrollView>
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
        <Content>
          {/* <WebView
          ref={(ref) => (webview = ref)}
          source={{html: section.content + htmlStyles}}
          scalesPageToFit={false}
          scrollEnabled={false}
          onNavigationStateChange={handleWebviewNavigation}
        /> */}
          <Markdown
            markdown={section.content}
            pureCSS={htmlStyles}
            scalesPageToFit={false}
            scrollEnabled={false}
          />
        </Content>
      </Container>
    </ScrollView>
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

const Content = styled.View`
  height: 1000px;
  padding: 12px;
`;

const htmlStyles = `
<style>
  * {
    font-family: -apple-system; 
        margin: 0;
        padding: 0;
    font-size: 17px; 
    font-weight: normal; 
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

    p {
      margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }


  img {
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
  }

</style>
`;
