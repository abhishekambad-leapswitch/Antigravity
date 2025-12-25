import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface MetallicIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export function MetallicIcon({ icon: Icon, size = 24, className = "" }: MetallicIconProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Main metallic icon */}
      <Icon 
        size={size}
        className="relative z-10"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
          color: 'transparent',
          background: 'linear-gradient(135deg, #f0f0f0 0%, #c0c0c0 25%, #e8e8e8 50%, #a8a8a8 75%, #d0d0d0 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      />
      
      {/* Highlight shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.3) 100%)',
          mixBlendMode: 'overlay',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Bottom shadow for depth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 blur-sm opacity-50"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.5), transparent)',
        }}
      />
    </div>
  );
}

interface MetallicIconWrapperProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  animate?: boolean;
}

export function MetallicIconWrapper({ icon: Icon, size = 48, className = "", animate = true }: MetallicIconWrapperProps) {
  const iconSize = size * 0.5; // Icon is 50% of container
  
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      whileHover={animate ? { scale: 1.1, rotate: 5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Metallic background circle */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #b8b8b8 25%, #e0e0e0 50%, #a0a0a0 75%, #d8d8d8 100%)',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.8),
            inset 0 -1px 0 rgba(0,0,0,0.3),
            0 4px 8px rgba(0,0,0,0.3),
            0 0 0 1px rgba(0,0,0,0.1)
          `,
        }}
      />
      
      {/* Shine overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        animate={animate ? {
          background: [
            'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
            'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.4) 100%)',
            'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
          ],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
        }}
      />
      
      {/* Icon with dark color for contrast */}
      <Icon 
        size={iconSize}
        className="relative z-10"
        style={{
          color: '#1a1a1a',
          filter: 'drop-shadow(0 1px 2px rgba(255,255,255,0.5))',
        }}
      />
      
      {/* Bottom glow */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-3 blur-md opacity-40"
        style={{
          background: 'radial-gradient(ellipse, rgba(192,192,192,0.8), transparent)',
        }}
      />
    </motion.div>
  );
}
