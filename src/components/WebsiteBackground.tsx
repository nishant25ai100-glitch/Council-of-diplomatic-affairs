export default function WebsiteBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        PRIMARY VIEWPORT BACKGROUND: PUPPETEER & PRESS
        - Covers entire website viewport: fixed inset-0
        - background-size: cover, background-position: center
        - Locked exclusively to the Puppeteer & Press artwork
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out transform scale-[1.01]"
        style={{
          backgroundImage: "url('/assets/aistudio/2_a82ca4eb.png')",
          filter: "brightness(0.72) contrast(1.05) saturate(0.95)"
        }}
      />

      {/* 
        Dark Theme Translucent Overlay:
        Maintains sufficient contrast for text, cards, and interactive controls
        while keeping the artwork clearly visible in the background
      */}
      <div className="absolute inset-0 bg-[#080a0f]/65 backdrop-blur-[1px]" />
      
      {/* Soft gradient overlay to deepen reading zones and smooth section transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f]/40 via-[#080a0f]/60 to-[#080a0f]/85 mix-blend-multiply" />
      
      {/* Subtle warm golden ambient radial glow to complement the diplomat aesthetic */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[720px] h-[450px] bg-brand-gold/8 rounded-full blur-[120px]" />
    </div>
  );
}
