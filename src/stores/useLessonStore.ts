import { create } from 'zustand';
import { LessonSession, TrackId } from '@/types';

interface LessonActions {
  startLesson: (lessonId: string, trackId: TrackId, totalScreens: number, hearts: number) => void;
  nextScreen: () => void;
  recordCorrect: (xp: number) => void;
  recordWrong: () => void;
  completeLessonSession: () => void;
  resetSession: () => void;
}

const initialSession: LessonSession = {
  lessonId: '',
  trackId: 'money-basics',
  currentScreen: 0,
  totalScreens: 0,
  hearts: 5,
  correctAnswers: 0,
  wrongAnswers: 0,
  xpEarned: 0,
  isComplete: false,
};

export const useLessonStore = create<LessonSession & LessonActions>()((set) => ({
  ...initialSession,

  startLesson: (lessonId, trackId, totalScreens, hearts) => set({
    ...initialSession,
    lessonId,
    trackId,
    totalScreens,
    hearts,
  }),

  nextScreen: () => set((state) => ({
    currentScreen: Math.min(state.currentScreen + 1, state.totalScreens - 1),
  })),

  recordCorrect: (xp) => set((state) => ({
    correctAnswers: state.correctAnswers + 1,
    xpEarned: state.xpEarned + xp,
  })),

  recordWrong: () => set((state) => ({
    wrongAnswers: state.wrongAnswers + 1,
    hearts: Math.max(0, state.hearts - 1),
  })),

  completeLessonSession: () => set({ isComplete: true }),

  resetSession: () => set(initialSession),
}));
