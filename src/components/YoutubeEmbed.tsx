import React, { useMemo } from "react";

interface YouTubeEmbedProps {
  url: string;
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps): JSX.Element {
  // Extrae el videoId de la URL (funciona con URLs estándar y con parámetros)
  const videoId = useMemo(() => {
    const match = url.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : "";
  }, [url]);

  // Si no se pudo extraer, no renderiza nada
  if (!videoId) return null;

  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
