import { Lesson, TrackId } from '@/types';
import { moneyBasicsLessons } from './money-basics';
import { savingBudgetingLessons } from './saving-budgeting';
import { earningMoneyLessons } from './earning-money';
import { smartSpendingLessons } from './smart-spending';
import { investingLessons } from './investing';

const ALL_LESSONS: Record<TrackId, Lesson[]> = {
  'money-basics': moneyBasicsLessons,
  'saving-budgeting': savingBudgetingLessons,
  'earning-money': earningMoneyLessons,
  'smart-spending': smartSpendingLessons,
  'investing': investingLessons,
};

export function getLessonsForTrack(trackId: TrackId): Lesson[] {
  return ALL_LESSONS[trackId] || [];
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const lessons of Object.values(ALL_LESSONS)) {
    const found = lessons.find(l => l.id === lessonId);
    if (found) return found;
  }
  return undefined;
}

export function getAllLessons(): Lesson[] {
  return Object.values(ALL_LESSONS).flat();
}
