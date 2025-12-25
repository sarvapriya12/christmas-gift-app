import { motion } from 'framer-motion';
import giftImg from '../assets/gift-box.png';

interface GiftProps {
  onClick: () => void;
  label: string;
  color: string;
}

export default function GiftBox({ onClick,color }: GiftProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1, y: -10 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center cursor-pointer group"
    >
      <div className="relative">
        <div 
          className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: color }}
        />
        <img 
          src={giftImg} 
          alt="Gift Box" 
          className="h-[10.5vh] w-auto object-contain relative z-10 drop-shadow-lg" 
        />
      </div>
      {/* Label removed so it is hidden until clicked */}
    </motion.div>
  );
}