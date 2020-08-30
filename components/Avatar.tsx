import React, {useState, useMemo, useEffect, FC} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import axios from 'axios';

import {changeName} from '../actions/userAction';

const Avatar: FC = () => {
  const [photo, setPhoto] = useState(
    'https://cl.ly/55da82beb939/download/avatar-default.jpg',
  );
  const [url] = useState('https://uifaces.co/api');
  const dispatch = useDispatch();

  const fetchImage = useMemo(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'X-API-KEY': 'A7A847BC-ED1142C9-A513100F-866B390D',
            Accept: 'application/json',
          },
        });
        const person = response.data[0];
        dispatch(changeName(person.name));
        setPhoto(person.photo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, url]);

  useEffect(() => {
    fetchImage;
  }, [fetchImage]);

  return <Image source={{uri: photo}} />;
};

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
