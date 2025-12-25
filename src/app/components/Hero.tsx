import { motion } from "motion/react";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { LiquidBackground, FloatingIsometricElements } from "./WavyBlob";
import dashboardImage from "../../assets/dashboard.png";
import { MetallicIcon } from "./MetallicIcon";

export function Hero() {
  const gpuTypes = ["H200", "A100", "L4", "L40S", "V100", "T4"];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0e27] via-black to-black">
      {/* Wavy Liquid Background */}
      <LiquidBackground />
      <FloatingIsometricElements />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #8154EF 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8154EF]/10 to-[#6366f1]/10 border border-[#8154EF]/20 rounded-full backdrop-blur-sm relative group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-[#8154EF]" />
            </motion.div>
            <span className="text-sm text-white/90" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Built for Compute. Optimized for AI. Trusted at Scale.
            </span>
            <div className="absolute inset-0 rounded-full bg-[#8154EF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1]"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 800 }}
          >
            Cloud Infrastructure
          </h1>

          <p
            className="text-xl text-white/70 leading-relaxed max-w-xl"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Run next-gen AI workloads and mission-critical compute on a high-performance cloud designed for speed, control, and predictable costs.
          </p>

          <p
            className="text-lg text-white/60 leading-relaxed max-w-xl"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            From GPUs to Virtual Machines — deploy exactly what your workloads need.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 rounded-xl overflow-hidden flex items-center justify-center gap-2 group"
              style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8154EF] to-[#6366f1]" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9333ea] to-[#8154EF]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 text-white">Deploy GPU</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 border-2 border-[#8154EF]/50 text-white rounded-xl transition-all backdrop-blur-sm overflow-hidden group"
              style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
            >
              <div className="absolute inset-0 bg-[#8154EF]/0 group-hover:bg-[#8154EF]/10 transition-colors" />
              <span className="relative z-10">Explore Compute</span>
            </motion.button>
          </div>

          {/* GPU Ticker - Wavy Design */}
          <div className="pt-4">
            <p className="text-white/40 text-sm mb-4" style={{ fontFamily: 'Sansation, sans-serif' }}>
              Available GPU Instances
            </p>
            <div className="flex flex-wrap gap-3">
              {gpuTypes.map((gpu, index) => (
                <motion.div
                  key={gpu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group cursor-pointer"
                >
                  <div className="px-5 py-3 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl backdrop-blur-sm relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#8154EF]/0 via-[#8154EF]/20 to-[#8154EF]/0"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="text-white relative z-10" style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}>
                      {gpu}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-[#8154EF]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: 3D GPU Visual with Wavy Design */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Main GPU Container */}
          <div className="relative">
            {/* Wavy blob background */}
            <motion.div
              className="absolute inset-0 -m-8 opacity-40"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: 'radial-gradient(circle, rgba(129, 84, 239, 0.4), rgba(99, 102, 241, 0.2), transparent)',
                filter: 'blur(60px)'
              }}
            />

            {/* GPU Image Card */}
            <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* GPU Image - Removed as per request */}
              <div className="relative w-full h-full flex items-center justify-center bg-black/40">
                {/* Placeholder or alternative visual if needed, or just keep the glass container empty/minimal */}
                <div className="text-white/20 text-sm">Interactive Visual Placeholder</div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8154EF]/20 via-transparent to-black/40" />
              </div>

              {/* Floating Stats - Top Right */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl border border-[#8154EF]/30 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    className="w-2.5 h-2.5 bg-[#8154EF] rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white/50 text-xs" style={{ fontFamily: 'Sansation, sans-serif' }}>
                    Live
                  </span>
                </div>
                <div className="text-white text-3xl mb-1" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                  80GB
                </div>
                <div className="text-[#8154EF] text-sm" style={{ fontFamily: 'Sansation, sans-serif' }}>
                  VRAM Available
                </div>
              </motion.div>

              {/* Floating Stats - Bottom Left */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl border border-[#8154EF]/30 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-white/50 text-xs mb-2" style={{ fontFamily: 'Sansation, sans-serif' }}>
                  Performance
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white text-3xl" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}>
                    3.5
                  </span>
                  <span className="text-white/60 text-sm">PFLOPS</span>
                </div>
                <div className="text-[#8154EF] text-sm" style={{ fontFamily: 'Sansation, sans-serif' }}>
                  H200 Tensor Core
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#8154EF]/20 rounded-2xl"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}