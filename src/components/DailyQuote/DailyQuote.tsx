import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import useDailyQuote from '../../hooks/useDailyQuote/useDailyQuote';

type DailyQuoteProps = {
  isFocused: boolean,
};

const DailyQuote = ({ isFocused }: DailyQuoteProps): React.ReactElement => {
  const dailyQuote = useDailyQuote(isFocused);

  return (
    <Card status="primary">
      <Text>
        <Text style={styles.italic}>"{dailyQuote.quote}"</Text>
        <Text style={styles.italic} status="primary"> - {dailyQuote.author}</Text>
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
