import * as React from 'react';
import _ from 'lodash';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { endOfDay, format, getDaysInYear, isWithinInterval, startOfDay, sub } from 'date-fns';
import { useAppSelector } from '../../../store/hooks';
import CalendarHeatmap from '../../CalendarHeatmap/CalendarHeatmap';
import ChartAggregateHeader from '../../ChartAggregateHeader/ChartAggregateHeader';
import { defaultChartStyles } from '../chart-styles';
import { ChartProps } from '../chart-types';
import { formatInterval } from '../chart-utils';

export const SessionHeatmap = (props: ChartProps) => {
  const { showTitle = true, chartContainerStyle = defaultChartStyles.chartContainer } = props;
  const theme = useTheme();
  const today = new Date();
  const start = startOfDay(sub(today, { years: 1 })).getTime();
  const end = endOfDay(today).getTime();
  const interval: Interval = React.useMemo(() => ({ start, end }), [start, end]);
  const reduxSessions = useAppSelector(state => state.sessions);
  const reduxTheme = useAppSelector(state => state.theme);

  const heatmapData = React.useMemo(
    () => _(reduxSessions)
      .filter(session => isWithinInterval(new Date(session.date), interval))
      .map(session => ({ date: format(new Date(session.date), 'yyyy-MM-dd') }))
      .value(),
    [reduxSessions, interval],
  );

  return (
    <>
      {showTitle && <Text category="h6">Session heatmap (year)</Text>}
      <ChartAggregateHeader
        aggregateText="total"
        value={reduxSessions.length}
        valueText="sessions"
        intervalText={formatInterval(interval)}
        showNavButtons={false}
      />
      <Layout style={chartContainerStyle}>
        <CalendarHeatmap
          values={heatmapData}
          endDate={today}
          numDays={getDaysInYear(today)}
          colorArray={[
            reduxTheme.colorMode === 'light' ? theme['color-basic-300'] : theme['color-basic-700'],
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
      </Layout>
    </>
  );
};
