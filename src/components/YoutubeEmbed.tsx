"use client";
import React, { useEffect, useMemo, useState } from "react";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  poster?: string; // optional custom poster; if provided, no automatic fallback/upgrade is attempted
}

export default function YouTubeEmbed({
  url,
  title = "YouTube video",
  poster,
}: YouTubeEmbedProps) {
  // 1) Extract video ID (supports youtu.be and youtube.com/watch?v=)
  const videoId = useMemo(() => {
    const m = url.match(
      /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return m ? m[1] : "";
  }, [url]);

  const [play, setPlay] = useState(false);

  // Start with HQ to keep SSR and client in sync and avoid hydration mismatches
  const [thumbSrc, setThumbSrc] = useState<string>(() =>
    poster || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "")
  );

  useEffect(() => {
    setPlay(false);
    setThumbSrc(
      poster || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "")
    );
  }, [videoId, poster]);

  // Poster upgrade on the client (try maxres → then sd → else stay on hq)
  useEffect(() => {
    if (poster || !videoId) return;

    const trySD = () => {
      const sd = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
      const img2 = new window.Image();
      img2.onload = () => {
        if (img2.naturalWidth >= 640) setThumbSrc(sd);
      };
      img2.src = sd;
    };

    const candidate = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    const img = new window.Image();
    img.onload = () => {
      if (img.naturalWidth >= 720) setThumbSrc(candidate);
      else trySD();
    };
    img.onerror = trySD;
    img.src = candidate;
  }, [videoId, poster]);

  // Early return if no valid ID
  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
      {!play ? (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label={`Reproducir ${title}`}
          className="group relative block h-full w-full"
        >
          {thumbSrc ? (
            <img
              src={thumbSrc}
              alt={title}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )}

          {/* Play button overlay */}
          <span className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-black/70 transition-colors group-hover:bg-red-600">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      ) : (
        <iframe
          className="block h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
