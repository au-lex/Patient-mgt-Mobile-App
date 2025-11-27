import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

interface AvatarProps {
  url: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ url, size = 48 }) => {
  return (
    <Image 
      source={{ uri: url }} 
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} 
    />
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: COLORS.border,
  },
});