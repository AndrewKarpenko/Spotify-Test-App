import React from 'react';
import {Text} from 'react-native';
import Album from '../../components/Album';

const Albums = ({route}) => {
  return (
    <>
      <Album/>
      <Text>
        {
          route.params?.id
        }
      </Text>
    </>
  );
};

export default Albums;
