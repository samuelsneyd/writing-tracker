import * as React from 'react';
import type { Quote } from '../../types/types';
import quotes from './quotes';

type UseDailyQuoteParams = {
  isFocused: boolean;
};

/**
 * Returns the daily quote. The quote updates daily, sequentially,
 * based on the device's local timezone.
 * React.useMemo() offers no performance benefit here.
 */
const useDailyQuote = ({ isFocused = false }: UseDailyQuoteParams): Quote => {
  const now = new Date();
  const timezoneOffsetMilliseconds = now.getTimezoneOffset() * 60 * 1000;
  const millisecondsSinceEpoch = now.getTime() + timezoneOffsetMilliseconds;
  const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60 * 60 * 24));
  const dailyQuoteIndex = daysSinceEpoch % quotes.length;

  return quotes[dailyQuoteIndex];
};

export default useDailyQuote;
