import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <button 
      onClick={toggle} 
      className="fixed bottom-6 right-6 z-50 p-4 bg-purple-900/30 backdrop-blur-xl rounded-full border-2 border-purple-300/30 text-purple-200 hover:scale-110 hover:bg-purple-800/40 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
    >
      <audio ref={audioRef} loop src="https://www.chosic.com/wp-content/uploads/2021/11/We-Wish-You-A-Merry-Christmas.mp3" />
      {playing ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}