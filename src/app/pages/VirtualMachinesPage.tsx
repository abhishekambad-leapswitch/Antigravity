import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, Shield, Cpu, Zap, ArrowRight, Terminal, ChevronDown, ChevronUp, BookOpen, Monitor, Globe, Box, Layers, Clock, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function VirtualMachinesPage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 font-bold mb-8">
                    <Server className="w-4 h-4" /> Compute Infrastructure
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Secure, Scalable <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Virtual Machines</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    Deploy high-performance VMs in seconds. Full root access, 99.99% SLA, and a choice of powerful Intel & AMD processors.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/pricing">
                        <button className="px-8 py-4 bg-blue-600 rounded-full font-bold text-white hover:bg-blue-500 transition-all flex items-center gap-2">
                            View Pricing <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all">
                        Deploy Now
                    </button>
                </div>
            </div>

            {/* Key Features Grid */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Shield}
                        title="99.99% Uptime SLA"
                        desc="Enterprise-grade reliability with automated failover and redundant power/network infrastructure."
                    />
                    <FeatureCard
                        icon={Terminal}
                        title="Full Root Access"
                        desc="Complete control over your environment. Install any custom software, kernel modules, or Docker containers."
                    />
                    <FeatureCard
                        icon={Cpu}
                        title="Intel & AMD Power"
                        desc="Choose between high-frequency Compute Optimized (Intel Xeon) or cost-effective General Purpose (AMD EPYC) chips."
                    />
                </div>
            </div>

            {/* Instance Types / Flavors */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Choose Your Instance Type</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Optimized configurations for every workload, from web servers to data processing.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <FlavorCard
                        title="General Purpose"
                        subtitle="a.gp1 series"
                        icon={Box}
                        desc="Balanced vCPU and RAM ratios. Ideal for web servers, microservices, and small databases."
                        specs={["1:4 vCPU to RAM ratio", "Up to 32 vCPUs", "NVMe Storage included"]}
                        startingPrice="₹1,516"
                        color="text-blue-400"
                        bgColor="bg-blue-500/10"
                    />
                    <FlavorCard
                        title="CPU Optimized"
                        subtitle="a.cpu1 series"
                        icon={Cpu}
                        desc="High clock speed vCPUs. Perfect for CI/CD pipelines, video encoding, and batch processing."
                        specs={["1:2 vCPU to RAM ratio", "3.5GHz+ Clock Speed", "Dedicated Threads"]}
                        startingPrice="₹1,117"
                        color="text-orange-400"
                        bgColor="bg-orange-500/10"
                        isPopular
                    />
                    <FlavorCard
                        title="Memory Optimized"
                        subtitle="a.mem1 series"
                        icon={Layers}
                        desc="High RAM ratios. Designed for in-memory caches (Redis), large databases, and real-time analytics."
                        specs={["1:8 vCPU to RAM ratio", "Up to 512GB RAM", "High Throughput I/O"]}
                        startingPrice="₹1,366"
                        color="text-green-400"
                        bgColor="bg-green-500/10"
                    />
                </div>
            </div>

            {/* Supported Operating Systems */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Supported Operating Systems</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Deploy with your preferred OS. One-click deployments with pre-configured images.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <OSCard name="Ubuntu 24.04" type="linux" />
                    <OSCard name="Ubuntu 22.04" type="linux" />
                    <OSCard name="Debian 12" type="linux" />
                    <OSCard name="CentOS Stream" type="linux" />
                    <OSCard name="Rocky Linux 9" type="linux" />
                    <OSCard name="Fedora 40" type="linux" />
                    <OSCard name="Windows Server 2022" type="windows" />
                    <OSCard name="Windows Server 2019" type="windows" />
                    <OSCard name="AlmaLinux 9" type="linux" />
                    <OSCard name="Arch Linux" type="linux" />
                    <OSCard name="openSUSE" type="linux" />
                    <OSCard name="Custom ISO" type="custom" />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Virtual machines are the foundation for building any cloud application.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard
                        icon={Globe}
                        title="Web Hosting & Applications"
                        desc="Host websites, web apps, and API servers with automatic scaling capabilities."
                    />
                    <UseCaseCard
                        icon={Server}
                        title="API Servers & Microservices"
                        desc="Deploy containerized microservices or traditional API backends with high availability."
                    />
                    <UseCaseCard
                        icon={Terminal}
                        title="Development & Testing"
                        desc="Spin up ephemeral dev/test environments that mirror production configurations."
                    />
                    <UseCaseCard
                        icon={Cpu}
                        title="Data Processing"
                        desc="Run batch processing jobs, ETL pipelines, and data transformation workloads."
                    />
                    <UseCaseCard
                        icon={Shield}
                        title="Enterprise Workloads"
                        desc="Deploy ERP systems, CRM applications, and internal business tools securely."
                    />
                    <UseCaseCard
                        icon={HardDrive}
                        title="Database Hosting"
                        desc="Self-managed MySQL, PostgreSQL, MongoDB, and other database deployments."
                    />
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
                                View All Instance Types <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Developer Tools Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10 grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-[Avenir]">Built for Developers</h2>
                    <p className="text-white/60 mb-8 leading-relaxed font-[Sansation]">
                        Automate your infrastructure with our powerful API, Terraform provider, and CLI tool.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> RESTful API</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> Terraform Provider</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> CloudPe CLI</li>
                        <li className="flex items-center gap-3 text-white/80"><Terminal className="w-5 h-5 text-blue-400" /> Webhooks & Events</li>
                    </ul>
                </div>
                <div className="bg-black/50 rounded-xl p-6 border border-white/10 font-mono text-sm text-white/80 shadow-2xl">
                    <div className="text-green-400 mb-2"># Create a VM using CLI</div>
                    <div className="text-white mb-4">$ cloudpe vm create \</div>
                    <div className="text-white/60 pl-4">--name web-server-01 \</div>
                    <div className="text-white/60 pl-4">--flavor a.gp1.8g \</div>
                    <div className="text-white/60 pl-4">--image ubuntu-24.04 \</div>
                    <div className="text-white/60 pl-4">--region mum-1</div>
                    <div className="text-blue-400 mt-4">✓ VM created: vm_a3f82k (2 vCPU, 8GB RAM)</div>
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
                            <h3 className="text-xl font-bold font-[Avenir]">Virtual Machine Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to deploy and manage VMs.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="How to create a Virtual Machine using the console" />
                        <KBLink title="How to connect to your VM via SSH" href="https://www.cloudpe.com/knowledge-base/how-to-create-a-virtual-machine-vm-in-cloudpe-using-api/" />
                        <KBLink title="How to set up firewall rules" />
                        <KBLink title="How to take VM snapshots for backup" />
                        <KBLink title="How to resize your VM instance" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="What vCPU and RAM options are available?"
                        answer="CloudPe offers a wide range of configurations from 1 vCPU / 4GB RAM up to 64 vCPU / 512GB RAM. Choose from General Purpose (a.gp1), CPU Optimized (a.cpu1), or Memory Optimized (a.mem1) series based on your workload requirements."
                    />
                    <FAQItem
                        question="Do you offer Windows VMs?"
                        answer="Yes, we offer Windows Server 2019 and Windows Server 2022 images. Windows VMs are priced the same as Linux VMs on our platform, with the Windows license included in the price."
                    />
                    <FAQItem
                        question="How quickly can I deploy a VM?"
                        answer="VMs typically deploy within 30-60 seconds. You'll receive SSH access credentials immediately after provisioning is complete. Our API allows for automated deployments in seconds."
                    />
                    <FAQItem
                        question="Can I upgrade/downgrade my instance?"
                        answer="Yes, you can vertically scale your VM by changing its flavor. This requires a brief restart. For zero-downtime scaling, we recommend using load balancers with multiple instances."
                    />
                    <FAQItem
                        question="Is there an SLA guarantee?"
                        answer="Yes, CloudPe provides a 99.99% uptime SLA for all virtual machines. If we fail to meet this, you're eligible for service credits as outlined in our SLA policy."
                    />
                    <FAQItem
                        question="How is billing calculated?"
                        answer="You can choose between hourly and monthly billing. Hourly billing is calculated per-second of usage. Monthly billing provides a fixed rate with reserved capacity. Prices include 30GB of block storage."
                    />
                    <FAQItem
                        question="What networking options are included?"
                        answer="Each VM includes a public IPv4 address, private networking, 1Gbps network port, and generous bandwidth. VPC (Virtual Private Cloud) is available at no extra cost for network isolation."
                    />
                    <FAQItem
                        question="Can I use my own ISO image?"
                        answer="Yes, CloudPe supports custom ISO uploads. You can bring your own operating system or software distribution. Custom ISOs can be uploaded via the console or API."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to deploy?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Launch your first VM in under 60 seconds.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all">
                        Deploy VM Now
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

function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <WavyCard className="h-full">
            <div className="h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <MetallicIconWrapper icon={Icon} size={48} />
                <h3 className="text-xl font-bold mt-6 mb-3 font-[Avenir]">{title}</h3>
                <p className="text-white/60 leading-relaxed font-[Sansation]">{desc}</p>
            </div>
        </WavyCard>
    );
}

