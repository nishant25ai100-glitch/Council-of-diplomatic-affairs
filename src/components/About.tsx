import { motion } from "motion/react";
import { BrainCircuit, Globe, Users, Trophy, ChevronRight } from "lucide-react";
import NewspaperCutout from "./NewspaperCutout";

interface AboutProps {
  onOpenRegister: () => void;
}

export default function About({ onOpenRegister }: AboutProps) {
  const cardItems = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-brand-gold" />,
      title: "Circuit Veterans",
      desc: "Chaired by experienced circuit head delegates focused on rigorous procedure and fair moderation."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-gold" />,
      title: "Targeted Agendas",
      desc: "Specialized tracks spanning Indian parliamentary policy to multilateral crisis diplomacy."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      title: "National Network",
      desc: "Compete and collaborate with delegates from schools and universities nationwide."
    },
    {
      icon: <Trophy className="w-6 h-6 text-brand-gold" />,
      title: "Practical Training",
      desc: "Direct practice in resolution drafting, bloc negotiation, and rapid crisis response."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-bg/40 backdrop-blur-[1px] px-6 lg:px-12 relative overflow-hidden border-b border-brand-border/20">
      {/* Editorial Newspaper Cutouts Flanking the About Section */}
      <div className="block absolute left-1 sm:left-3 md:left-6 xl:left-8 2xl:left-12 bottom-6 sm:bottom-12 z-0 opacity-80 sm:opacity-85 lg:opacity-95">
        <NewspaperCutout
          variant="assembly-crowd"
          rotation="rotate-3 sm:rotate-2"
          tapePosition="top"
          label="CIVIC MOVEMENT"
        />
      </div>
      <div className="block absolute right-1 sm:right-3 md:right-6 xl:right-8 2xl:right-12 top-6 sm:top-14 z-0 opacity-80 sm:opacity-85 lg:opacity-95">
        <NewspaperCutout
          variant="editorial-brain"
          rotation="-rotate-6 sm:-rotate-3"
          tapePosition="pin"
          label="CRISIS ANALYSIS"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-left"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-gold uppercase mb-3">
            Who We Are
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-brand-text mb-6 leading-tight">
            Substance Over Scripted Debate.<br />
            <span className="text-brand-gold bg-gradient-to-r from-brand-gold to-brand-gold2 bg-clip-text text-transparent">Realistic Diplomacy.</span>
          </h2>
          <div className="w-10 h-[3px] bg-brand-gold mb-8 rounded" />
          
          <div className="font-sans text-brand-muted text-[15px] leading-relaxed space-y-4 font-light">
            <p>
              Council of Diplomatic Affairs is a Model United Nations conference focused on realistic committee dynamics and thorough research.
            </p>
            <p>
              We prioritize genuine parliamentary procedure, unscripted crisis management, and policy that holds up under scrutiny. Whether you are stepping into committee for the first time or returning with years of circuit experience, CDA is built to challenge your preparation and speaking.
            </p>
            <p>
              Every committee agenda reflects active diplomatic tensions, moderated by an Executive Board drawn directly from the national circuit.
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 text-brand-gold font-syne font-bold text-xs tracking-widest uppercase hover:text-brand-gold2 transition-colors cursor-pointer group"
            >
              Be Part of It
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-surface/75 backdrop-blur-md border border-brand-border/60 hover:border-brand-gold/40 p-6 rounded-lg transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="w-12 h-12 bg-brand-bg/50 rounded-lg flex items-center justify-center border border-brand-border/40 group-hover:border-brand-gold/30 transition-colors duration-300 mb-4 shadow-inner">
                {item.icon}
              </div>
              <h4 className="font-syne font-bold text-[15px] text-brand-text mb-2 tracking-wide uppercase">
                {item.title}
              </h4>
              <p className="font-sans font-light text-brand-muted text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
