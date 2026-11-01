import { motion } from "motion/react";
import { Award, ArrowRight } from "lucide-react";
import { CONFIG } from "../data";
import NewspaperCutout from "./NewspaperCutout";

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-12 pt-[100px] pb-16 overflow-hidden bg-transparent select-none"
    >
      {/* Subtle Mesh Grid */}
      <div className="absolute inset-0 hero-grid-mesh opacity-20 pointer-events-none z-0" />
      
      {/* Golden Radial Glow */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[150px] sm:h-[300px] rounded-full bg-radial from-brand-gold/15 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Editorial Newspaper Cutouts Flanking the Hero Section */}
      <div className="block absolute top-28 sm:top-24 lg:top-[22%] left-1 sm:left-3 md:left-6 xl:left-8 2xl:left-14 z-0 lg:z-10 opacity-85 sm:opacity-90 lg:opacity-100">
        <NewspaperCutout
          variant="scales-of-justice"
          rotation="-rotate-6 sm:-rotate-3"
          tapePosition="top"
          label="INT'L LAW // CDA"
        />
      </div>
      <div className="block absolute top-32 sm:top-28 lg:top-[20%] right-1 sm:right-3 md:right-6 xl:right-8 2xl:right-14 z-0 lg:z-10 opacity-85 sm:opacity-90 lg:opacity-100">
        <NewspaperCutout
          variant="vintage-newsprint"
          rotation="rotate-6 sm:rotate-3"
          tapePosition="top-right"
          label="PRESS ARCHIVE"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col items-center z-10"
      >
        {/* Dynamic Tag */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-widest text-brand-gold uppercase mb-6 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
          Season 1 · {CONFIG.dates}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-syne font-extrabold text-[40px] sm:text-[68px] md:text-[88px] leading-[0.95] text-brand-text tracking-tight mb-4"
        >
          Council of <br />
          <span className="text-brand-gold bg-gradient-to-r from-brand-gold to-brand-gold2 bg-clip-text text-transparent">Diplomatic</span> Affairs
        </motion.h1>

        {/* Sub-Tag */}
        <motion.p
          variants={itemVariants}
          className="font-syne text-[11px] sm:text-[13px] tracking-[0.25em] text-brand-muted uppercase mb-5 font-semibold"
        >
          Model United Nations Conference
        </motion.p>

        {/* Sub-description */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-brand-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8"
        >
          Diplomacy isn't old school — it's the new flex. Join the most ambitious young minds for interactive simulations and high-stakes global debates that actually matter.
        </motion.p>

        {/* CTA Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <button
            onClick={onOpenRegister}
            className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-black font-syne font-extrabold text-[13px] tracking-wider uppercase px-8 py-4 rounded cursor-pointer shadow-xl shadow-brand-gold/5 transition-all duration-300 hover:-translate-y-1 group"
          >
            <Award className="w-4 h-4" />
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#about"
            className="flex items-center justify-center font-syne font-semibold text-[13px] text-brand-text tracking-wider uppercase border border-brand-border2 hover:border-brand-gold hover:text-brand-gold px-8 py-4 rounded transition-all duration-300"
          >
            Explore
          </a>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 w-full max-w-3xl border-t border-brand-border/40 pt-10 px-6 sm:px-0"
        >
          {[
            { value: "7+", label: "Committees" },
            { value: "200+", label: "Delegates" },
            { value: "3 Days", label: "Duration" },
            { value: "∞", label: "Impact" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-syne font-extrabold text-2xl sm:text-4xl text-brand-gold leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="font-sans font-medium text-[10px] sm:text-xs text-brand-muted tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
