import { Terminal, Code, FileText, Github } from "lucide-react";
import { motion } from "motion/react";
import { LiquidBackground, WavyCard } from "./WavyBlob";
import { useState, useEffect } from "react";

export function DeveloperExperience() {
  const [typedText, setTypedText] = useState("");
  const fullCommand = "cloudpe gpu create --type h200 --region mumbai --name ml-training";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Terminal,
      title: "API-First",
      description: "Everything accessible via REST API and SDKs",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Terraform provider and CLI automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Rich Documentation",
      description: "Comprehensive guides and examples",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Github,
      title: "CI/CD Ready",
      description: "GitHub Actions and pipeline integrations",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="developers" className="py-24 px-6 bg-black relative overflow-hidden">
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
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Developers</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Deploy in seconds with our powerful CLI, APIs, and integrations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <WavyCard>
              <div className="bg-gradient-to-br from-[#0a0e27] to-black border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-white/40 text-sm" style={{ fontFamily: 'Sansation, sans-serif' }}>
                    terminal
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-4">
                    {/* Command prompt */}
                    <div className="flex items-start gap-2">
                      <span className="text-[#8154EF]">$</span>
                      <div className="flex-1">
                        <span className="text-white">npm install -g cloudpe-cli</span>
                      </div>
                    </div>

                    {/* Output */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-green-400 text-xs"
                    >
                      ✓ cloudpe-cli installed successfully
                    </motion.div>

                    {/* Typed command */}
                    <div className="flex items-start gap-2 mt-6">
                      <span className="text-[#8154EF]">$</span>
                      <div className="flex-1">
                        <span className="text-white">{typedText}</span>
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-[#8154EF] ml-0.5"
                        />
                      </div>
                    </div>

                    {/* Success output */}
                    {typedText === fullCommand && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <div className="text-cyan-400 text-xs">
                          ⚡ Provisioning H200 GPU instance...
                        </div>
                        <div className="text-green-400 text-xs">
                          ✓ GPU instance ready in 45s
                        </div>
                        <div className="text-white/60 text-xs flex items-center gap-2">
                          <span>→</span>
                          <span className="text-[#8154EF]">ssh://ml-training.mumbai.cloudpe.io</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </WavyCard>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 order-1 lg:order-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <WavyCard>
                    <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden h-full">
                      {/* Gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
                      
                      <div className="relative z-10 pt-2">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} opacity-20 flex items-center justify-center mb-4 relative`}
                        >
                          <Icon className="w-6 h-6 text-[#8154EF] relative z-10" />
                        </motion.div>

                        <h3 
                          className="text-lg text-white mb-2"
                          style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="text-white/60 text-sm"
                          style={{ fontFamily: 'Sansation, sans-serif' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </WavyCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Code Snippet Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Python SDK",
              code: `from cloudpe import Client

client = Client(api_key)
gpu = client.gpu.create(
  type="h200",
  region="mumbai"
)`,
              language: "python"
            },
            {
              title: "Terraform",
              code: `resource "cloudpe_gpu" "ml" {
  type   = "h200"
  region = "mumbai"
  name   = "ml-training"
}`,
              language: "hcl"
            },
            {
              title: "REST API",
              code: `curl -X POST \\
  https://api.cloudpe.io/gpu \\
  -H "Authorization: Bearer \${KEY}" \\
  -d '{"type":"h200"}'`,
              language: "bash"
            }
          ].map((snippet, index) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WavyCard>
                <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm">
                  <h4 
                    className="text-white mb-4 flex items-center gap-2"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
                  >
                    <Code className="w-4 h-4 text-[#8154EF]" />
                    {snippet.title}
                  </h4>
                  <pre className="text-xs text-white/70 font-mono overflow-x-auto whitespace-pre-wrap break-words">
                    {snippet.code}
                  </pre>
                </div>
              </WavyCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
