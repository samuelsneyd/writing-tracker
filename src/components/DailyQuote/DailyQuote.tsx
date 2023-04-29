import * as React from 'react';
import { View, Text } from 'react-native';
import useDailyQuote from '../../hooks/useDailyQuote/useDailyQuote';

const DailyQuote = () => {
  const dailyQuote = useDailyQuote();

  return (
    <View>
      <Text>"{dailyQuote.quote}" - {dailyQuote.author}</Text>
    </View>
  );
};

export default DailyQuote;
