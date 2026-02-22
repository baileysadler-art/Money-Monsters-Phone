'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '@/stores/useUserStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { useHydration } from '@/lib/useHydration';
import { LEVELS, AVATARS, TRACKS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import Button3D from '@/components/ui/Button3D';
import ProgressBar from '@/components/ui/ProgressBar';
import StreakFlame from '@/components/ui/StreakFlame';

export default function ProfileScreen() {
  const hydrated = useHydration();
  const profile = useUserStore((s) => s.profile);
  const xp = useUserStore((s) => s.xp);
  const level = useUserStore((s) => s.level);
  const streak = useUserStore((s) => s.streak);
  const hearts = useUserStore((s) => s.hearts);
  const setAvatar = useUserStore((s) => s.setAvatar);
  const setName = useUserStore((s) => s.setName);
  const achievements = useUserStore((s) => s.achievements);
  const resetProgress = useUserStore((s) => s.resetProgress);
  const resetProgressStore = useProgressStore((s) => s.resetProgress);
  const getTrackProgress = useProgressStore((s) => s.getTrackProgress);

  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);

  if (!hydrated) return null;

  const currentLevel = LEVELS.find(l => l.level === level)!;
  const nextLevel = LEVELS.find(l => l.level === level + 1);
  const xpForNext = nextLevel ? nextLevel.xpRequired : currentLevel.xpRequired;
  const xpProgress = nextLevel
    ? ((xp - currentLevel.xpRequired) / (xpForNext - currentLevel.xpRequired)) * 100
    : 100;

  const totalLessons = TRACKS.reduce((sum, t) => {
    const p = getTrackProgress(t.id);
    return sum + p.completed;
  }, 0);

  const handleSaveName = () => {
    if (nameInput.trim()) {
      setName(nameInput.trim());
    }
    setEditingName(false);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure? This will reset all your progress!')) {
      resetProgress();
      resetProgressStore();
    }
  };

  return (
    <div className="py-6 px-5 space-y-5">
      <h1 className="text-2xl font-extrabold text-text-primary">Profile</h1>

      {/* Avatar & Name */}
      <Card className="text-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAvatarPicker(!showAvatarPicker)}
          className="text-7xl mx-auto mb-3 block"
        >
          {profile.avatar}
        </motion.button>

        {editingName ? (
          <div className="flex items-center gap-2 justify-center">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
              className="border-2 border-brand-blue rounded-lg px-3 py-1 font-bold text-center w-32 focus:outline-none"
              maxLength={15}
              autoFocus
            />
            <Button3D size="sm" variant="green" onClick={handleSaveName}>
              Save
            </Button3D>
          </div>
        ) : (
          <button onClick={() => setEditingName(true)}>
            <p className="text-xl font-bold text-text-primary">{profile.name}</p>
            <p className="text-xs text-text-secondary font-semibold">Tap to edit</p>
          </button>
        )}

        {/* Avatar picker */}
        {showAvatarPicker && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-4 grid grid-cols-4 gap-3"
          >
            {AVATARS.map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => {
                  setAvatar(avatar.emoji);
                  setShowAvatarPicker(false);
                }}
                className={`text-3xl p-3 rounded-xl border-2 transition-colors
                  ${profile.avatar === avatar.emoji ? 'border-brand-blue bg-brand-blue/10' : 'border-surface-border'}
                `}
              >
                {avatar.emoji}
              </button>
            ))}
          </motion.div>
        )}
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="text-center">
          <p className="text-2xl font-bold text-brand-orange">⚡ {xp}</p>
          <p className="text-xs font-bold text-text-secondary">TOTAL XP</p>
        </Card>
        <Card className="text-center">
          <StreakFlame streak={streak} size="sm" />
          <p className="text-xs font-bold text-text-secondary mt-1">STREAK</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-brand-red">❤️ {hearts}</p>
          <p className="text-xs font-bold text-text-secondary">HEARTS</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-brand-purple">🏆 {achievements.length}</p>
          <p className="text-xs font-bold text-text-secondary">AWARDS</p>
        </Card>
      </div>

      {/* Level progress */}
      <Card>
        <div className="flex items-center justify-between mb-2">
          <p className="font-bold text-text-primary">Level {level}</p>
          <p className="text-sm font-semibold text-text-secondary">{currentLevel.name}</p>
        </div>
        <ProgressBar progress={xpProgress} />
        <p className="text-xs font-semibold text-text-secondary mt-1 text-right">
          {nextLevel ? `${xpForNext - xp} XP to next level` : 'MAX LEVEL'}
        </p>
      </Card>

      {/* Lessons completed */}
      <Card>
        <p className="font-bold text-text-primary mb-2">📚 {totalLessons} Lessons Completed</p>
        <div className="space-y-2">
          {TRACKS.map((track) => {
            const progress = getTrackProgress(track.id);
            const pct = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
            return (
              <div key={track.id} className="flex items-center gap-2">
                <span className="text-sm">{track.icon}</span>
                <ProgressBar progress={pct} color={track.color} height={8} className="flex-1" />
                <span className="text-xs font-bold text-text-secondary">
                  {progress.completed}/{progress.total}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Settings */}
      <Card>
        <p className="font-bold text-text-primary mb-3">Settings</p>
        <Button3D fullWidth variant="red" size="sm" onClick={handleReset}>
          Reset Progress
        </Button3D>
      </Card>

      <div className="h-4" />
    </div>
  );
}
