import { Zap, Check, Users, Rocket, Cpu, Network, Shield, Clock } from "lucide-react";
import { motion } from "motion/react";
import { CircuitLines, AnimatedGradientOrb } from "./AnimatedBackground";
import { MetallicIconWrapper } from "./MetallicIcon";

export function WhyCloudPe() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant provisioning across GPUs and VMs",
      description: "Deploy infrastructure in seconds, not hours"
    },
    {
      icon: Check,
      title: "Pay-as-you-go pricing with full transparency",
      description: "No hidden fees. Simple per-hour billing you can understand"
    },
    {
      icon: Shield,
      title: "Enterprise-grade networking & security",
      description: "VPC, firewall, DDoS protection built-in"
    },
    {
      icon: Clock,
      title: "High availability architecture by default",
      description: "Redundant infrastructure ensuring resilience"
    },
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <CircuitLines />
      <AnimatedGradientOrb className="top-1/3 left-1/4 w-96 h-96 bg-[#8154EF]" />
      
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
            Cloud <span className="text-[#8154EF]">Without Complexity</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-3xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Everything you need to deploy, scale, and secure workloads — without vendor lock-in or hidden costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex gap-4 group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#8154EF]/50 hover:bg-[#8154EF]/5 transition-all"
              >
                {/* Metallic Icon */}
                <div className="flex-shrink-0">
                  <MetallicIconWrapper icon={Icon} size={48} />
                </div>

                <div>
                  <h3 
                    className="text-lg text-white mb-1"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-white/60 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}