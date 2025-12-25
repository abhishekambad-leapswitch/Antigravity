import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface WavyBlobProps {
  className?: string;
  delay?: number;
  color?: string;
}

export function WavyBlob({ className = "", delay = 0, color = "#8154EF" }: WavyBlobProps) {
  return (
    <motion.div
      className={`absolute blur-3xl ${className}`}
      animate={{
        scale: [1, 1.3, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", 
                       "70% 30% 30% 70% / 70% 70% 30% 30%",
                       "50% 50% 50% 50% / 50% 50% 50% 50%",
                       "30% 70% 70% 30% / 30% 30% 70% 70%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        background: `radial-gradient(circle, ${color}80, ${color}40, transparent)`,
      }}
    />
  );
}

export function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <WavyBlob 
        className="w-[500px] h-[500px] -top-32 -left-32" 
        color="#8154EF" 
        delay={0} 
      />
      <WavyBlob 
        className="w-[600px] h-[600px] top-1/4 -right-48" 
        color="#6366f1" 
        delay={5} 
      />
      <WavyBlob 
        className="w-[400px] h-[400px] bottom-0 left-1/4" 
        color="#9333ea" 
        delay={10} 
      />
    </div>
  );
}

interface MouseFollowBlobProps {
  color?: string;
}

export function MouseFollowBlob({ color = "#8154EF" }: MouseFollowBlobProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
        opacity: isHovering ? 0.3 : 0,
        scale: isHovering ? 1 : 0.5,
        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", 
                       "60% 40% 30% 70% / 50% 60% 40% 50%",
                       "40% 60% 70% 30% / 40% 50% 60% 50%"],
      }}
      transition={{
        x: { type: "spring", damping: 30, stiffness: 200 },
        y: { type: "spring", damping: 30, stiffness: 200 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        borderRadius: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        background: `radial-gradient(circle, ${color}60, ${color}20, transparent)`,
        filter: "blur(60px)",
      }}
    />
  );
}

interface WavyCardProps {
  children: React.ReactNode;
  className?: string;
}

export function WavyCard({ children, className = "" }: WavyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Wavy border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8154EF]/20 via-transparent to-[#6366f1]/20" />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(129, 84, 239, 0.1), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </motion.div>
  );
}

export function FloatingIsometricElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8154EF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#grad1)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-32 h-32"
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-15">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8154EF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#grad2)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 w-20 h-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8154EF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="60" height="60" fill="url(#grad3)" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>
    </div>
  );
}
