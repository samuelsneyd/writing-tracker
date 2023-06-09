import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Toggle } from '@ui-kitten/components';
import { Project } from '../../models';
import { CreateProjectInput } from '../../types/API';

type DailyWordRowProps = {
  form?: CreateProjectInput;
  setForm?: React.Dispatch<CreateProjectInput>;
  project?: Project;
  setProject?: React.Dispatch<Project>;
  dayName: string;
  dayKey: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
};

/**
 * A component that renders a toggle and connected input for daily word targets.
 * The input is enabled/disabled by the toggle.
 * Must be passed either form and setForm props, or project and setProject props.
 * If both form and project are passed, will display the form state.
 */
const DailyWordRow = (props: DailyWordRowProps) => {
  const { form, setForm, project, setProject, dayName, dayKey } = props;
  const stateValues = form || project;

  const handleToggleChange = () => {
    if (form && setForm) {
      setForm({
        ...form,
        wordTarget: {
          ...form.wordTarget,
          [dayKey]: {
            enabled: !form.wordTarget[dayKey].enabled,
            words: 0,
          },
        },
      });
    }

    if (project && setProject) {
      setProject(Project.copyOf(project, draft => {
        draft.wordTarget[dayKey] = {
          enabled: !project.wordTarget[dayKey].enabled,
          words: 0,
        };
      }));
    }
  };

  const handleInputChange = (nextValue: string) => {
    // Limit input to integers
    const nextIntValue = parseInt(nextValue.replace(/\D/g, '')) || 0;

    if (form && setForm) {
      setForm({
        ...form,
        wordTarget: {
          ...form.wordTarget,
          [dayKey]: {
            ...form.wordTarget[dayKey],
            words: nextIntValue,
          },
        },
      });
    }

    if (project && setProject) {
      setProject(Project.copyOf(project, draft => {
        draft.wordTarget[dayKey].words = nextIntValue;
      }));
    }
  };

  return (
    <Layout style={styles.dailyTargetRow}>
      <Layout style={styles.toggleContainer}>
        <Toggle
          style={styles.dailyTargetRowItem}
          checked={stateValues?.wordTarget[dayKey].enabled}
          onChange={handleToggleChange}
        >{dayName}</Toggle>
      </Layout>
      <Input
        style={styles.dailyTargetRowItem}
        placeholder="0"
        value={stateValues?.wordTarget[dayKey].words ? stateValues.wordTarget[dayKey].words.toString() : ''}
        onChangeText={handleInputChange}
        disabled={!stateValues?.wordTarget[dayKey].enabled}
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
