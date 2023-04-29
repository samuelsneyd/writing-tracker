import { useState, useEffect } from 'react';
import type { Quote } from '../../types/types';
import quotes from './quotes';

const useDailyQuote = (): Quote => {
  const [dailyQuote, setDailyQuote] = useState<Quote>({ quote: '', author: '' });

  useEffect(() => {
    const now = new Date();
    const millisecondsSinceEpoch = now.getTime();
    const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60 * 60 * 24));
    const dailyQuoteIndex = daysSinceEpoch % quotes.length;

    setDailyQuote(quotes[dailyQuoteIndex]);
  }, []);

  return dailyQuote;
};

export default useDailyQuote;
