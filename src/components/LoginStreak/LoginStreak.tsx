import * as React from 'react';
import { Card, Text } from '@ui-kitten/components';
import useLoginStreak from '../../hooks/useLoginStreak/useLoginStreak';

const LoginStreak = (): React.ReactElement => {
  const { currentStreak, longestStreak } = useLoginStreak();

  return (
    <Card status="primary">
      <Text>Current login streak: {currentStreak}</Text>
      <Text>Maximum login streak: {longestStreak}</Text>
    </Card>
  );
};

export default LoginStreak;
