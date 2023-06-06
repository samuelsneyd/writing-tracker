import * as React from 'react';
import type { Quote } from '../../types/types';
import quotes from './quotes';

/**
 * Returns the daily quote. The quote updates daily, sequentially,
 * based on the device's local timezone.
 */
const useDailyQuote = (isFocused: boolean): Quote => {
  const [dailyQuote, setDailyQuote] = React.useState<Quote>({ quote: '', author: '' });

  React.useEffect(() => {
    const now = new Date();
    // Convert to local timezone
    const timezoneOffsetMilliseconds = now.getTimezoneOffset() * 60 * 1000;
    const millisecondsSinceEpoch = now.getTime() + timezoneOffsetMilliseconds;
    const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60 * 60 * 24));
    const dailyQuoteIndex = daysSinceEpoch % quotes.length;

    setDailyQuote(quotes[dailyQuoteIndex]);
  }, [isFocused]);

  return dailyQuote;
};

export default useDailyQuote;
