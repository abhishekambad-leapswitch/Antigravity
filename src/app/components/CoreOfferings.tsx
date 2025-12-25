import { Cpu, Server, Network, Database, HardDrive, Layers, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { WavyCard, LiquidBackground } from "./WavyBlob";
import { MetallicIconWrapper } from "./MetallicIcon";

export function CoreOfferings() {
  const offerings = [
    {
      icon: Cpu,
      title: "GPU Cloud",
      description: "High-performance GPUs for AI, ML, and compute-intensive workloads.",
      link: "#gpu",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Server,
      title: "Compute (Virtual Machines)",
      description: "Flexible, reliable compute for production systems.",
      link: "#vm",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Database,
      title: "Storage",
      description: "S3-compatible object storage, block storage, and snapshots.",
      link: "#storage",
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: Network,
      title: "Networking",
      description: "VPC, VPN, load balancers, firewalls, and private networking.",
      link: "#network",
      gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      icon: Layers,
      title: "Managed Services",
      description: "Designed to reduce operational overhead while maintaining control.",
      link: "#managed",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-black relative overflow-hidden">
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
            The Platform That <span className="text-[#8154EF]">Runs Your Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <WavyCard className="h-full">
                  <a
                    href={offering.link}
                    className="block h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Wavy shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(129, 84, 239, 0.1) 50%, transparent 70%)',
                      }}
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Metallic Icon */}
                      <div className="mb-6">
                        <MetallicIconWrapper icon={Icon} size={64} />
                      </div>

                      {/* Content */}
                      <h3 
                        className="text-xl text-white mb-3"
                        style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
                      >
                        {offering.title}
                      </h3>
                      <p 
                        className="text-white/60 mb-6 leading-relaxed"
                        style={{ fontFamily: 'Sansation, sans-serif' }}
                      >
                        {offering.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-[#8154EF] group/link">
                        <span style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 500 }}>
                          Learn More
                        </span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#8154EF]/0 group-hover:border-[#8154EF]/30 transition-all rounded-bl-2xl" />
                  </a>
                </WavyCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}