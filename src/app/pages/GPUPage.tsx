import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Zap, ArrowRight, BarChart3, Shield, Brain, Video, Microscope, Code, Server, BookOpen, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function GPUPage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#8154EF] font-bold mb-8">
                    <Zap className="w-4 h-4" /> The World's Most Powerful AI Infrastructure
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Train & Inference <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">at Limitless Scale</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    Deploy NVIDIA H200 and L4 clusters instantly. Optimized for LLM training, fine-tuning, and high-throughput inference.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-[#8154EF] rounded-full font-bold text-white hover:bg-[#6f42c1] transition-all flex items-center gap-2">
                        Deploy H200 Cluster <ArrowRight className="w-5 h-5" />
                    </button>
                    <Link to="/contact">
                        <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all">
                            Talk to an Expert
                        </button>
                    </Link>
                </div>
            </div>

            {/* Specs Grid */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* H200 Card */}
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-purple-900/10 to-transparent border border-[#8154EF]/30 rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Cpu className="w-64 h-64 text-[#8154EF]" />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h2 className="text-4xl font-bold mb-2 font-[Avenir]">NVIDIA H200</h2>
                                    <p className="text-[#8154EF] font-bold tracking-widest text-sm uppercase">Flagship AI Training</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    <SpecItem label="GPU Memory" value="141GB HBM3e" />
                                    <SpecItem label="Memory Bandwidth" value="4.8 TB/s" />
                                    <SpecItem label="FP8 Tensor Core" value="3,958 TFLOPS" />
                                    <SpecItem label="Interconnect" value="900 GB/s NVLink" />
                                </div>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-bold text-white">₹300</span>
                                    <span className="text-white/40 text-lg mb-1">/hour</span>
                                </div>
                                <div className="text-white/50 text-sm mb-8">8x H200: ₹2,400/hour</div>
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                    Deploy Now
                                </button>
                            </div>
                        </div>
                    </WavyCard>

                    {/* L4 Card */}
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-blue-900/10 to-transparent border border-white/10 rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Cpu className="w-64 h-64 text-blue-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h2 className="text-4xl font-bold mb-2 font-[Avenir]">NVIDIA L4</h2>
                                    <p className="text-blue-400 font-bold tracking-widest text-sm uppercase">Efficient Inference</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    <SpecItem label="GPU Memory" value="24GB GDDR6" />
                                    <SpecItem label="Memory Bandwidth" value="300 GB/s" />
                                    <SpecItem label="FP8 Tensor Core" value="485 TFLOPS" />
                                    <SpecItem label="Power" value="72W Low Profile" />
                                </div>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-bold text-white">₹26,180</span>
                                    <span className="text-white/40 text-lg mb-1">/month</span>
                                </div>
                                <div className="text-white/50 text-sm mb-8">2x L4: ₹33,980/month (~₹46.55/hr)</div>
                                <button className="w-full py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                                    Deploy Now
                                </button>
                            </div>
                        </div>
                    </WavyCard>
                </div>
            </div>

            {/* Performance Benchmarks */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold mb-12 text-center font-[Avenir]">Performance Benchmarks</h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <BenchmarkBar label="LLaMA 3 70B Training Time" value={100} labelValue="1x Baseline" color="bg-gray-600" />
                    <BenchmarkBar label="CloudPe H200 Cluster" value={190} labelValue="1.9x Faster" color="bg-[#8154EF]" />
                    <div className="h-px bg-white/10 my-6" />
                    <BenchmarkBar label="GPT-4 Inference Latency" value={100} labelValue="Baseline" color="bg-gray-600" />
                    <BenchmarkBar label="CloudPe L4 Optimized" value={45} labelValue="55% Lower Latency" color="bg-blue-500" />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    GPU cloud for AI, machine learning, and high-performance computing workloads.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard
                        icon={Brain}
                        title="LLM Training & Fine-tuning"
                        desc="Train large language models like LLaMA, Mistral, or custom models on H200 clusters with massive memory."
                    />
                    <UseCaseCard
                        icon={Sparkles}
                        title="AI/ML Inference"
                        desc="Serve generative AI models with low latency using L4 GPUs optimized for inference workloads."
                    />
                    <UseCaseCard
                        icon={Video}
                        title="Video Processing"
                        desc="Hardware-accelerated video encoding, transcoding, and real-time video analytics."
                    />
                    <UseCaseCard
                        icon={Microscope}
                        title="Scientific Computing"
                        desc="Computational physics, molecular dynamics, and research simulations at scale."
                    />
                    <UseCaseCard
                        icon={Code}
                        title="Computer Vision"
                        desc="Image classification, object detection, and real-time video analysis pipelines."
                    />
                    <UseCaseCard
                        icon={Server}
                        title="Distributed Training"
                        desc="Multi-node training with NVLink interconnect for massive model parallelism."
                    />
                </div>
            </div>

            {/* Features (Why CloudPe) */}
            <div className="max-w-[1200px] mx-auto mb-32 grid md:grid-cols-3 gap-8 relative z-10">
                <FeatureCard
                    icon={Zap}
                    title="Instant Availability"
                    desc="No waiting in queues. Spin up H200s in seconds with our automated provisioning."
                />
                <FeatureCard
                    icon={Shield}
                    title="Enterprise Security"
                    desc="ISO 27001 certified data centers with biological access controls and 24/7 monitoring."
                />
                <FeatureCard
                    icon={BarChart3}
                    title="Granular Analytics"
                    desc="Track GPU utilization, memory bandwidth, and power consumption in real-time."
                />
            </div>

            {/* Pre-installed Frameworks */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Pre-installed Frameworks</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <FrameworkCard name="PyTorch" />
                    <FrameworkCard name="TensorFlow" />
                    <FrameworkCard name="JAX" />
                    <FrameworkCard name="CUDA 12" />
                    <FrameworkCard name="cuDNN" />
                    <FrameworkCard name="Hugging Face" />
                </div>
            </div>

            {/* Knowledge Base Section */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Knowledge Base & Guides</h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#8154EF]/20 rounded-lg">
                            <BookOpen className="w-6 h-6 text-[#8154EF]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-[Avenir]">GPU Cloud Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to deploy and use GPU instances.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="How to deploy an H200 GPU instance" />
                        <KBLink title="How to run PyTorch on CloudPe GPU" />
                        <KBLink title="How to fine-tune LLMs on CloudPe" />
                        <KBLink title="Best practices for GPU workloads" />
                        <KBLink title="How to set up multi-GPU training" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="What GPU models are available?"
                        answer="CloudPe offers NVIDIA H200 (141GB HBM3e) for large-scale training and NVIDIA L4 (24GB GDDR6) for cost-efficient inference. We also offer multi-GPU configurations: 8x H200 and 2x L4."
                    />
                    <FAQItem
                        question="How is GPU billing calculated?"
                        answer="H200 GPUs are billed hourly at ₹300/hour (1x) or ₹2,400/hour (8x). L4 GPUs can be billed monthly at ₹26,180/month (1x) or ₹33,980/month (2x), or hourly at ~₹35.86/hr and ~₹46.55/hr respectively."
                    />
                    <FAQItem
                        question="Can I reserve GPUs long-term?"
                        answer="Yes, we offer reserved instances for customers with long-term GPU requirements. Contact our sales team for custom pricing on 3-month, 6-month, or annual commitments with significant discounts."
                    />
                    <FAQItem
                        question="What frameworks are pre-installed?"
                        answer="Our GPU instances come with PyTorch, TensorFlow, JAX, CUDA 12, cuDNN, and Hugging Face Transformers pre-installed. You can also install any custom frameworks or libraries."
                    />
                    <FAQItem
                        question="How much VRAM does each GPU have?"
                        answer="The NVIDIA H200 has 141GB of HBM3e memory with 4.8 TB/s bandwidth – ideal for training 70B+ parameter models. The NVIDIA L4 has 24GB GDDR6 memory, suitable for inference and smaller training jobs."
                    />
                    <FAQItem
                        question="Can I use multi-GPU setups?"
                        answer="Yes, we offer 8x H200 configurations with 900 GB/s NVLink interconnect for distributed training, and 2x L4 setups for parallel inference. Custom multi-node clusters are available for enterprise customers."
                    />
                    <FAQItem
                        question="What is the availability guarantee?"
                        answer="GPU instances come with a 99.9% uptime SLA. We maintain dedicated GPU inventory to ensure instant availability without queue times, unlike many other cloud providers."
                    />
                    <FAQItem
                        question="How do I access my GPU instance?"
                        answer="You can access GPU instances via SSH with full root access. Jupyter notebooks are also available. Use our API or CLI for programmatic access and automation."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to accelerate your AI?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Deploy GPU instances in seconds. No queues, no waiting.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-[#8154EF] to-[#6366f1] text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(129,84,239,0.5)] transition-all">
                        Deploy H200 Now
                    </button>
                    <Link to="/contact">
                        <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/5 transition-all">
                            Talk to Sales
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function SpecItem({ label, value }: { label: string, value: string }) {
    return (
        <div>
            <div className="text-white/40 text-sm mb-1">{label}</div>
            <div className="text-xl font-bold text-white">{value}</div>
        </div>
    );
}

function BenchmarkBar({ label, value, labelValue, color }: any) {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>{label}</span>
                <span className="font-bold text-white">{labelValue}</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value > 100 ? 100 : value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${value > 100 ? 100 : value}%` }}
                />
            </div>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <MetallicIconWrapper icon={Icon} size={48} />
            <h3 className="text-xl font-bold text-white mt-6 mb-3 font-[Avenir]">{title}</h3>
            <p className="text-white/60 leading-relaxed font-[Sansation]">{desc}</p>
        </div>
    );
}

function UseCaseCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#8154EF]/30 transition-all">
            <div className="w-12 h-12 bg-[#8154EF]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#8154EF]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-white/60 text-sm font-[Sansation]">{desc}</p>
        </div>
    );
}

function FrameworkCard({ name }: { name: string }) {
    return (
        <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-center">
            <div className="text-sm font-medium text-white">{name}</div>
        </div>
    );
}

function KBLink({ title }: { title: string }) {
    return (
        <a href="#" className="block group">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-[#8154EF]/50 transition-colors">
                <span className="font-medium text-white group-hover:text-[#8154EF] transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#8154EF] transition-colors" />
            </div>
        </a>
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
