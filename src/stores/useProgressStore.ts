import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LessonProgress, TrackId } from '@/types';
import { TRACKS } from '@/lib/constants';

interface ProgressState {
  lessonProgress: Record<string, LessonProgress>;
  completedLessons: string[];
}

interface ProgressActions {
  completeLesson: (lessonId: string, trackId: TrackId, score: number) => void;
  getLessonStatus: (lessonId: string, trackId: TrackId, lessonIndex: number) => 'locked' | 'unlocked' | 'completed';
  getTrackProgress: (trackId: TrackId) => { completed: number; total: number };
  getTotalCompletedLessons: () => number;
  resetProgress: () => void;
}

const initialState: ProgressState = {
  lessonProgress: {},
  completedLessons: [],
};

export const useProgressStore = create<ProgressState & ProgressActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeLesson: (lessonId, trackId, score) => set((state) => {
        const existing = state.lessonProgress[lessonId];
        const isNewCompletion = !existing?.completed;

        return {
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              lessonId,
              trackId,
              completed: true,
              bestScore: existing ? Math.max(existing.bestScore, score) : score,
              completedAt: new Date().toISOString(),
            },
          },
          completedLessons: isNewCompletion
            ? [...state.completedLessons, lessonId]
            : state.completedLessons,
        };
      }),

      getLessonStatus: (lessonId, trackId, lessonIndex) => {
        const state = get();
        if (state.lessonProgress[lessonId]?.completed) return 'completed';
        if (lessonIndex === 0) return 'unlocked';

        const track = TRACKS.find(t => t.id === trackId);
        if (!track) return 'locked';

        // Check if previous lesson is completed
        const prevLessonId = `${trackId}-${lessonIndex - 1}`;
        if (state.lessonProgress[prevLessonId]?.completed) return 'unlocked';

        return 'locked';
      },

      getTrackProgress: (trackId) => {
        const state = get();
        const track = TRACKS.find(t => t.id === trackId);
        if (!track) return { completed: 0, total: 0 };

        let completed = 0;
        for (let i = 0; i < track.lessonCount; i++) {
          if (state.lessonProgress[`${trackId}-${i}`]?.completed) completed++;
        }
        return { completed, total: track.lessonCount };
      },

      getTotalCompletedLessons: () => get().completedLessons.length,

      resetProgress: () => set(initialState),
    }),
    {
      name: 'money-monsters-progress',
    }
  )
);
