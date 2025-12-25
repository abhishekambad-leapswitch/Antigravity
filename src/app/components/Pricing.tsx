import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { WavyCard, LiquidBackground } from "./WavyBlob";
import { MetallicIcon } from "./MetallicIcon";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "to start",
      description: "Perfect for experimentation and small projects",
      features: [
        "₹8,000 free credits",
        "Pay-as-you-go pricing",
        "Access to all GPU types",
        "Community support",
        "Basic monitoring",
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Professional",
      price: "₹40,000",
      period: "/month",
      description: "For growing teams and production workloads",
      features: [
        "Everything in Starter",
        "Priority support (24/7)",
        "Advanced monitoring & alerts",
        "Custom networking",
        "Volume discounts",
        "Dedicated account manager",
      ],
      cta: "Get Started",
      popular: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale AI infrastructure needs",
      features: [
        "Everything in Professional",
        "Custom SLAs",
        "On-premise deployment",
        "Advanced security & compliance",
        "Dedicated infrastructure",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
  ];

  const gpuPricing = [
    { name: "NVIDIA L4", vram: "24GB", price: "₹35.86/hr", details: "starts from", color: "from-blue-500 to-cyan-500" },
    { name: "Virtual Machine", vram: "Flexible", price: "₹1.27/hr", details: "starts from", color: "from-purple-500 to-pink-500" },
    { name: "NVIDIA H200", vram: "80GB", price: "₹300/hr", details: "starts from", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-black relative overflow-hidden">
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
            Performance That Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Financial Sense</span>
          </h2>
          <p 
            className="text-xl text-white/60 max-w-3xl mx-auto mb-4"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            CloudPe delivers significant cost advantages compared to traditional hyperscalers — without compromising on performance or reliability.
          </p>
          <p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Transparent pricing. No surprise bills. No unnecessary markups.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <WavyCard className="h-full">
                <div className={`h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border ${plan.popular ? 'border-[#8154EF]/50' : 'border-white/10'} rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden flex flex-col`}>
                  {/* Popular badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-[#8154EF] to-[#6366f1] rounded-full text-xs text-white flex items-center gap-1.5"
                      style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
                    >
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </motion.div>
                  )}

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Plan name */}
                    <h3 
                      className="text-2xl text-white mb-2"
                      style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                    >
                      {plan.name}
                    </h3>
                    <p 
                      className="text-white/60 text-sm mb-6"
                      style={{ fontFamily: 'Sansation, sans-serif' }}
                    >
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span 
                          className="text-5xl text-white"
                          style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                        >
                          {plan.price}
                        </span>
                        <span 
                          className="text-white/60"
                          style={{ fontFamily: 'Sansation, sans-serif' }}
                        >
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8154EF]/20 flex items-center justify-center border border-[#8154EF]/50 mt-0.5">
                            <Check className="w-3 h-3 text-[#8154EF]" />
                          </div>
                          <span 
                            className="text-white/80 text-sm"
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
                      className={`w-full px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#8154EF] to-[#6366f1] text-white shadow-lg shadow-[#8154EF]/25'
                          : 'bg-white/5 text-white border border-white/20 hover:border-[#8154EF]/50'
                      }`}
                      style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 600 }}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </WavyCard>
            </motion.div>
          ))}
        </div>

        {/* GPU Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 
            className="text-3xl text-white mb-2"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            GPU Instance Pricing
          </h3>
          <p 
            className="text-white/60"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Pay-as-you-go hourly rates for high-performance GPUs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {gpuPricing.map((gpu, index) => (
            <motion.div
              key={gpu.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <WavyCard>
                <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gpu.color}`} />
                  
                  <div className="relative z-10 pt-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 
                          className="text-xl text-white mb-1"
                          style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
                        >
                          {gpu.name}
                        </h4>
                        <div 
                          className="text-white/60 text-sm"
                          style={{ fontFamily: 'Sansation, sans-serif' }}
                        >
                          {gpu.vram} VRAM
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gpu.color} opacity-20 flex items-center justify-center`}
                      >
                        <div className="w-6 h-6 rounded bg-white/30" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-4">
                      <span 
                        className="text-3xl text-[#8154EF]"
                        style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                      >
                        {gpu.price}
                      </span>
                      <span 
                        className="text-sm text-[#8154EF]"
                        style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 500 }}
                      >
                        {gpu.details}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 hover:border-[#8154EF]/50 text-white rounded-lg text-sm transition-all"
                      style={{ fontFamily: 'Sansation, sans-serif', fontWeight: 500 }}
                    >
                      Deploy Now
                    </motion.button>
                  </div>
                </div>
              </WavyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}