import * as React from 'react';
import { DataStore } from 'aws-amplify';
import { LoginDate } from '../../models';
import { format } from 'date-fns';
import { summary } from 'date-streaks';
import type { DateStreakSummary } from '../../types/types';

type UseLoginStreakParams = {
  isFocused?: boolean,
};

/**
 * Returns a summary of the signed-in user's daily login streak.
 * If not already signed-in today, updates the daily login streak.
 */
const useLoginStreak = (options: UseLoginStreakParams = { isFocused: false }): DateStreakSummary => {
  const { isFocused } = options;
  const DATE_FORMAT = 'yyyy-MM-dd';
  const [loginSummary, setLoginSummary] = React.useState<DateStreakSummary>({
    currentStreak: 0,
    longestStreak: 0,
    streaks: [],
    todayInStreak: false,
    withinCurrentStreak: false,
  });

  React.useEffect(() => {
    /**
     * Updates the daily login streak as based on the device's timezone.
     */
    const updateStreak = async () => {
      const today = new Date();
      const todayDate = format(today, DATE_FORMAT);
      const loginDates = await DataStore.query(LoginDate);
      const dates = loginDates.map(login => format(new Date(login.date), DATE_FORMAT));
      const hasSignedInToday = dates.some(date => date === todayDate);

      if (!hasSignedInToday) {
        // Login dates are persisted in datastore as ISO string
        const todayLogin = new LoginDate({
          date: today.toISOString(),
        });
        await DataStore.save(todayLogin);
        loginDates.push(todayLogin);
        dates.push(format(new Date(todayLogin.date), DATE_FORMAT));
      }

      // Date streaks are summarized in local timezone via local YYYY-MM-DD
      const loginStreakSummary = summary({ dates });

      setLoginSummary(loginStreakSummary);
    };

    updateStreak().then();
  }, [isFocused]);

  return loginSummary;
};

export default useLoginStreak;
