import * as React from 'react';
import { Icon, IconProps, TopNavigationAction } from '@ui-kitten/components';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

/**
 * Returns a BackAction component function that navigates to the previous stack screen
 * on press. For use with UI Kitten and React Navigation's top stack navigator.
 * @param navigation React Navigation prop
 */
const useBackNavigation = (navigation: NavigationProp<ParamListBase>) => {
  const BackIcon = (props: IconProps) => (
    <Icon {...props} name="arrow-back" />
  );

  /**
   * A function that returns a TopNavigationAction component with a
   * back icon that navigates to the previous stack screen on press.
   */
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return { BackAction };
};

export default useBackNavigation;
