import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, ShieldAlert } from "lucide-react";
import { TEAM_DATA } from "../data";
import { TeamMember } from "../types";
import NewspaperCutout from "./NewspaperCutout";

export default function TeamList() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (idx: number) => {
    // For mobile or click-based toggle
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-brand-bg2/40 backdrop-blur-[1px] px-6 lg:px-12 relative overflow-hidden border-b border-brand-border/20">
      {/* Editorial Newspaper Cutouts Flanking the Team Section */}
      <div className="block absolute left-1 sm:left-3 md:left-6 xl:left-8 2xl:left-12 top-24 sm:top-36 z-0 opacity-80 sm:opacity-85 lg:opacity-95">
        <NewspaperCutout
          variant="assembly-crowd"
          rotation="rotate-6 sm:rotate-2"
          tapePosition="top"
          label="SECRETARIAT '26"
        />
      </div>
      <div className="block absolute right-1 sm:right-3 md:right-6 xl:right-8 2xl:right-12 top-48 sm:top-56 z-0 opacity-80 sm:opacity-85 lg:opacity-95">
        <NewspaperCutout
          variant="editorial-brain"
          rotation="-rotate-6 sm:-rotate-3"
          tapePosition="pin"
          label="STRATEGIC DESK"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 text-left flex flex-col">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-gold uppercase mb-3">
            The Team
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-brand-text mb-6">
            The People Behind It
          </h2>
          <div className="w-10 h-[3px] bg-brand-gold mb-6 rounded" />
          <p className="font-sans font-light text-brand-muted text-[15px] leading-relaxed">
            Seasoned, passionate, and deeply dedicated to curating a flawless experience down to the finest detail. Meet your executive board for Council of Diplomatic Affairs Season 1.
          </p>
        </div>

        {/* Members Grid with 3D Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className="h-[360px] cursor-pointer group [perspective:1000px] text-center"
              onClick={() => handleCardClick(idx)}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              {/* Double sided cardboard box wrapper */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
                style={{
                  transform: flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Panel card face */}
                <div className="absolute inset-0 bg-brand-surface/75 backdrop-blur-md border border-brand-border/60 hover:border-brand-gold/40 rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] shadow-lg transition-colors">
                  
                  {/* Photo or Initials frame */}
                  <div className="w-28 h-28 bg-gradient-to-br from-brand-surface to-brand-bg3 border-2 border-brand-gold rounded-full mb-6 flex items-center justify-center font-syne font-extrabold text-2xl text-brand-gold shadow-lg shadow-brand-gold/15 relative overflow-hidden select-none">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    ) : (
                      member.initials
                    )}
                  </div>

                  <h3 className="font-syne font-bold text-lg text-brand-text mb-1 tracking-wide leading-tight">
                    {member.name}
                  </h3>
                  <div className="font-sans text-[13px] font-light text-brand-muted uppercase tracking-widest">
                    {member.role}
                  </div>

                  {/* Visual Hint */}
                  <div className="absolute bottom-5 font-syne font-bold text-[9px] tracking-widest text-brand-dim uppercase select-none group-hover:text-brand-gold/80 transition-colors">
                    Hover or Tap to view Bio &rarr;
                  </div>
                </div>

                {/* Back Panel card face (rotated-Y) */}
                <div 
                  className="absolute inset-0 bg-brand-surface/85 backdrop-blur-md border border-brand-gold/60 rounded-xl p-6 flex flex-col items-center justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl"
                >
                  <div>
                    <h4 className="font-syne font-bold text-[13px] text-brand-gold uppercase tracking-widest mb-4 border-b border-brand-border/40 pb-2">
                      About {member.name.split(" ")[0]}
                    </h4>
                    <p className="font-sans font-light text-brand-muted text-[13px] leading-relaxed text-center px-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Action buttons */}
                  <div className="flex gap-3 justify-center pt-4 border-t border-brand-border/40 w-full select-none">
                    <a
                      href={member.ig}
                      target={member.ig !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      title="Instagram Profile"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 flex items-center justify-center bg-brand-bg border border-brand-border hover:border-brand-gold hover:text-black hover:bg-brand-gold text-brand-gold rounded-lg transition-colors cursor-pointer"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={member.ln}
                      target={member.ln !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      title="LinkedIn Portfolio"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 flex items-center justify-center bg-brand-bg border border-brand-border hover:border-brand-gold hover:text-black hover:bg-brand-gold text-brand-gold rounded-lg transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      title="Send E-mail"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 flex items-center justify-center bg-brand-bg border border-brand-border hover:border-brand-gold hover:text-black hover:bg-brand-gold text-brand-gold rounded-lg transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
