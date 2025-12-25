import { ArrowRight, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";
import { LiquidBackground } from "./WavyBlob";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Wavy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8154EF] via-[#6366f1] to-[#0a0e27]" />
      
      {/* Animated wavy blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent)',
          filter: 'blur(80px)'
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-30"
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%"
          ],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent)',
          filter: 'blur(80px)'
        }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3">
                <animate attributeName="stop-color" values="white; #8154EF; white" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2">
                <animate attributeName="stop-color" values="#6366f1; white; #6366f1" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-gradient)" />
        </svg>
      </div>
      
      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon with animated glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Sparkles className="w-10 h-10 text-white" />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)' }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 800 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Start Building <span className="relative inline-block">
              Today
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0,5 Q75,0 150,5 T300,5"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Sansation, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Whether you're training large models, deploying AI-powered applications, or running business-critical systems — CloudPe gives you the infrastructure to move faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-5 bg-white text-black rounded-xl transition-all shadow-2xl overflow-hidden flex items-center justify-center gap-3 group"
              style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 700 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white via-purple-100 to-white"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="relative z-10 text-lg">Deploy GPU Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border-2 border-white/40 text-white rounded-xl transition-all backdrop-blur-sm hover:bg-white/10 text-lg"
              style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 700 }}
            >
              Start with Compute
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/90"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            {[
              { icon: Check, text: "$100 free credits" },
              { icon: Check, text: "No credit card required" },
              { icon: Check, text: "Deploy in 60 seconds" }
            ].map((item, idx) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                <motion.div 
                  className="w-6 h-6 rounded-full flex items-center justify-center relative"
                  style={{ 
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.div>
                <span className="text-base">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}