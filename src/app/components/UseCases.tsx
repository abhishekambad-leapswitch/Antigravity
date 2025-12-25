import { useState } from "react";
import { Brain, Code, Building } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FloatingParticles } from "./AnimatedBackground";
import { MetallicIconWrapper } from "./MetallicIcon";
import { WavyCard } from "./WavyBlob";

export function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      icon: Brain,
      title: "For AI & ML Teams",
      features: [
        "Train and deploy models faster",
        "Scale inference without over-provisioning",
        "Optimize GPU utilization and cost",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Code,
      title: "For Engineering Teams",
      features: [
        "Stable, high-performance compute",
        "Seamless CI/CD and Kubernetes workflows",
        "Secure, production-ready environments",
      ],
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: Building,
      title: "For Enterprises",
      features: [
        "Predictable pricing",
        "Dedicated support",
        "Compliance-ready infrastructure",
      ],
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section id="solutions" className="py-20 px-6 bg-black relative overflow-hidden">
      <FloatingParticles />
      
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
            Built to Meet <span className="text-[#8154EF]">Complex Demands</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            From startups to enterprises, CloudPe adapts to your needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <WavyCard className="h-full">
                  <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden flex flex-col">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Metallic Icon */}
                      <div className="mb-6">
                        <MetallicIconWrapper icon={Icon} size={64} />
                      </div>

                      {/* Content */}
                      <h3 
                        className="text-2xl text-white mb-6"
                        style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                      >
                        {useCase.title}
                      </h3>

                      {/* Features */}
                      <ul className="space-y-3">
                        {useCase.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-[#8154EF] mt-1.5">•</span>
                            <span 
                              className="text-white/80"
                              style={{ fontFamily: 'Sansation, sans-serif' }}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
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