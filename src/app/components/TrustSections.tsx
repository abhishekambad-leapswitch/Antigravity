import { Users, Shield, Activity, CheckCircle, Boxes, Settings } from "lucide-react";
import { motion } from "motion/react";
import { MetallicIconWrapper } from "./MetallicIcon";
import { LiquidBackground } from "./WavyBlob";

export function LeadershipSection() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8154EF]/5 to-black" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex mb-6">
            <MetallicIconWrapper icon={Users} size={64} />
          </div>
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            Leadership That Knows Cloud <span className="text-[#8154EF]">Inside Out</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-3xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            CloudPe is built by leaders with deep expertise in cloud infrastructure, networking, and enterprise systems — ensuring technical depth behind every product decision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function CloudPartner() {
  const features = [
    {
      icon: Activity,
      title: "99.9%+ uptime architecture",
    },
    {
      icon: Shield,
      title: "Enterprise-grade security controls",
    },
    {
      icon: CheckCircle,
      title: "Responsive technical support",
    },
    {
      icon: Users,
      title: "Infrastructure trusted by fast-growing teams",
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
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            A Cloud Partner <span className="text-[#8154EF]">You Can Rely On</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p 
            className="text-xl text-white/70 italic"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            We don't just provide servers — we provide confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function FlexibilitySection() {
  const features = [
    {
      icon: Boxes,
      title: "Scale vertically or horizontally",
    },
    {
      icon: Settings,
      title: "Choose GPUs or CPUs based on workload needs",
    },
    {
      icon: Activity,
      title: "Optimize cost without sacrificing performance",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8154EF]/5 to-black" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            You Build <span className="text-[#8154EF]">Differently.</span>
          </h2>
          <h3 
            className="text-3xl md:text-4xl text-white mb-6"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
          >
            We Deliver Accordingly.
          </h3>
          <p 
            className="text-xl text-white/60 max-w-3xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            No two workloads are the same. CloudPe adapts to your architecture — not the other way around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#8154EF]/50 hover:bg-[#8154EF]/5 transition-all"
              >
                {/* Metallic Icon */}
                <div className="mb-4">
                  <MetallicIconWrapper icon={Icon} size={56} />
                </div>

                <p 
                  className="text-white/80 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Sansation, sans-serif' }}
                >
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
