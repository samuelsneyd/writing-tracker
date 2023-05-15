import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { LoginDate } from '../../models';
import { summary } from 'date-streaks';
import { DateStreakSummary } from '../../types/types';
import { format } from 'date-fns';

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
    /**
     * Updates the daily login streak as based on the device's timezone.
     */
    const updateStreak = async () => {
      const today = new Date();
      const todayDate = format(today, 'YYYY-MM-DD');
      const loginDates = await DataStore.query(LoginDate);
      const dates = loginDates.map(login => format(login.date, 'YYYY-MM-DD'));
      const hasSignedInToday = dates.some(date => date === todayDate);

      if (!hasSignedInToday) {
        // Login dates are persisted in datastore as ISO string
        const todayLogin = new LoginDate({
          date: today.toISOString(),
        });
        await DataStore.save(todayLogin);
        loginDates.push(todayLogin);
        dates.push(format(todayLogin.date, 'YYYY-MM-DD'));
      }

      // Date streaks are summarized in local timezone via local YYYY-MM-DD
      const loginStreakSummary = summary({ dates });

      setLoginSummary(loginStreakSummary);
    };

    updateStreak().then(() => {
    });
  }, []);

  return loginSummary;
};

export default useLoginStreak;
