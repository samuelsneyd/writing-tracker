import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { LoginDate } from '../../models';
import { summary } from 'date-streaks';
import { DateStreakSummary } from '../../types/types';

/**
 * Returns a summary of the signed-in user's daily login streak.
 */
const useLoginStreak = (): DateStreakSummary => {
  const [loginSummary, setLoginSummary] = useState<DateStreakSummary>({
    currentStreak: 0,
    longestStreak: 0,
    streaks: [],
    todayInStreak: false,
    withinCurrentStreak: false,
  });

  useEffect(() => {
    const updateStreak = async () => {
      const currentDate = new Date().toISOString();
      const logins = await DataStore.query(LoginDate);
      // Find match on YYYY-MM-DD
      const hasSignedInToday = logins.some(login => login.date?.substring(0, 10) === currentDate.substring(0, 10));

      if (!hasSignedInToday) {
        const todayLogin = new LoginDate({
          date: currentDate,
        });
        await DataStore.save(todayLogin);
        logins.push(todayLogin);
      }

      const loginStreakSummary = summary({ dates: logins.map(login => login.date) });

      setLoginSummary(loginStreakSummary);
    };

    updateStreak().then(() => {
    });
  }, []);

  return loginSummary;
};

export default useLoginStreak;
