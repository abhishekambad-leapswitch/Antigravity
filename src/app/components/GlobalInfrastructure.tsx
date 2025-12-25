import { Globe, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { MetallicIconWrapper } from "./MetallicIcon";
import { LiquidBackground } from "./WavyBlob";

export function GlobalInfrastructure() {
  const features = [
    {
      icon: Globe,
      title: "Multiple global locations for low-latency access",
    },
    {
      icon: Zap,
      title: "High-performance networking with intelligent routing",
    },
    {
      icon: Shield,
      title: "Redundant architecture ensuring resilience",
    },
    {
      icon: TrendingUp,
      title: "Consistent performance, even at scale",
    },
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
            Global Infrastructure. <span className="text-[#8154EF]">Proven Reliability.</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Designed for businesses that cannot afford downtime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-center group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#8154EF]/50 hover:bg-[#8154EF]/5 transition-all"
              >
                {/* Metallic Icon */}
                <div className="flex-shrink-0">
                  <MetallicIconWrapper icon={Icon} size={48} />
                </div>

                <p 
                  className="text-white/80 group-hover:text-white transition-colors text-lg"
                  style={{ fontFamily: 'Sansation, sans-serif' }}
                >
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p 
            className="text-lg text-white/70 max-w-3xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Whether you're serving users globally or training large models, CloudPe delivers predictable performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
