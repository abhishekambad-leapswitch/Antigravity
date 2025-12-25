import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, Box, Cpu, ArrowRight, Layers, Terminal, Globe, Shield, Zap, BookOpen, ChevronDown, ChevronUp, HardDrive, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function ComputePage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 font-bold mb-8">
                    <Server className="w-4 h-4" /> Scalable Compute Infrastructure
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Virtual Machines <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">for Every Workload</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    From general purpose web servers to high-performance batch processing nodes. Deploy globally in seconds.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/products/compute/virtual-machines">
                        <button className="px-8 py-4 bg-blue-600 rounded-full font-bold text-white hover:bg-blue-500 transition-all flex items-center gap-2">
                            Deploy Virtual Machine <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <Link to="/products/compute/kubernetes">
                        <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2">
                            Deploy Kubernetes <Box className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Compute Flavors */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-center font-[Avenir]">Choose Your Power</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Optimized configurations for every workload, with transparent pricing.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <FlavorCard
                        title="General Purpose"
                        subtitle="a.gp1 series"
                        icon={Box}
                        desc="Balanced vCPU and RAM ratios. Ideal for web servers, microservices, and small databases."
                        specs={["1:4 vCPU to RAM", "Up to 32 vCPUs", "NVMe Storage"]}
                        price="₹1,516"
                        color="text-blue-400"
                    />
                    <FlavorCard
                        title="CPU Optimized"
                        subtitle="a.cpu1 series"
                        icon={Cpu}
                        desc="High clock speed vCPUs. Perfect for CI/CD pipelines, video encoding, and batch processing."
                        specs={["1:2 vCPU to RAM", "3.5GHz+ Clock", "Dedicated Threads"]}
                        price="₹1,117"
                        color="text-orange-400"
                        isPopular
                    />
                    <FlavorCard
                        title="Memory Optimized"
                        subtitle="a.mem1 series"
                        icon={Layers}
                        desc="High RAM ratios. Designed for in-memory caches (Redis), large databases, and real-time analytics."
                        specs={["1:8 vCPU to RAM", "Up to 512GB RAM", "High Throughput"]}
                        price="₹1,366"
                        color="text-green-400"
                    />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Compute infrastructure for any application, at any scale.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard icon={Globe} title="Web Applications" desc="Host websites, web apps, and frontend applications with auto-scaling capabilities." />
                    <UseCaseCard icon={Server} title="API Backends" desc="Deploy RESTful APIs, GraphQL servers, and microservices architectures." />
                    <UseCaseCard icon={Cpu} title="Batch Processing" desc="Run compute-intensive jobs, data processing, and video encoding tasks." />
                    <UseCaseCard icon={Terminal} title="Development Environments" desc="Spin up dev/test environments that mirror production configurations." />
                    <UseCaseCard icon={Shield} title="Enterprise Workloads" desc="Deploy ERP, CRM, and business-critical applications securely." />
                    <UseCaseCard icon={HardDrive} title="Database Hosting" desc="Self-managed MySQL, PostgreSQL, MongoDB, and Redis deployments." />
                </div>
            </div>

            {/* OS & Apps */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-12 font-[Avenir]">One-Click Deployments</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <OSCard name="Ubuntu" />
                    <OSCard name="Debian" />
                    <OSCard name="CentOS" />
                    <OSCard name="Windows" />
                    <OSCard name="Docker" />
                    <OSCard name="Rocky Linux" />
                    <OSCard name="Fedora" />
                    <OSCard name="AlmaLinux" />
                    <OSCard name="Arch Linux" />
                    <OSCard name="Custom ISO" />
                </div>
            </div>

            {/* Pricing Preview */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-3xl p-10 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Transparent Pricing</h2>
                    <p className="text-white/60 text-center mb-8 font-[Sansation]">Pay hourly or monthly. Prices include 30GB block storage.</p>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-white/40 text-sm border-b border-white/10">
                                    <th className="p-4 font-medium">Type</th>
                                    <th className="p-4 font-medium">Starting Config</th>
                                    <th className="p-4 font-medium">Monthly</th>
                                    <th className="p-4 font-medium">Hourly</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/80 font-[Sansation]">
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-orange-400">CPU Optimized</td>
                                    <td className="p-4">2 vCPU · 4 GB RAM</td>
                                    <td className="p-4 font-bold">₹1,117/mo</td>
                                    <td className="p-4">₹1.53/hr</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-green-400">Memory Optimized</td>
                                    <td className="p-4">1 vCPU · 8 GB RAM</td>
                                    <td className="p-4 font-bold">₹1,366/mo</td>
                                    <td className="p-4">₹1.87/hr</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-blue-400">General Purpose</td>
                                    <td className="p-4">1 vCPU · 4 GB RAM</td>
                                    <td className="p-4 font-bold">₹1,516/mo</td>
                                    <td className="p-4">₹2.07/hr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center">
                        <Link to="/pricing">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                                View All Pricing <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Developer Features */}
            <div className="max-w-[1200px] mx-auto mb-32 grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-12 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-[Avenir]">Automate with API</h2>
                    <p className="text-white/60 mb-8 leading-relaxed font-[Sansation]">
                        Full control over your infrastructure. Create, snapshots, and resize instances programmatically.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> RESTful API</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> Terraform Provider</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> CLI Tool</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> Webhooks & Events</li>
                    </ul>
                </div>
                <div className="bg-black/50 rounded-xl p-6 border border-white/10 font-mono text-sm text-white/80 shadow-2xl">
                    <div className="text-green-400 mb-2"># Create a 4GB Instance</div>
                    <div className="text-white">$ curl -X POST https://api.cloudpe.com/v2/instances \</div>
                    <div className="text-white pl-4 text-white/60">-d {'{'}"name": "web-01", "flavor": "gp.4g", "image": "ubuntu-22.04"{'}'}</div>
                    <div className="text-blue-400 mt-4">{'{'} "id": "inst_829301", "status": "provisioning" {'}'}</div>
                </div>
            </div>

            {/* Knowledge Base Section */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Knowledge Base & Guides</h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                            <BookOpen className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-[Avenir]">Compute Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to deploy and manage instances.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="Getting started with Virtual Machines" />
                        <KBLink title="Choosing the right instance type" />
                        <KBLink title="Automating with Terraform" />
                        <KBLink title="Setting up load balancing" />
                        <KBLink title="Kubernetes cluster deployment" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="What instance types are available?"
                        answer="CloudPe offers three instance series: General Purpose (a.gp1) with balanced resources, CPU Optimized (a.cpu1) with high clock speeds, and Memory Optimized (a.mem1) with high RAM ratios. Each series ranges from 1 vCPU to 64 vCPU configurations."
                    />
                    <FAQItem
                        question="How do I choose between General Purpose and CPU Optimized?"
                        answer="Choose General Purpose for balanced workloads like web servers and databases. Choose CPU Optimized for compute-intensive tasks like video encoding, CI/CD pipelines, and batch processing where CPU performance is critical."
                    />
                    <FAQItem
                        question="Can I switch between hourly and monthly billing?"
                        answer="Yes, you can switch billing modes anytime. Monthly billing provides a fixed rate with reserved capacity. Hourly billing is per-second and ideal for variable workloads or testing."
                    />
                    <FAQItem
                        question="What operating systems are supported?"
                        answer="We support Ubuntu, Debian, CentOS, Rocky Linux, AlmaLinux, Fedora, Arch Linux, and Windows Server. You can also upload custom ISO images for specialized deployments."
                    />
                    <FAQItem
                        question="Is there an API for automation?"
                        answer="Yes, CloudPe provides a comprehensive RESTful API, Terraform provider, and CLI tool. You can automate instance creation, scaling, snapshots, and all other operations programmatically."
                    />
                    <FAQItem
                        question="How do I scale my compute resources?"
                        answer="You can vertically scale by changing the instance flavor (requires restart) or horizontally scale by adding more instances behind a load balancer. Kubernetes clusters support auto-scaling."
                    />
                    <FAQItem
                        question="What is included in the price?"
                        answer="Prices include the vCPU, RAM, 30GB of block storage, 1 public IPv4 address, private networking, and generous bandwidth. Additional storage and IPs are available at transparent rates."
                    />
                    <FAQItem
                        question="Do you offer dedicated instances?"
                        answer="Yes, for enterprise customers requiring dedicated hardware for compliance or performance reasons, we offer bare metal and dedicated VM options. Contact sales for custom configurations."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to deploy?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Launch your first instance in under 60 seconds.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/products/compute/virtual-machines">
                        <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all">
                            Deploy VM Now
                        </button>
                    </Link>
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

function FlavorCard({ title, subtitle, icon: Icon, desc, specs, price, color, isPopular }: any) {
    return (
        <WavyCard className="h-full">
            <div className={`h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all relative ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
                {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                    </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-1 font-[Avenir]">{title}</h3>
                {subtitle && <p className={`text-sm ${color} font-bold mb-4`}>{subtitle}</p>}
                <p className="text-white/60 mb-6 font-[Sansation]">{desc}</p>
                <div className="space-y-3 mb-6">
                    {specs.map((s: string) => (
                        <div key={s} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg">
                            <span className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} /> {s}
                        </div>
                    ))}
                </div>
                {price && (
                    <div className="border-t border-white/10 pt-6">
                        <div className="text-white/40 text-sm mb-1">Starting at</div>
                        <div className="text-2xl font-bold text-white">{price}<span className="text-white/40 text-sm">/month</span></div>
                    </div>
                )}
            </div>
        </WavyCard>
    );
}

function OSCard({ name }: { name: string }) {
    return (
        <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors font-bold text-white">
            {name}
        </div>
    );
}

function UseCaseCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-white/60 text-sm font-[Sansation]">{desc}</p>
        </div>
    );
}

function KBLink({ title }: { title: string }) {
    return (
        <a href="#" className="block group">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-blue-500/50 transition-colors">
                <span className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
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
                className="w-full flex items-center justify-between py-6 text-left hover:text-blue-400 transition-colors focus:outline-none"
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
