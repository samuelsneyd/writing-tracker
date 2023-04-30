import * as React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import useDailyQuote from '../../hooks/useDailyQuote/useDailyQuote';

const DailyQuote = () => {
  const dailyQuote = useDailyQuote();

  return (
    <Layout style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <Text appearance="hint">"{dailyQuote.quote}" - {dailyQuote.author}</Text>
    </Layout>
  );
};

export default DailyQuote;
