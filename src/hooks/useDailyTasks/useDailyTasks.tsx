import * as React from 'react';
import _ from 'lodash';
import { endOfDay, format, isToday, isWithinInterval, startOfDay } from 'date-fns';
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

export type DailyTaskSummary = {
  allTasks: DailyTask[];
  inProgressTasks: DailyTask[];
  completedTasks: DailyTask[];
};

const useDailyTasks = (date: Date | undefined = undefined): DailyTaskSummary => {
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);
  const interval = date && {
    start: startOfDay(date),
    end: endOfDay(date),
  };

  // Group today's sessions by projects
  const groupedSessions = _(reduxSessions)
    .filter(session => date && interval
      ? isWithinInterval(new Date(session.date), interval)
      : isToday(new Date(session.date)),
    )
    .groupBy('projectSessionsId')
    .value();

  // Get target date's day key: 'mon' | 'tue' | ... | 'sun'
  const targetDate = date || new Date();
  const dayKey = format(targetDate, 'E').toLowerCase() as keyof WeeklyTarget;

  const allTasks = reduxProjects
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

  const [completedTasks, inProgressTasks] = _.partition(allTasks, task => task.progress === 1);

  return { allTasks, inProgressTasks, completedTasks };
};

export default useDailyTasks;
