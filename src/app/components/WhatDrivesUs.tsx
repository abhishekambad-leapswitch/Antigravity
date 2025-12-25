import { Target, Compass, Heart } from "lucide-react";
import { motion } from "motion/react";
import { WavyCard } from "./WavyBlob";
import { MetallicIconWrapper } from "./MetallicIcon";
import { CircuitLines, AnimatedGradientOrb } from "./AnimatedBackground";

export function WhatDrivesUs() {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To simplify access to powerful compute and AI infrastructure — without compromise on performance, cost, or control.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Compass,
      title: "Our Mission",
      description: "Enable teams to innovate faster by removing infrastructure friction and making advanced compute accessible.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Heart,
      title: "Why It Matters",
      description: "Infrastructure should accelerate growth, not slow it down. CloudPe is built to scale with your ambition.",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <CircuitLines />
      <AnimatedGradientOrb className="top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8154EF]/5 to-black" />
      
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
            What <span className="text-[#8154EF]">Drives Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <WavyCard className="h-full">
                  <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden flex flex-col">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Metallic Icon */}
                      <div className="mb-6">
                        <MetallicIconWrapper icon={Icon} size={64} />
                      </div>

                      {/* Content */}
                      <h3 
                        className="text-2xl text-white mb-4"
                        style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                      >
                        {value.title}
                      </h3>
                      <p 
                        className="text-white/70 leading-relaxed"
                        style={{ fontFamily: 'Sansation, sans-serif' }}
                      >
                        {value.description}
                      </p>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-bl-2xl" />
                  </div>
                </WavyCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
