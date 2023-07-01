import * as React from 'react';
import { CardProps } from '@ui-kitten/components/ui/card/card.component';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import useLoginStreak from '../../hooks/useLoginStreak/useLoginStreak';

type LoginStreakProps = {
  isFocused: boolean,
};

const LoginStreak = (props: LoginStreakProps & CardProps): React.ReactElement => {
  const { isFocused } = props;
  const { currentStreak, longestStreak } = useLoginStreak({ isFocused });

  return (
    <Card {...props} status="primary" style={styles.card}>
      <Text style={styles.text}>Current streak: {currentStreak} day{currentStreak === 1 ? '' : 's'}</Text>
      <Text style={styles.text}>Longest streak: {longestStreak} day{longestStreak === 1 ? '' : 's'}</Text>
    </Card>
  );
};

export default LoginStreak;

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
  },
});
