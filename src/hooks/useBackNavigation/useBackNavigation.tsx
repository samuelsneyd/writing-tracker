import * as React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';

/**
 * Returns a BackAction component that navigates to the previous stack screen
 * on press. For use with UI Kitten and React Navigation's top stack navigator.
 * @param navigation
 */
const useBackNavigation = (navigation: any) => {
  const BackIcon = (props: any) => (
    <Icon {...props} name="arrow-back" />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return { BackAction };
};

export default useBackNavigation;
