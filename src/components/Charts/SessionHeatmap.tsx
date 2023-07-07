import { Text, useTheme } from '@ui-kitten/components';
import { format, getDaysInYear } from 'date-fns';
import * as React from 'react';
import { useAppSelector } from '../../store/hooks';
import CalendarHeatmap from '../CalendarHeatmap/CalendarHeatmap';

export const SessionHeatmap = () => {
  const theme = useTheme();
  const today = new Date();
  const reduxSessions = useAppSelector(state => state.sessions);

  return (
    <>
      <Text category="h6" appearance="hint">Session heatmap (year)</Text>
      <Text category="s1" appearance="hint">Total sessions: {reduxSessions.length.toLocaleString()}</Text>
      <CalendarHeatmap
        values={reduxSessions.map(session => ({ date: format(new Date(session.date), 'yyyy-MM-dd') }))}
        endDate={today}
        numDays={getDaysInYear(today)}
        colorArray={[
          theme['color-basic-300'],
          theme['color-primary-100'],
          theme['color-primary-200'],
          theme['color-primary-300'],
          theme['color-primary-400'],
          theme['color-primary-500'],
          theme['color-primary-600'],
          theme['color-primary-700'],
          theme['color-primary-800'],
          theme['color-primary-900'],
        ]}
        monthLabelComponent={label => <Text appearance="hint">{label}</Text>}
        gutterSize={2}
        showOutOfRangeDays
        horizontal
      />
    </>
  );
};
