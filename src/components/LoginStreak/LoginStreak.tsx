import * as React from 'react';
import { Card, Text } from '@ui-kitten/components';
import useLoginStreak from '../../hooks/useLoginStreak/useLoginStreak';

type LoginStreakProps = {
  isFocused: boolean,
};

const LoginStreak = ({ isFocused }: LoginStreakProps): React.ReactElement => {
  const { currentStreak, longestStreak } = useLoginStreak({ isFocused });

  return (
    <Card status="primary">
      <Text>Current streak: {currentStreak} day{currentStreak === 1 ? '' : 's'}</Text>
      <Text>Longest streak: {longestStreak} day{longestStreak === 1 ? '' : 's'}</Text>
    </Card>
  );
};

export default LoginStreak;
