'use client';

import LessonPath from '@/components/learn/LessonPath';

export default function TrackPage({ params }: { params: { trackId: string } }) {
  return <LessonPath trackId={params.trackId} />;
}
