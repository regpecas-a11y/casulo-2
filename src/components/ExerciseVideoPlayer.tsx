import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Video, 
  Sparkles,
  Clock
} from 'lucide-react';
import { RICH_PRENATAL_EXERCISES, RichPrenatalExercise } from '../data/prenatalExercisesData';

interface ExerciseVideoPlayerProps {
  exercise: RichPrenatalExercise;
  className?: string;
  autoPlay?: boolean;
  compact?: boolean;
  onVideoLoaded?: () => void;
}

// Extrai URL de incorporação do YouTube se for um link do YouTube
export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&mute=0&rel=0&modestbranding=1`;
  }
  return null;
}

// Extrai URL de incorporação do Google Drive se for um link do Google Drive
export function getGoogleDriveEmbedUrl(url: string): string | null {
  if (!url) return null;
  const driveMatch = url.match(/(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=))([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return null;
}

function formatDuration(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export const ExerciseVideoPlayer: React.FC<ExerciseVideoPlayerProps> = ({
  exercise,
  className = '',
  autoPlay = false,
  compact = false,
  onVideoLoaded
}) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1. Verifica se o exercício tem videoUrl configurado diretamente
    if (exercise.videoUrl && exercise.videoUrl.trim()) {
      setVideoSrc(exercise.videoUrl.trim());
      onVideoLoaded?.();
      return;
    }

    // 2. Verifica se existe arquivo no servidor local em /videos/
    const checkStaticVideo = async () => {
      const exerciseIndex = RICH_PRENATAL_EXERCISES.findIndex(e => e.id === exercise.id) + 1;
      const candidates = [
        `/videos/${exercise.id}.mp4`,
        `/videos/${exerciseIndex}.mp4`,
        `/videos/video-${exerciseIndex}.mp4`,
        `/videos/${exercise.videoNumber}.mp4`,
        `/videos/video-${exercise.videoNumber}.mp4`
      ];

      for (const path of candidates) {
        try {
          const resp = await fetch(path, { method: 'HEAD' });
          if (resp.ok) {
            const cl = parseInt(resp.headers.get('content-length') || '0', 10);
            // Somente usa se for vídeo real (> 50KB, evitando arquivos de teste provisórios)
            if (cl > 50000) {
              setVideoSrc(path);
              onVideoLoaded?.();
              return;
            }
          }
        } catch {
          // segue
        }
      }
      setVideoSrc(null);
    };

    checkStaticVideo();
  }, [exercise.id, exercise.videoUrl, exercise.videoNumber]);

  // Controles do reprodutor
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (!isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  const youtubeEmbedUrl = videoSrc ? getYouTubeEmbedUrl(videoSrc) : null;
  const driveEmbedUrl = videoSrc ? getGoogleDriveEmbedUrl(videoSrc) : null;

  return (
    <div className={`relative bg-slate-950 rounded-2xl overflow-hidden flex flex-col justify-center select-none group border border-slate-900 ${className}`}>
      
      {/* SE FOR VÍDEO DO YOUTUBE */}
      {youtubeEmbedUrl ? (
        <div className="relative w-full h-full min-h-[260px] overflow-hidden flex items-center justify-center bg-black">
          <iframe
            src={youtubeEmbedUrl}
            title={exercise.name}
            className="w-full h-full min-h-[260px] border-0 scale-[1.14] origin-center transition-transform duration-300 ease-out"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : driveEmbedUrl ? (
        // SE FOR VÍDEO DO GOOGLE DRIVE (COM CORTE SUAVE DAS BORDAS PARA OCULTAR MARCAS D'ÁGUA)
        <div className="relative w-full h-full min-h-[260px] overflow-hidden flex items-center justify-center bg-black">
          <iframe
            src={driveEmbedUrl}
            title={exercise.name}
            className="w-full h-full min-h-[260px] border-0 scale-[1.14] origin-center transition-transform duration-300 ease-out"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          {/* MÁSCARA DISCRETA NO CANTO INFERIOR DIREITO PARA OCULTAR MARCAS D'ÁGUA */}
          <div className="absolute bottom-0 right-0 w-24 h-10 pointer-events-none bg-gradient-to-t from-black/80 to-transparent z-10" />
        </div>
      ) : videoSrc ? (
        // SE FOR VÍDEO MP4 DIRETO
        <div className="relative w-full h-full min-h-[260px] overflow-hidden flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay={autoPlay}
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            className="w-full h-full cursor-pointer min-h-[260px] object-cover scale-[1.14] origin-center transition-transform duration-300 ease-out"
            onClick={togglePlay}
          />

          {/* BOTÃO CENTRAL DE PLAY QUANDO PAUSADO */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all cursor-pointer transform hover:scale-105"
            >
              <Play size={28} className="ml-1 fill-white" />
            </button>
          )}

          {/* BARRA DE CONTROLES DO VÍDEO */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 pt-6 z-20 space-y-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-white/80 shrink-0">
                {formatDuration(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <span className="text-[10px] font-mono font-bold text-white/60 shrink-0">
                {formatDuration(duration)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-rose-500 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                <span className="text-[10px] font-bold text-slate-300">
                  {exercise.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // CARD ACOLHEDOR CASO O VÍDEO AINDA NÃO ESTEJA VINCULADO
        <div className="p-6 text-center space-y-3 max-w-sm my-auto mx-auto">
          <div className="w-14 h-14 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
            <Video size={24} />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full">
              Aula Guiada
            </span>
            <h4 className="text-sm font-black text-white mt-1">{exercise.name}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {exercise.primaryBenefit}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
            <Clock size={13} className="text-rose-400" />
            <span>{exercise.recommendedDuration}</span>
          </div>
        </div>
      )}

    </div>
  );
};
