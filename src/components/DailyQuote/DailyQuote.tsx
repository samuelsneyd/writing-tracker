import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import useDailyQuote from '../../hooks/useDailyQuote/useDailyQuote';

const DailyQuote = () => {
  const dailyQuote = useDailyQuote();

  return (
    <Card status="primary">
      <Text>
        <Text style={styles.italic} appearance="hint">"{dailyQuote.quote}"</Text>
        <Text style={styles.italic}> - {dailyQuote.author}</Text>
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});

export default DailyQuote;
