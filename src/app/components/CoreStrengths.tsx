import { Cpu, Server, Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { WavyCard, LiquidBackground } from "./WavyBlob";
import { MetallicIconWrapper } from "./MetallicIcon";

export function CoreStrengths() {
  const gpuFeatures = [
    "A100 GPUs – Large-scale model training & HPC",
    "H200 GPUs – Memory-intensive AI, LLMs, GenAI",
    "L4 GPUs – Cost-efficient inference & AI apps",
    "RTX 6000 Pro Blackwell – Advanced AI, graphics & workstation-grade compute",
    "On-Demand GPUs – Spin up instantly, pay only for what you use",
  ];

  const computeFeatures = [
    "High-performance Virtual Machines",
    "Kubernetes-ready environments",
    "Flexible CPU, RAM & storage configurations",
    "Optimized for web apps, databases, APIs, and backend services",
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <LiquidBackground />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #8154EF 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            One Cloud. <span className="text-[#8154EF]">Two Core Strengths.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* GPU Compute Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <WavyCard className="h-full">
              <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-10 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Metallic Icon */}
                  <div className="mb-6">
                    <MetallicIconWrapper icon={Cpu} size={80} />
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-3xl text-white mb-4"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                  >
                    Accelerated AI & GPU Compute
                  </h3>
                  <p 
                    className="text-white/70 mb-8 text-lg leading-relaxed"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                  >
                    Purpose-built GPU infrastructure for training, inference, and high-performance workloads.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {gpuFeatures.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8154EF]/20 flex items-center justify-center border border-[#8154EF]/50 mt-1">
                          <Check className="w-3 h-3 text-[#8154EF]" />
                        </div>
                        <span 
                          className="text-white/80"
                          style={{ fontFamily: 'Sansation, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p 
                    className="text-white/60 mb-6 italic"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                  >
                    Built for PyTorch, TensorFlow, CUDA, Triton, Kubernetes, and modern AI stacks.
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#8154EF] to-[#6366f1] text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-[#8154EF]/25"
                    style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
                  >
                    View GPU Options
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-bl-2xl" />
              </div>
            </WavyCard>
          </motion.div>

          {/* Compute/VMs Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <WavyCard className="h-full">
              <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-10 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Metallic Icon */}
                  <div className="mb-6">
                    <MetallicIconWrapper icon={Server} size={80} />
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-3xl text-white mb-4"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                  >
                    Reliable Compute for Every Application
                  </h3>
                  <p 
                    className="text-white/70 mb-8 text-lg leading-relaxed"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                  >
                    Secure, scalable compute for production workloads, SaaS platforms, and enterprise systems.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {computeFeatures.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8154EF]/20 flex items-center justify-center border border-[#8154EF]/50 mt-1">
                          <Check className="w-3 h-3 text-[#8154EF]" />
                        </div>
                        <span 
                          className="text-white/80"
                          style={{ fontFamily: 'Sansation, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 mt-auto bg-white/5 text-white border border-white/20 hover:border-[#8154EF]/50 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn"
                    style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
                  >
                    Explore Compute
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-bl-2xl" />
              </div>
            </WavyCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
