import { motion, AnimatePresence } from 'framer-motion';

export default function MessageModal({
  title,
  text,
  onClose,
}: {
  title: string;
  text: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-950/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          /* CHANGED: flex-col and justify-center to stack items vertically.
             HEIGHT: Maintained at 380px for that compact look.
          */
          className="
            relative bg-[#E6E6FA] border-[8px] border-purple-100
            rounded-[3rem] shadow-2xl
            w-[85%] max-w-[900px] min-h-[380px]
            flex flex-col items-center justify-center
            p-8 md:p-12
            overflow-hidden
          "
        >
          {/* 1. TOP: TITLE */}
          <h2
            className="
              font-cursive font-bold text-purple-700
              leading-tight mb-2
              text-[clamp(2.5rem,4vw,4rem)]
            "
          >
            {title}
          </h2>

          {/* 2. SEPARATOR */}
          <div className="w-24 h-1 bg-purple-300 mb-6 rounded-full" />

          {/* 3. MIDDLE: PARAGRAPH TEXT */}
          <p
            className="
              font-cursive text-purple-900
              leading-relaxed mb-10
              text-[clamp(1.2rem,2vw,1.8rem)]
              max-w-[90%] text-center
              break-words
            "
          >
            {text}
          </p>

          {/* 4. BOTTOM: CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              px-12 py-3
              bg-purple-600 hover:bg-purple-700
              text-white font-bold text-2xl
              rounded-full
              shadow-lg transition-all active:scale-95
              hover:shadow-purple-500/20
            "
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}