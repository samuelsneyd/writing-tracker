import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

type LinearGradientContainerProps = {
  children?: JSX.Element;
}
const LinearGradientContainer = ({ children }: LinearGradientContainerProps) => {
  return (
    <LinearGradient
      colors={['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E', '#732982']}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1, opacity: 0.7 },
});

export default LinearGradientContainer;
