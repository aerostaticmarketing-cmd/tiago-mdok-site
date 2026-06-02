'use client';

import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

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
  const waveformRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const waveSurferRefs = useRef<{ [key: string]: WaveSurfer | null }>({});
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Initialize WaveSurfer for all tracks
  useEffect(() => {
    tracks.forEach((track) => {
      if (waveformRefs.current[track.id] && !waveSurferRefs.current[track.id]) {
        const ws = WaveSurfer.create({
          container: waveformRefs.current[track.id]!,
          waveColor: '#8BAF7C',
          progressColor: '#3D5A3E',
          barWidth: 2,
          barGap: 1,
          barRadius: 1,
          height: compact ? 32 : 48,
          url: track.audioUrl,
        });

        ws.on('ready', () => {
          setDuration(ws.getDuration());
        });

        ws.on('timeupdate', () => {
          setCurrentTime(ws.getCurrentTime());
        });

        ws.on('finish', () => {
          handleNextTrack();
        });

        ws.on('loading', (progress) => {
          if (progress > 0 && progress < 100) {
            setLoadingId(track.id);
          }
        });

        ws.on('ready', () => {
          setLoadingId(null);
        });

        waveSurferRefs.current[track.id] = ws;
      }
    });

    return () => {
      // Cleanup on unmount
      Object.values(waveSurferRefs.current).forEach((ws) => {
        if (ws) {
          ws.destroy();
        }
      });
      waveSurferRefs.current = {};
    };
  }, [tracks, compact]);

  // Handle play/pause for current track
  useEffect(() => {
    if (!waveSurferRefs.current[currentTrack.id]) return;

    const ws = waveSurferRefs.current[currentTrack.id];

    if (isPlaying) {
      ws.play();
    } else {
      ws.pause();
    }
  }, [isPlaying, currentTrack.id]);

  // Pause other tracks when playing a new one
  const handlePlayPause = (trackId: string) => {
    // Pause all other tracks
    Object.entries(waveSurferRefs.current).forEach(([id, ws]) => {
      if (id !== trackId && ws) {
        ws.pause();
      }
    });

    // Toggle current track
    const trackIndex = tracks.findIndex((t) => t.id === trackId);
    setCurrentTrackIndex(trackIndex);
    setIsPlaying(!isPlaying || trackId !== currentTrack.id);
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    Object.values(waveSurferRefs.current).forEach((ws) => {
      if (ws) {
        ws.setVolume(newVolume);
      }
    });
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full">
      <div className="bg-[var(--negro)] rounded-[16px] p-6 md:p-8 space-y-6">
        {/* Main Player */}
        <div className="space-y-4">
          {/* Track Title */}
          <div className="text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[var(--beige)]" style={{ fontFamily: 'var(--font-display)' }}>
              {currentTrack.name}
            </h3>
            {currentTrack.artist && (
              <p className="text-[12px] text-[rgba(200,221,184,0.65)] mt-2">
                {currentTrack.genre} · {currentTrack.bpm} BPM · {currentTrack.key}
              </p>
            )}
          </div>

          {/* Waveform */}
          <div
            ref={(el) => {
              if (el) waveformRefs.current[currentTrack.id] = el;
            }}
            className="w-full h-[48px] md:h-[64px] rounded-[8px] bg-[rgba(255,255,255,0.05)]"
          />

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[rgba(200,221,184,0.65)]">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[var(--verde-claro)] transition-all"
                style={{
                  width: duration ? `${(currentTime / duration) * 100}%` : '0%',
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                  const newTime = (e.clientX - rect.left) / rect.width * duration;
                  waveSurferRefs.current[currentTrack.id]?.seekTo(newTime / duration);
                }}
              />
            </div>
            <span className="text-[10px] text-[rgba(200,221,184,0.65)]">{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevTrack}
              className="p-2 text-[var(--verde-claro)] hover:text-[var(--beige)] transition"
              aria-label="Previous track"
            >
              <SkipBack size={20} />
            </button>

            <button
              onClick={() => handlePlayPause(currentTrack.id)}
              className="p-3 rounded-full bg-[var(--verde-oscuro)] text-[var(--beige)] hover:bg-[var(--verde-medio)] transition"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button
              onClick={handleNextTrack}
              className="p-2 text-[var(--verde-claro)] hover:text-[var(--beige)] transition"
              aria-label="Next track"
            >
              <SkipForward size={20} />
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => handleVolumeChange(volume === 0 ? 0.8 : 0)}
                className="p-2 text-[var(--verde-claro)] hover:text-[var(--beige)] transition"
              >
                {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-24 cursor-pointer"
                aria-label="Volume"
              />
            </div>
          </div>
        </div>

        {/* Playlist */}
        {!compact && tracks.length > 1 && (
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 space-y-2 max-h-[300px] overflow-y-auto">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-[8px] cursor-pointer transition ${
                  index === currentTrackIndex
                    ? 'bg-[var(--verde-oscuro)]'
                    : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-bold text-[var(--verde-claro)]">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="text-[13px] text-[var(--beige)] font-medium">{track.name}</p>
                    <p className="text-[11px] text-[rgba(200,221,184,0.65)]">
                      {track.genre} · {track.bpm} BPM · {track.key}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
