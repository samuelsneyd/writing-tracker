import * as React from 'react';
import { Icon, IconProps, TopNavigationAction } from '@ui-kitten/components';

/**
 * Returns a BackAction component that navigates to the previous stack screen
 * on press. For use with UI Kitten and React Navigation's top stack navigator.
 * @param navigation React Navigation prop
 */
const useBackNavigation = (navigation: any) => {
  const BackIcon = (props: IconProps) => (
    <Icon {...props} name="arrow-back" />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return { BackAction };
};

export default useBackNavigation;
