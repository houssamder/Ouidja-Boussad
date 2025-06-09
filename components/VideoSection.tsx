"use client";
import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-10 bg-gradient-to-br from-primary-50/60 via-secondary-50/30 to-accent-50/60 dark:from-neutral-900/40 dark:via-neutral-800/20 dark:to-neutral-900/40">
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-center gradient-text">
        Entretien avec OUIDJA Boussad (Da Belqasem)
      </h2>
      <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent-200 dark:border-neutral-700 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
        {/* Always render the video */}
        <video
          ref={videoRef}
          src="/Ahiwec 2.mp4"
          controls={false}
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            display: videoError ? "none" : "block",
          }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onError={() => setVideoError(true)}
          poster="/dadda.webp"
        />
        {/* Overlay image if not playing or error */}
        {(!isPlaying || videoError) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
            <img
              src="/dadda.webp"
              alt="Aperçu vidéo"
                 className="w-full h-full object-cover object-top absolute inset-0"
            />
          </div>
        )}
        {/* Always render the button at the same place */}
        <button
          onClick={handlePlayPause}
          disabled={videoError}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-accent-500 hover:bg-accent-600 text-white rounded-full px-8 py-3 font-bold shadow-lg transition text-lg z-20"
          aria-label={isPlaying ? "Pause la vidéo" : "Lire la vidéo"}
        >
          {isPlaying ? "Pause" : "Lire"}
        </button>
      </div>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-center max-w-2xl">
        Découvrez l’univers poétique à travers cette vidéo d’introduction.
      </p>
    </section>
  );
}