'use client';

import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export interface Track {
  id: string;
  name: string;
  artist?: string;
  genre: string;
  bpm: number;
  key: string;
  duration?: number;
  audioUrl: string;
}

interface AudioPlayerProps {
  tracks: Track[];
  compact?: boolean;
}

export default function AudioPlayer({ tracks, compact = false }: AudioPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="w-full">
      <div className="bg-[var(--negro)] rounded-[16px] p-8 md:p-12 space-y-8">
        {/* Track Info */}
        <div className="text-center space-y-4">
          <h3 className="text-[28px] md:text-[36px] font-bold text-[var(--beige)]" style={{ fontFamily: 'var(--font-display)' }}>
            {currentTrack.name}
          </h3>
          <p className="text-[14px] text-[rgba(200,221,184,0.75)] tracking-wide">
            {currentTrack.genre} · {currentTrack.bpm} BPM · {currentTrack.key}
          </p>
        </div>

        {/* Waveform Visual */}
        <div className="w-full h-[80px] bg-gradient-to-r from-[var(--verde-oscuro)] via-[var(--verde-claro)] to-[var(--verde-oscuro)] rounded-[8px] opacity-60 flex items-center justify-center">
          <div className="flex gap-1 items-end h-full px-4">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="bg-[var(--beige)] rounded-full"
                style={{
                  height: `${20 + Math.random() * 60}%`,
                  width: '3px',
                  animation: isPlaying ? `pulse 0.6s ease-in-out ${i * 0.05}s infinite` : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={handlePrevTrack}
            className="p-3 rounded-full text-[var(--verde-claro)] hover:text-[var(--beige)] hover:bg-[rgba(255,255,255,0.1)] transition"
            aria-label="Previous track"
          >
            <SkipBack size={28} />
          </button>

          <button
            onClick={handlePlayPause}
            className="p-5 rounded-full bg-[var(--verde-oscuro)] text-[var(--beige)] hover:bg-[var(--verde-medio)] transition transform hover:scale-105"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={36} /> : <Play size={36} />}
          </button>

          <button
            onClick={handleNextTrack}
            className="p-3 rounded-full text-[var(--verde-claro)] hover:text-[var(--beige)] hover:bg-[rgba(255,255,255,0.1)] transition"
            aria-label="Next track"
          >
            <SkipForward size={28} />
          </button>
        </div>

        {/* Playlist */}
        {!compact && tracks.length > 1 && (
          <div className="border-t border-[rgba(255,255,255,0.2)] pt-8 space-y-3">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[rgba(200,221,184,0.6)] font-medium">
              Playlist ({tracks.length} tracks)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto">
              {tracks.map((track, index) => (
                <button
                  key={track.id}
                  onClick={() => selectTrack(index)}
                  className={`p-4 rounded-[8px] text-left transition transform hover:scale-105 ${
                    index === currentTrackIndex
                      ? 'bg-[var(--verde-oscuro)] border-2 border-[var(--verde-claro)]'
                      : 'bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-bold text-[var(--verde-claro)] w-6 text-center">{index + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] text-[var(--beige)] font-medium truncate">{track.name}</p>
                      <p className="text-[11px] text-[rgba(200,221,184,0.6)]">
                        {track.genre} · {track.bpm} BPM
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
