import React from "react";

export type CutoutVariant =
  | "scales-of-justice"
  | "vintage-newsprint"
  | "assembly-crowd"
  | "editorial-brain"
  | "megaphone-press"
  | "money-clutch";

interface NewspaperCutoutProps {
  variant: CutoutVariant;
  className?: string;
  rotation?: string;
  tapePosition?: "top" | "top-left" | "top-right" | "pin" | "none";
  label?: string;
  opacity?: string;
}

export default function NewspaperCutout({
  variant,
  className = "",
  rotation = "rotate-0",
  tapePosition = "top",
  label,
  opacity = "opacity-90 hover:opacity-100"
}: NewspaperCutoutProps) {
  // Coordinates based on the user's uploaded collage artwork (/assets/aistudio/961237114268700755_9a5b4632.jpg)
  const variantConfig: Record<
    CutoutVariant,
    {
      bgPosition: string;
      bgSize: string;
      defaultLabel: string;
      clipPath: string;
    }
  > = {
    "scales-of-justice": {
      bgPosition: "32% 31%",
      bgSize: "310% auto",
      defaultLabel: "INT'L LAW // DIPLOMACY",
      clipPath:
        "polygon(2% 4%, 18% 1%, 38% 3%, 62% 1%, 82% 3%, 98% 1%, 97% 24%, 100% 48%, 96% 72%, 99% 96%, 82% 98%, 58% 96%, 36% 99%, 18% 97%, 3% 98%, 1% 74%, 4% 50%, 1% 26%)"
    },
    "vintage-newsprint": {
      bgPosition: "88% 3%",
      bgSize: "280% auto",
      defaultLabel: "PRESS ARCHIVE // '26",
      clipPath:
        "polygon(0% 1%, 22% 0%, 46% 2%, 70% 0%, 92% 2%, 100% 0%, 97% 22%, 100% 50%, 96% 74%, 100% 98%, 78% 97%, 52% 100%, 28% 97%, 10% 99%, 0% 96%, 3% 72%, 0% 48%, 3% 24%)"
    },
    "assembly-crowd": {
      bgPosition: "18% 92%",
      bgSize: "290% auto",
      defaultLabel: "CIVIC MOVEMENT // CDA",
      clipPath:
        "polygon(3% 2%, 24% 0%, 48% 3%, 72% 1%, 96% 3%, 99% 26%, 96% 54%, 99% 78%, 97% 98%, 76% 96%, 52% 99%, 28% 97%, 4% 99%, 1% 72%, 4% 48%, 1% 22%)"
    },
    "editorial-brain": {
      bgPosition: "64% 51%",
      bgSize: "320% auto",
      defaultLabel: "CRISIS ANALYSIS",
      clipPath:
        "polygon(2% 3%, 26% 1%, 56% 3%, 82% 0%, 98% 3%, 99% 32%, 96% 64%, 98% 97%, 74% 99%, 46% 96%, 18% 98%, 1% 95%, 4% 65%, 1% 32%)"
    },
    "megaphone-press": {
      bgPosition: "10% 52%",
      bgSize: "310% auto",
      defaultLabel: "PRESS COMMUNIQUÉ",
      clipPath:
        "polygon(2% 2%, 26% 0%, 54% 3%, 78% 1%, 98% 2%, 96% 28%, 100% 56%, 97% 84%, 96% 98%, 72% 96%, 44% 99%, 18% 97%, 2% 97%, 0% 68%, 3% 36%)"
    },
    "money-clutch": {
      bgPosition: "88% 82%",
      bgSize: "300% auto",
      defaultLabel: "ECONOMIC SUMMIT",
      clipPath:
        "polygon(3% 1%, 25% 3%, 52% 1%, 80% 3%, 97% 0%, 99% 28%, 96% 58%, 98% 97%, 75% 98%, 48% 96%, 22% 99%, 2% 96%, 4% 68%, 1% 34%)"
    }
  };

  const config = variantConfig[variant];
  const displayLabel = label || config.defaultLabel;

  return (
    <div
      className={`pointer-events-none select-none transition-all duration-300 ${opacity} ${rotation} ${className}`}
      style={{
        filter: "drop-shadow(0 10px 22px rgba(0, 0, 0, 0.7))"
      }}
    >
      {/* Newspaper Card Container */}
      <div
        className="relative w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-52 lg:w-48 lg:h-64 bg-[#e9e3d5] p-[3px] border border-[#d3c9b6]/60"
        style={{
          clipPath: config.clipPath
        }}
      >
        {/* Newspaper aged paper texture & warm ink tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f5eb]/20 via-transparent to-[#282117]/30 mix-blend-multiply pointer-events-none z-10" />

        {/* High-fidelity background crop of the user's uploaded image */}
        <div
          className="w-full h-full bg-[#dfd7c8]"
          style={{
            backgroundImage: `url('/assets/aistudio/961237114268700755_9a5b4632.jpg')`,
            backgroundPosition: config.bgPosition,
            backgroundSize: config.bgSize,
            backgroundRepeat: "no-repeat",
            filter: "contrast(1.1) brightness(0.96) saturate(0.95)"
          }}
        />

        {/* Newsprint stamp label */}
        {displayLabel && (
          <div className="absolute bottom-1.5 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 z-20 flex justify-center">
            <span className="font-mono text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-wider text-[#141210] bg-[#f5ede0]/95 backdrop-blur-xs px-1.5 py-0.5 border border-[#30281e]/30 shadow-xs truncate max-w-full">
              {displayLabel}
            </span>
          </div>
        )}
      </div>

      {/* Simulated physical archival washi tape or pushpin */}
      {tapePosition === "top" && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3 sm:h-4 bg-amber-100/40 border-y border-amber-200/50 backdrop-blur-[1px] rotate-[-2deg] shadow-xs pointer-events-none z-30"
          style={{ mixBlendMode: "screen" }}
        />
      )}
      {tapePosition === "top-left" && (
        <div
          className="absolute -top-1.5 -left-1.5 w-8 sm:w-12 h-2.5 sm:h-3.5 bg-amber-100/40 border-y border-amber-200/50 backdrop-blur-[1px] rotate-[-35deg] shadow-xs pointer-events-none z-30"
          style={{ mixBlendMode: "screen" }}
        />
      )}
      {tapePosition === "top-right" && (
        <div
          className="absolute -top-1.5 -right-1.5 w-8 sm:w-12 h-2.5 sm:h-3.5 bg-amber-100/40 border-y border-amber-200/50 backdrop-blur-[1px] rotate-[35deg] shadow-xs pointer-events-none z-30"
          style={{ mixBlendMode: "screen" }}
        />
      )}
      {tapePosition === "pin" && (
        <div className="absolute -top-2 right-2 sm:right-3 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-red-600 border border-red-300 shadow-md shadow-black/50 z-30 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-white/80" />
        </div>
      )}
    </div>
  );
}
