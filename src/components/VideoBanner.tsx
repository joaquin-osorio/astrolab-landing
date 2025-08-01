import React from "react";

export interface VideoBannerProps {
  src: string;
  heightClass?: string;
  poster?: string;
}

export default function VideoBanner({
  src,
  heightClass = "h-64 md:h-96",
  poster,
}: VideoBannerProps) {
  return (
    <div className={`w-full overflow-hidden relative ${heightClass}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
