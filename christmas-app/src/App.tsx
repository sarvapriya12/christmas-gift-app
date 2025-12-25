import { useState,  useMemo } from 'react';
import ChristmasTree from './components/ChristmasTree';
import GiftBox from './components/GiftBox';
import MessageModal from './components/MessageModal';
import Snowman from './components/Snowman';
import backgroundImage from './assets/backgroundImage.jpg';

const GIFTS = [
  { 
    title: "My Sweetest Miracle", 
    text: "You have been the miracle that found me in the most unexpected way, appearing just when I didn't know I needed you. I promise to always be here to support you and hold you close forever.", 
    color: "#e879f9", x: -420, y: 160 
  },
  { 
    title: "My Heart’s Joy", 
    text: "You have been the joy that fills my heart with a smile every single morning. I love you so much, and I am always right here by your side.", 
    color: "#a78bfa", x: -330, y: 200 
  },
  { 
    title: "My Quiet Peace", 
    text: "You have been the peace I find whenever the world feels a little too loud. Lean on me whenever you are tired; I will always keep you safe.", 
    color: "#818cf8", x: -240, y: 230 
  },
  { 
    title: "My Eternal Love", 
    text: "You have been the love that changed my life and made it so much better. I promise to always care for you and be your biggest cheerleader.", 
    color: "#c084fc", x: -150, y: 250 
  },
  { 
    title: "My Sweet Admiration", 
    text: "You have been the one I admire more and more every single day. I promise to always be your biggest fan and to always cheer you on.", 
    color: "#ddd6fe", x: -60, y: 260 
  },
  { 
    title: "My Beautiful Hope", 
    text: "You have been the hope that makes me so excited for our future together. We will face everything together, hand in hand, forever.", 
    color: "#a78bfa", x: 60, y: 260 
  },
  { 
    title: "My Cozy Warmth", 
    text: "You have been the warmth that keeps my heart feeling safe and cozy. I am always here to hold you close and protect you from the cold.", 
    color: "#93c5fd", x: 150, y: 250 
  },
  { 
    title: "My Sweetest Comfort", 
    text: "You have been the comfort I need whenever the world feels too heavy. Please lean on me; I will always be the shoulder you need.", 
    color: "#c084fc", x: 240, y: 230 
  },
  { 
    title: "My Dearest Friend", 
    text: "You have been my best friend and my favorite person to talk to. I am always here for you, to listen and to hold you close.", 
    color: "#818cf8", x: 330, y: 200 
  },
  { 
    title: "My Silent Strength", 
    text: "You have been the quiet strength that helps me stand tall every day. I am always here to support you in everything you do, always.", 
    color: "#e879f9", x: 420, y: 160 
  },
];

export default function App() {
  const [msg, setMsg] = useState<typeof GIFTS[0] | null>(null);

  const snowflakes = useMemo(() => 
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, 
      duration: Math.random() * 5 + 7,
      delay: Math.random() * -20,
      size: Math.random() * 10 + 5,
    })), []);

  return (
    <div 
      className="h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 1. THE BLUR & DARKNESS OVERLAY 
          'backdrop-blur-md' blurs the backgroundImage behind it.
      */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0 pointer-events-none" />

      <style>{`
        @keyframes fallFull {
          0% { transform: translateY(-10vh) translateX(0); }
          100% { transform: translateY(110vh) translateX(20px); }
        }
        @keyframes floatBox {
          0%, 100% { margin-top: 0px; }
          50% { margin-top: -15px; }
        }
        .snow-flake-full {
          position: absolute;
          top: -5vh;
          color: white;
          pointer-events: none;
          animation: fallFull linear infinite;
        }
        .box-floating {
          animation: floatBox 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Snowfall Container */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-40 overflow-hidden">
        {snowflakes.map((flake) => (
          <div key={flake.id} className="snow-flake-full"
            style={{
              left: `${flake.left}vw`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              fontSize: `${flake.size}px`,
              opacity: 0.6,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <main className="relative z-50 w-full h-full flex flex-col items-center justify-center">
        <ChristmasTree />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {GIFTS.map((gift, i) => (
            <div 
              key={i} 
              className="absolute pointer-events-auto transition-all duration-700 box-floating"
              style={{ 
                transform: `translate(${gift.x}px, ${gift.y}px)`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <GiftBox onClick={() => setMsg(gift)} color={gift.color} label={gift.title} />
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-4 right-4 z-[60]">
        <Snowman />
      </div>

      {msg && <MessageModal title={msg.title} text={msg.text} onClose={() => setMsg(null)} />}
    </div>
  );
}