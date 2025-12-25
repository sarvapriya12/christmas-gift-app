import treeImg from '../assets/tree.png'; 

export default function ChristmasTree() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[70vh]">
      {/* The Tree Image - Removed 'animate-float' to stop motion */}
      <img 
        src={treeImg} 
        alt="Christmas Tree" 
        /* Removed animate-float from the className below */
        className="h-full w-auto object-contain drop-shadow-[0_0_50px_rgba(34,197,94,0.4)]"
      />

      {/* Star on top - Kept animate-pulse for a subtle glow, or remove it to stop all movement */}
      <div className="absolute top-0 transform -translate-y-1/2">
        <span className="text-6xl md:text-8xl drop-shadow-[0_0_20px_rgba(253,224,71,1)]">⭐</span>
      </div>
      
      {/* Ground Glow */}
      <div className="absolute bottom-0 w-[120%] h-20 bg-green-900/20 blur-[80px] rounded-full -z-10" />
    </div>
  );
}