import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Landmark, HeartPulse, Gamepad2, ArrowRight, Globe, Film, ShoppingCart, Terminal, ChevronDown, ChevronUp, CheckCircle, Zap, Shield, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function Solutions() {
    const solutions = [
        {
            id: "ai-ml",
            title: "AI/ML Training & Inference",
            description: "Accelerate model training with high-performance H200 GPU clusters and pre-configured environments.",
            icon: Brain,
            gradient: "from-purple-500/20 to-pink-500/20",
            features: ["H200 GPUs with 141GB HBM3e", "Pre-installed PyTorch, TensorFlow", "Multi-node training with NVLink", "Auto-scaling inference clusters"],
            products: ["GPU Cloud", "Kubernetes", "Object Storage"]
        },
        {
            id: "fintech",
            title: "FinTech & HFT",
            description: "Ultra-low latency infrastructure designed for high-frequency trading and secure financial transactions.",
            icon: Landmark,
            gradient: "from-blue-500/20 to-cyan-500/20",
            features: ["Sub-millisecond latency", "99.99% uptime SLA", "Private networking", "Compliance-ready infrastructure"],
            products: ["CPU Optimized VMs", "Block Storage", "VPC"]
        },
        {
            id: "healthcare",
            title: "Healthcare & Life Sciences",
            description: "HIPAA-compliant storage and compute for genomics, medical imaging, and patient data analysis.",
            icon: HeartPulse,
            gradient: "from-red-500/20 to-pink-500/20",
            features: ["HIPAA-compliant infrastructure", "Encrypted storage at rest", "High-memory instances for genomics", "Secure data transfer"],
            products: ["Memory Optimized VMs", "Object Storage", "Block Storage"]
        },
        {
            id: "gaming",
            title: "Gaming & Metaverse",
            description: "Edge compute solutions ensuring low-latency multiplayer experiences and real-time rendering.",
            icon: Gamepad2,
            gradient: "from-green-500/20 to-emerald-500/20",
            features: ["Global edge locations", "GPU-accelerated rendering", "Auto-scaling game servers", "Low-latency networking"],
            products: ["GPU Cloud", "Kubernetes", "Load Balancers"]
        },
        {
            id: "saas",
            title: "SaaS & Web Applications",
            description: "Reliable, scalable infrastructure for modern web applications and SaaS platforms.",
            icon: Globe,
            gradient: "from-indigo-500/20 to-blue-500/20",
            features: ["Auto-scaling compute", "Managed Kubernetes", "S3-compatible storage", "Global CDN included"],
            products: ["Virtual Machines", "Kubernetes", "Object Storage"]
        },
        {
            id: "media",
            title: "Media & Entertainment",
            description: "High-throughput infrastructure for video streaming, transcoding, and content delivery.",
            icon: Film,
            gradient: "from-orange-500/20 to-red-500/20",
            features: ["GPU video encoding", "Petabyte-scale storage", "CDN for global delivery", "High bandwidth networking"],
            products: ["GPU Cloud", "Object Storage", "Block Storage"]
        },
        {
            id: "ecommerce",
            title: "E-commerce",
            description: "Scalable infrastructure for online stores with instant scaling during peak traffic.",
            icon: ShoppingCart,
            gradient: "from-yellow-500/20 to-orange-500/20",
            features: ["Auto-scaling during sales", "Low-latency databases", "Secure payment processing", "99.99% uptime guarantee"],
            products: ["Virtual Machines", "Block Storage", "Load Balancers"]
        },
        {
            id: "devops",
            title: "DevOps & CI/CD",
            description: "Fast build and deployment infrastructure with ephemeral environments and automation tools.",
            icon: Terminal,
            gradient: "from-cyan-500/20 to-teal-500/20",
            features: ["API-first infrastructure", "Terraform provider", "Ephemeral dev environments", "Private container registry"],
            products: ["CPU Optimized VMs", "Kubernetes", "Object Storage"]
        }
    ];

    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center relative z-10 pt-12 mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#8154EF] font-bold mb-8">
                    <Server className="w-4 h-4" /> Industry Solutions
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl text-white mb-6 font-[Avenir] font-extrabold"
                >
                    Tailored for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Industry</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/60 max-w-2xl mx-auto font-[Sansation]"
                >
                    Discover how CloudPe's purpose-built infrastructure solves unique challenges across sectors.
                </motion.p>
            </div>

            {/* Use Cases Grid */}
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 relative z-10 mb-24">
                {solutions.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <WavyCard className="h-full">
                                <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <MetallicIconWrapper icon={Icon} size={48} />
                                            <div>
                                                <h3 className="text-2xl text-white mb-2 font-[Avenir] font-bold">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-white/60 font-[Sansation]">
                                                    {solution.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {solution.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-2 text-sm text-white/70">
                                                    <CheckCircle className="w-4 h-4 text-[#8154EF]" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {solution.products.map((product) => (
                                                <span key={product} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 border border-white/10">
                                                    {product}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </WavyCard>
                        </motion.div>
                    );
                })}
            </div>

            {/* Why CloudPe for Enterprise */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Why CloudPe for Enterprise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <BenefitCard
                        icon={Zap}
                        title="Instant Provisioning"
                        desc="Deploy infrastructure in seconds, not days. No waiting in queues or approval processes."
                    />
                    <BenefitCard
                        icon={Shield}
                        title="Enterprise Security"
                        desc="ISO 27001 certified data centers, encryption at rest, and compliance-ready infrastructure."
                    />
                    <BenefitCard
                        icon={Server}
                        title="Dedicated Support"
                        desc="Enterprise customers get dedicated solutions architects and 24/7 priority support."
                    />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="How do I choose the right solution?"
                        answer="Start by identifying your primary workload requirements. For AI/ML, our GPU Cloud is optimized. For web applications, consider our managed Kubernetes or VMs. For data-intensive apps, our storage solutions are ideal. Contact our solutions team for a personalized recommendation."
                    />
                    <FAQItem
                        question="Can I get help designing my architecture?"
                        answer="Yes, CloudPe offers architecture review and design services. Our solutions architects can help you design a scalable, cost-effective infrastructure tailored to your specific requirements. This service is free for enterprise customers."
                    />
                    <FAQItem
                        question="Do you offer custom solutions?"
                        answer="Yes, for enterprises with unique requirements, we offer custom infrastructure solutions including dedicated hardware, custom networking, hybrid cloud setups, and specialized compliance configurations. Contact our enterprise sales team."
                    />
                    <FAQItem
                        question="What industries do you serve?"
                        answer="CloudPe serves diverse industries including AI/ML, FinTech, Healthcare, Gaming, SaaS, Media & Entertainment, E-commerce, and DevOps. Our infrastructure is designed to meet the specific compliance and performance needs of each sector."
                    />
                    <FAQItem
                        question="Is there a solutions architect available?"
                        answer="Yes, all enterprise customers have access to dedicated solutions architects who can help with architecture design, migration planning, and optimization. For smaller customers, we offer architecture consultations on request."
                    />
                    <FAQItem
                        question="What compliance certifications do you have?"
                        answer="CloudPe data centers are ISO 27001 certified. We offer HIPAA-compliant infrastructure for healthcare, and our security practices are designed to support PCI-DSS, SOC 2, and GDPR compliance requirements."
                    />
                    <FAQItem
                        question="Can I try before I buy?"
                        answer="Yes, new customers can start with pay-as-you-go pricing with no minimum commitments. This allows you to test our infrastructure before committing to reserved capacity. Contact sales for enterprise trial options."
                    />
                    <FAQItem
                        question="How do I get started?"
                        answer="Sign up for a CloudPe account and deploy your first instance in minutes. For enterprise requirements or custom solutions, contact our sales team for a consultation and custom pricing."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#8154EF]/20 to-[#6366f1]/20 border border-[#8154EF]/30 rounded-3xl p-12 text-center backdrop-blur-md"
                >
                    <h2 className="text-3xl md:text-4xl text-white mb-6 font-[Avenir] font-bold">
                        Need a custom infrastructure solution?
                    </h2>
                    <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-[Sansation]">
                        Our solutions architects are ready to design a bespoke environment optimized for your specific workload requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                                Talk to an Expert
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link to="/products">
                            <button className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                                View All Products
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function BenefitCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-center">
            <div className="w-14 h-14 bg-[#8154EF]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon className="w-7 h-7 text-[#8154EF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-[Avenir]">{title}</h3>
            <p className="text-white/60 font-[Sansation]">{desc}</p>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-[#8154EF] transition-colors focus:outline-none"
            >
                <span className="text-lg text-white font-medium">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-white/50" /> : <ChevronDown className="w-5 h-5 text-white/50" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/60 pb-6 leading-relaxed font-[Sansation]">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