function FlavorCard({ title, subtitle, icon: Icon, desc, specs, startingPrice, color, bgColor, isPopular }: any) {
    return (
        <WavyCard className="h-full">
            <div className={`h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all relative ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
                {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                    </div>
                )}
                <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-6 ${color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-1 font-[Avenir]">{title}</h3>
                <p className={`text-sm ${color} font-bold mb-4`}>{subtitle}</p>
                <p className="text-white/60 mb-6 font-[Sansation]">{desc}</p>
                <div className="space-y-3 mb-6">
                    {specs.map((s: string) => (
                        <div key={s} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg">
                            <span className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} /> {s}
                        </div>
                    ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                    <div className="text-white/40 text-sm mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-white">{startingPrice}<span className="text-white/40 text-sm">/month</span></div>
                </div>
            </div>
        </WavyCard>
    );
}

function OSCard({ name, type }: { name: string; type: 'linux' | 'windows' | 'custom' }) {
    const colors = {
        linux: 'border-orange-500/30 hover:border-orange-500',
        windows: 'border-blue-500/30 hover:border-blue-500',
        custom: 'border-purple-500/30 hover:border-purple-500'
    };

    return (
        <div className={`p-4 border ${colors[type]} rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center cursor-pointer`}>
            <Monitor className="w-6 h-6 mx-auto mb-2 text-white/60" />
            <div className="text-sm font-medium text-white">{name}</div>
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

function KBLink({ title, href = "#" }: { title: string; href?: string }) {
    return (
        <a href={href} target={href !== "#" ? "_blank" : undefined} rel="noreferrer" className="block group">
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
