import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13PSXqPhf3hsCZz4VSKClaq6o0vdRDlAIn77YEQT2rZ3v0H827-B8Z17YQaEmC-5D2DQ&usqp=CAU'
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode='cover'
    />
  );
}