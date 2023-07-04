import * as React from 'react';
import _ from 'lodash';
import { format, isToday } from 'date-fns';
import { WeeklyTarget } from '../../models';
import { SerializedProject } from '../../models/serialized';
import { useAppSelector } from '../../store/hooks';
import { ProjectStatus } from '../../types/API';

export type DailyTask = {
  project: SerializedProject;
  wordsToDo: number;
  wordsCompleted: number;
  progress: number; // Range (0-1)
};

const useDailyTasks = (): DailyTask[] => {
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);

  // Group today's sessions by projects
  const groupedSessions = _(reduxSessions)
    .filter(session => isToday(new Date(session.date)))
    .groupBy('projectSessionsId')
    .value();

  // Get today's day key 'mon' | 'tue' | ... | 'sun'
  const today = new Date();
  const dayKey = format(today, 'E').toLowerCase() as keyof WeeklyTarget;

  return reduxProjects
    // Active projects with targets today
    .filter(project =>
      project.status === ProjectStatus.IN_PROGRESS
      && project.wordTarget[dayKey]?.enabled
      && project.wordTarget[dayKey]?.words > 0,
    )
    // Find target and progress already achieved today
    .map(project => ({
      project,
      wordsToDo: project.wordTarget[dayKey].words,
      wordsCompleted: _.sumBy(groupedSessions[project.id] ?? [], 'words'),
    }))
    .map(task => ({
      ...task,
      progress: Math.min(task.wordsCompleted / task.wordsToDo, 1),
    }));
};

export default useDailyTasks;
