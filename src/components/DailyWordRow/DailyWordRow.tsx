import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Toggle } from '@ui-kitten/components';
import { Project } from '../../models';


type DailyWordRowProps = {
  project: Project;
  setProjectState: React.Dispatch<Project>;
  dayName: string;
  dayKey: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
}

/**
 * A component that renders a toggle and connected input for daily word targets.
 * The input is enabled/disabled by the toggle.
 */
const DailyWordRow = (props: DailyWordRowProps) => {
  const { project, setProjectState, dayName, dayKey } = props;
  return (
    <Layout style={styles.dailyTargetRow}>
      <Layout style={styles.toggleContainer}>
        <Toggle
          style={styles.dailyTargetRowItem}
          checked={project.wordTarget[dayKey].enabled}
          onChange={() => {
            setProjectState(Project.copyOf(project, draft => {
              draft.wordTarget[dayKey] = {
                enabled: !project.wordTarget[dayKey].enabled,
                words: 0,
              };
            }));
          }}
        >{dayName}</Toggle>
      </Layout>
      <Input
        style={styles.dailyTargetRowItem}
        placeholder="0"
        value={project.wordTarget[dayKey].words ? project.wordTarget[dayKey].words.toString() : ''}
        onChangeText={nextValue => {
          // Limit input to integers
          const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;
          setProjectState(Project.copyOf(project, draft => {
            draft.wordTarget[dayKey].words = nextIntValue;
          }));
        }}
        disabled={!project.wordTarget[dayKey].enabled}
        keyboardType="number-pad"
      ></Input>
    </Layout>
  );
};

const styles = StyleSheet.create({
  dailyTargetRow: {
    flexDirection: 'row',
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dailyTargetRowItem: {
    flex: 1,
  },
});

export default DailyWordRow;
