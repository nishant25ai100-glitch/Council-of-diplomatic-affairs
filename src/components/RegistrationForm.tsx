import { AnimatePresence, motion } from "motion/react";
import { Landmark, Sparkles, X } from "lucide-react";

interface RegistrationProps {
  initialSelectedCommittee?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationForm({
  isOpen,
  onClose,
}: RegistrationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Announcement modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative bg-brand-surface w-full max-w-lg rounded-xl border border-brand-border2 p-8 sm:p-10 shadow-2xl z-10 text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close announcement"
              className="absolute top-5 right-5 p-1 text-brand-muted hover:text-brand-gold rounded transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Decorative icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center">
              <Landmark className="w-8 h-8 text-brand-gold" />
            </div>

            {/* Heading */}
            <div className="inline-flex items-center gap-2 text-[10px] font-syne font-bold uppercase tracking-[0.25em] text-brand-gold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              CDA MUN 2026
            </div>

            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-brand-text uppercase tracking-wide mb-4">
              Registrations
              <span className="block text-brand-gold mt-1">
                Opening Soon
              </span>
            </h2>

            {/* Description */}
            <p className="font-sans font-light text-sm text-brand-muted leading-relaxed max-w-sm mx-auto mb-7">
              The Council of Diplomatic Affairs is preparing for an
              extraordinary diplomatic experience. Delegate registrations
              will open shortly.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 border border-brand-gold/30 bg-brand-gold/5 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="font-syne font-bold text-[10px] uppercase tracking-widest text-brand-gold">
                Stay Tuned for Updates
              </span>
            </div>

            {/* Close action */}
            <div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-gold2 text-black font-syne font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
              >
                Explore CDA MUN
              </button>
            </div>

            <div className="mt-7 pt-5 border-t border-brand-border/50">
              <p className="font-sans text-[9px] text-brand-dim uppercase tracking-[0.2em]">
                Council of Diplomatic Affairs
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}