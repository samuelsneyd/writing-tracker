import * as React from 'react';
import { CardProps } from '@ui-kitten/components/ui/card/card.component';
import { StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import useDailyQuote from '../../hooks/useDailyQuote/useDailyQuote';

type DailyQuoteProps = {
  isFocused: boolean,
};

const DailyQuote = (props: DailyQuoteProps & CardProps): React.ReactElement => {
  const { isFocused } = props;
  const dailyQuote = useDailyQuote({ isFocused });

  return (
    <Card {...props} status="primary" style={styles.card}>
      <Text>
        <Text style={styles.text}>"{dailyQuote.quote}"</Text>
        <Text style={styles.text} status="primary"> - {dailyQuote.author}</Text>
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  text: {
    fontStyle: 'italic',
  },
});

export default DailyQuote;
