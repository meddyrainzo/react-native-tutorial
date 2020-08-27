import React, {FC} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

type MenuItemProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const MenuItem: FC<MenuItemProps> = ({icon, title, subtitle}) => (
  <Container>
    <IconView>
      <Icon name={icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32;
  height: 32;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
