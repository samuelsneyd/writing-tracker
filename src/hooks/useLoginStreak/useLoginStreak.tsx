import * as React from 'react';
import { DataStore } from 'aws-amplify';
import { startOfDay } from 'date-fns';
import { summary } from 'date-streaks';
import { LoginDate } from '../../models';
import type { DateStreakSummary } from '../../types/types';

type UseLoginStreakParams = {
  isFocused?: boolean,
};

/**
 * Returns a summary of the signed-in user's daily login streak.
 * If not already signed-in today, updates the daily login streak.
 * Streaks are based on the local device's timezone.
 */
const useLoginStreak = (options: UseLoginStreakParams = { isFocused: false }): DateStreakSummary => {
  const { isFocused } = options;
  const [loginSummary, setLoginSummary] = React.useState<DateStreakSummary>({
    currentStreak: 0,
    longestStreak: 0,
    streaks: [],
    todayInStreak: false,
    withinCurrentStreak: false,
  });
  const today = new Date();
  const todayUTC = startOfDay(today).getTime();

  const loginSummaryMemo = React.useMemo(async () => {
    const loginDates = await DataStore.query(LoginDate);
    const dates = loginDates.map(login => startOfDay(new Date(login.date)).getTime());
    const hasSignedInToday = dates.some(date => date === todayUTC);

    if (!hasSignedInToday) {
      // Login dates are persisted in datastore as ISO string
      const todayLogin = new LoginDate({
        date: today.toISOString(),
      });
      await DataStore.save(todayLogin);
      dates.push(todayUTC);
    }

    // Date streaks are summarized in local timezone
    return summary({ dates });
  }, [todayUTC]);

  /**
   * Updates the daily login streak as based on the device's timezone.
   */
  const updateStreak = React.useCallback(async () => {
    setLoginSummary(await loginSummaryMemo);
  }, [todayUTC]);

  React.useEffect(() => {
    updateStreak().then();
  }, [isFocused]);

  return loginSummary;
};

export default useLoginStreak;
