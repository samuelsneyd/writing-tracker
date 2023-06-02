import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { StyleSheet, View } from 'react-native';

export type BookCoverImageProps = FastImageProps & {};

/**
 * Wraps a FastImage component with an overlay to emulate a book cover's creases.
 */
const BookCoverImage = (props: BookCoverImageProps) => (
  <View style={styles.cover}>
    <LinearGradient
      colors={[
        'rgba(255, 255, 255, 0.3)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(255, 255, 255, 0.2)',
        'transparent',
        'transparent',
        'rgba(255, 255, 255, 0.2)',
        'transparent',
      ]}
      locations={[0, 0.03, 0.07, 0.09, 0.10, 0.12, 0.20]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradientOverlay}
    />
    <FastImage
      style={styles.image}
      resizeMode="cover"
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  cover: {
    position: 'relative',
    borderRadius: 2,
    width: 150,
    height: 225,
    overflow: 'hidden',
    margin: 'auto',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BookCoverImage;
