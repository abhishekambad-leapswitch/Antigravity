import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import * as Tabs from "@radix-ui/react-tabs";
import {
    Cpu, Server, Database, Layers, ArrowRight, Zap, Check, Lock, Shield,
    Globe, Terminal, BookOpen, Cloud, Sliders, Activity, Clock, Code
} from "lucide-react";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function Products() {
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Section 1: Hero + Category Slider */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                    >
                        Cloud Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Products</span>
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-[Sansation]">
                        High-performance compute, storage, and networking built for AI and modern workloads.
                    </p>
                </div>

                {/* Embla Slider */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex gap-6">
                        <HeroSlide
                            icon={Cpu}
                            title="GPU Cloud"
                            products={["H200 GPU", "L4 GPU", "L40S GPU"]}
                            desc="Built for AI training & inference"
                            gradient="from-purple-500/20 to-pink-500/20"
                        />
                        <HeroSlide
                            icon={Server}
                            title="Compute"
                            products={["Virtual Machines", "Managed Kubernetes"]}
                            desc="Scalable compute for any workload"
                            gradient="from-blue-500/20 to-cyan-500/20"
                        />
                        <HeroSlide
                            icon={Database}
                            title="Storage"
                            products={["S3 Object Storage", "Block Storage Volumes"]}
                            desc="Reliable, high-throughput storage"
                            gradient="from-emerald-500/20 to-green-500/20"
                        />
                        <HeroSlide
                            icon={Layers}
                            title="Add-Ons"
                            products={["Load Balancers", "Firewalls", "Virtual Private Cloud"]}
                            desc="Secure and scalable networking"
                            gradient="from-orange-500/20 to-red-500/20"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Core Product Categories (Tabs) */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <Tabs.Root defaultValue="gpu" className="flex flex-col items-center">
                    <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12 p-1 bg-white/5 rounded-full backdrop-blur-md">
                        <TabTrigger value="gpu" label="GPU" icon={Cpu} />
                        <TabTrigger value="compute" label="Compute" icon={Server} />
                        <TabTrigger value="storage" label="Storage" icon={Database} />
                        <TabTrigger value="addons" label="Add-Ons" icon={Layers} />
                    </Tabs.List>

                    <TabContent value="gpu" category="GPU Cloud" cards={[
                        { name: "H200 GPU", desc: "Large-scale AI training with massive memory bandwidth.", usps: ["141GB HBM3e", "3.2TB/s Bandwidth"], link: "/products/gpu-cloud" },
                        { name: "L4 GPU", desc: "Cost-efficient inference for video and lightweight AI.", usps: ["24GB GDDR6", "Energy Efficient"], link: "/products/gpu-cloud" },
                        { name: "L40S GPU", desc: "Powerful universal GPU for graphics and AI workloads.", usps: ["48GB GDDR6", "Ray Tracing"], link: "/products/gpu-cloud" }
                    ]} />

                    <TabContent value="compute" category="Compute Instances" cards={[
                        { name: "Virtual Machines", desc: "General purpose instances for scalable applications.", usps: ["AMD EPYC Processors", "100Gbps Networking"], link: "/products/compute/virtual-machines" },
                        { name: "Managed Kubernetes", desc: "Production-ready clusters with automated operations.", usps: ["High Availability", "Auto-scaling"], link: "/products/compute/kubernetes" }
                    ]} />

                    <TabContent value="storage" category="Storage Solutions" cards={[
                        { name: "S3 Object Storage", desc: "Infinite scaling for data lakes and archives.", usps: ["S3 API Compatible", "Zero Egress Fees"], link: "/products/storage/s3-object-storage" },
                        { name: "Block Storage", desc: "High-performance NVMe volumes for databases.", usps: ["Low Latency", "Instant Snapshots"], link: "/products/storage/block-storage-volumes" }
                    ]} />

                    <TabContent value="addons" category="Networking & Security" cards={[
                        { name: "Load Balancers", desc: "Distribute traffic for high availability.", usps: ["Layer 4/7", "SSL Offloading"], link: "/pricing" },
                        { name: "Cloud Firewalls", desc: "Secure your infrastructure with granular rules.", usps: ["Stateful Inspection", "Group Policies"], link: "/pricing" },
                        { name: "VPC", desc: "Isolated network environments for total control.", usps: ["Private Subnets", "VPN Gateway"], link: "/pricing" }
                    ]} />
                </Tabs.Root>
            </div>

            {/* Section 3: Guided Onboarding & Product Demo */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[Avenir]">See CloudPe in Action</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Choose how you’d like to explore the platform.</p>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative group">
                    {/* Placeholder for Supademo */}
                    <div className="text-center">
                        <div className="w-20 h-20 bg-[#8154EF]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8154EF]/40 transition-colors">
                            <Activity className="w-10 h-10 text-[#8154EF]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Interactive Demo Loading...</h3>
                        <p className="text-white/50">Experience our console interface directly.</p>
                    </div>

                    {/* Simulated Interface Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                </div>
            </div>

            {/* Section 4: Why Choose CloudPe */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-[Avenir]">Why Choose CloudPe</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard icon={Cpu} title="AI-Optimized GPUs" desc="Access the latest H200 chips instantly." />
                    <FeatureCard icon={Activity} title="Transparent Pricing" desc="No hidden fees. Pay as you go." />
                    <FeatureCard icon={Clock} title="Fast Provisioning" desc="Spin up instances in seconds, not minutes." />
                    <FeatureCard icon={Globe} title="India-friendly Latency" desc="Low latency regions optimized for Asia." />
                    <FeatureCard icon={Terminal} title="API-first Platform" desc="Automate everything with our robust API." />
                    <FeatureCard icon={Shield} title="Dedicated Support" desc="24/7 access to cloud engineers." />
                </div>
            </div>

            {/* Section 5: Use-Case Mapping */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Built for Every Scale</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <UseCaseCard title="AI / ML Training" desc="Train massive models with distributed H200 clusters." />
                    <UseCaseCard title="LLM Inference" desc="Serve generative AI models with low latency." />
                    <UseCaseCard title="Startup MVPs" desc="Launch quickly with affordable usage-based pricing." />
                    <UseCaseCard title="Enterprise Workloads" desc="Secure, compliant infrastructure for large organizations." />
                    <UseCaseCard title="Dev / Test Envs" desc="Ephemeral environments that spin down to zero cost." />
                </div>
            </div>

            {/* Section 6: Pricing Entry Point */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10 text-center bg-gradient-to-br from-[#8154EF]/10 to-transparent border border-[#8154EF]/20 rounded-3xl p-12 backdrop-blur-md">
                <h2 className="text-3xl font-bold text-white mb-4">Pricing Entry Point</h2>
                <p className="text-xl text-white/70 mb-8">Pay only for what you use — no hidden costs.</p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                    View Pricing <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Section 7: Supporting & Utility Services */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-white/10 flex-1" />
                    <span className="text-white/40 uppercase tracking-widest text-sm">Supporting Services</span>
                    <div className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <UtilityCard title="CloudPe IP" desc="Elastic public IPs for stability." />
                    <UtilityCard title="CloudPe Snapshot" desc="Point-in-time recovery." />
                    <UtilityCard title="CloudPe VPN" desc="Secure private connectivity." />
                    <UtilityCard title="CloudPe Backup" desc="Automated data safety." />
                </div>
            </div>

            {/* Section 8: Developer & Documentation Access */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10 grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-[Avenir]">Built for Developers</h2>
                    <p className="text-white/60 mb-8 leading-relaxed font-[Sansation]">
                        Integrate CloudPe into your existing workflows with our powerful CLI, Terraform provider, and comprehensive API documentation.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <DevLink icon={BookOpen} label="Documentation" />
                        <DevLink icon={Code} label="API Reference" />
                        <DevLink icon={Terminal} label="CLI" />
                        <DevLink icon={Sliders} label="Terraform" />
                    </div>
                </div>
                <div className="bg-black/50 rounded-xl p-6 border border-white/10 font-mono text-sm text-white/80 shadow-2xl">
                    <div className="text-blue-400 mb-2"># Install CloudPe CLI</div>
                    <div className="text-white mb-6">$ curl -sL cloudpe.com/install | bash</div>
                    <div className="text-green-400 mb-2"># Spin up an H200 instance</div>
                    <div className="text-white">$ cloudpe instance create --type h200 --region mum-1</div>
                </div>
            </div>

            {/* Section 9: Final Conversion CTA */}
            <div className="text-center pb-20 relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight" style={{ fontFamily: 'Avenir, sans-serif' }}>
                    Build and scale on <br className="hidden md:block" /> CloudPe today.
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-[#8154EF] to-[#6366f1] text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(129,84,239,0.5)] transition-all">
                        Start Free
                    </button>
                    <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/5 transition-all">
                        Talk to Sales
                    </button>
                </div>
            </div>
        </div>
    );
}

// Sub-components

function HeroSlide({ icon: Icon, title, products, desc, gradient }: any) {
    return (
        <div className="flex-[0_0_100%] md:flex-[0_0_350px] min-w-0">
            <WavyCard className="h-full">
                <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#8154EF]/50 transition-all backdrop-blur-sm relative overflow-hidden group flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                        <div className="mb-4">
                            <MetallicIconWrapper icon={Icon} size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 font-[Avenir]">{title}</h3>
                        <p className="text-sm text-white/50 mb-6 font-[Sansation]">{desc}</p>
                        <ul className="space-y-2 mb-6">
                            {products.map((p: string) => (
                                <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#8154EF]" /> {p}
                                </li>
                            ))}
                        </ul>
                        <button className="text-[#8154EF] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                            Explore <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </WavyCard>
        </div>
    );
}

function TabTrigger({ value, label, icon: Icon }: any) {
    return (
        <Tabs.Trigger
            value={value}
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-white/60 hover:text-white data-[state=active]:bg-[#8154EF] data-[state=active]:text-white transition-all font-medium font-[Avenir]"
        >
            <Icon className="w-4 h-4" />
            {label}
        </Tabs.Trigger>
    );
}

function TabContent({ value, category, cards }: any) {
    return (
        <Tabs.Content value={value} className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-3 gap-6"
            >
                {cards.map((card: any, idx: number) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-colors flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2 font-[Avenir]">{card.name}</h3>
                        <p className="text-white/50 text-sm mb-6 min-h-[40px] font-[Sansation]">{card.desc}</p>
                        <div className="space-y-2 mb-8 flex-grow">
                            {card.usps.map((usp: string) => (
                                <div key={usp} className="flex items-center gap-2 text-xs text-white/70 bg-white/5 px-2 py-1 rounded w-fit">
                                    <Zap className="w-3 h-3 text-[#8154EF]" /> {usp}
                                </div>
                            ))}
                        </div>
                        <Link to={card.link || "/contact"}>
                            <button className="w-full py-2 rounded-lg border border-white/20 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </motion.div>
        </Tabs.Content>
    );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="bg-[#8154EF]/10 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-[#8154EF]" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-1 font-[Avenir]">{title}</h3>
                <p className="text-sm text-white/50 font-[Sansation]">{desc}</p>
            </div>
        </div>
    );
}

function UseCaseCard({ title, desc }: any) {
    return (
        <div className="p-6 border-l-2 border-[#8154EF]/30 bg-white/[0.02] hover:border-[#8154EF] hover:bg-white/[0.04] transition-all group cursor-pointer">
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-sm text-white/50 mb-4 font-[Sansation]">{desc}</p>
            <div className="text-xs text-[#8154EF] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Solution <ArrowRight className="w-3 h-3" />
            </div>
        </div>
    );
}

function UtilityCard({ title, desc }: any) {
    return (
        <div className="text-center p-6 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-white mb-1 font-[Avenir]">{title}</h4>
            <p className="text-xs text-white/40 font-[Sansation]">{desc}</p>
            <button className="text-[10px] text-white/60 mt-3 underline decoration-white/20 hover:text-white">Learn more</button>
        </div>
    );
}

function DevLink({ icon: Icon, label }: any) {
    return (
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#8154EF]/30 transition-all text-sm font-medium text-white/80 hover:text-white">
            <Icon className="w-4 h-4 text-[#8154EF]" /> {label}
        </a>
    );
}
