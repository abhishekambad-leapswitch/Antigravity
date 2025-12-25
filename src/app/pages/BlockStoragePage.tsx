import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HardDrive, Zap, Save, ArrowRight, Database, Shield, Server, Clock, ChevronDown, ChevronUp, BookOpen, Gauge, Scale, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function BlockStoragePage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-400 font-bold mb-8">
                    <HardDrive className="w-4 h-4" /> NVMe Performance
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    High-Performance <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Block Storage</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    Attach expandable NVMe volumes to your instances. Designed for I/O intensive databases and mission-critical applications.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/pricing">
                        <button className="px-8 py-4 bg-purple-600 rounded-full font-bold text-white hover:bg-purple-500 transition-all flex items-center gap-2">
                            See Volume Pricing <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all">
                        Create Volume
                    </button>
                </div>
            </div>

            {/* Key Features Grid */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Zap}
                        title="1GB/s Throughput"
                        desc="Experience lightning-fast read/write speeds. Our storage uses enterprise-grade NVMe SSDs for minimal latency."
                    />
                    <FeatureCard
                        icon={Save}
                        title="Instant Snapshots"
                        desc="Create point-in-time backups of your volumes instantly. Clone volumes from snapshots for testing or recovery."
                    />
                    <FeatureCard
                        icon={HardDrive}
                        title="Resizable Volumes"
                        desc="Start small and grow. Expand your storage volumes on the fly as your data requirements increase without downtime."
                    />
                </div>
            </div>

            {/* Technical Specifications */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Technical Specifications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SpecCard icon={Scale} label="Max Volume Size" value="16 TB" />
                    <SpecCard icon={Gauge} label="Max IOPS" value="64,000" />
                    <SpecCard icon={Zap} label="Max Throughput" value="1 GB/s" />
                    <SpecCard icon={Clock} label="Latency" value="<1ms" />
                </div>

                <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <h3 className="text-xl font-bold mb-6 font-[Avenir]">Volume Types</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-white/40 text-sm border-b border-white/5">
                                    <th className="p-4 font-medium">Type</th>
                                    <th className="p-4 font-medium">Use Case</th>
                                    <th className="p-4 font-medium">IOPS</th>
                                    <th className="p-4 font-medium">Throughput</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/80 font-[Sansation]">
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-purple-400">Standard NVMe</td>
                                    <td className="p-4">General workloads, boot volumes</td>
                                    <td className="p-4">Up to 16,000</td>
                                    <td className="p-4">Up to 250 MB/s</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-purple-400">High-Performance NVMe</td>
                                    <td className="p-4">Databases, analytics</td>
                                    <td className="p-4">Up to 64,000</td>
                                    <td className="p-4">Up to 1 GB/s</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Block storage is ideal for applications requiring consistent, low-latency performance.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard
                        icon={Database}
                        title="Database Workloads"
                        desc="MySQL, PostgreSQL, MongoDB, and other databases requiring high IOPS and low latency."
                    />
                    <UseCaseCard
                        icon={Server}
                        title="Boot Volumes"
                        desc="Primary boot drives for virtual machines with fast startup times and reliable performance."
                    />
                    <UseCaseCard
                        icon={Zap}
                        title="High-Performance Apps"
                        desc="Applications requiring consistent I/O performance like ERP systems and transaction processing."
                    />
                    <UseCaseCard
                        icon={RefreshCw}
                        title="CI/CD Pipelines"
                        desc="Fast build and test environments with rapid read/write operations for development workflows."
                    />
                    <UseCaseCard
                        icon={HardDrive}
                        title="Container Storage"
                        desc="Persistent storage for Kubernetes pods and Docker containers with CSI driver support."
                    />
                    <UseCaseCard
                        icon={Shield}
                        title="Data Analytics"
                        desc="High-throughput storage for data processing, ETL jobs, and real-time analytics workloads."
                    />
                </div>
            </div>

            {/* Pricing Preview */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-3xl p-10 text-center backdrop-blur-md">
                    <h2 className="text-3xl font-bold mb-4 font-[Avenir]">Simple, Transparent Pricing</h2>
                    <p className="text-white/60 mb-8 font-[Sansation]">Pay only for the storage you use. No hidden fees.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">Block Storage</div>
                            <div className="text-4xl font-bold text-white mb-1">₹6.2</div>
                            <div className="text-white/50 text-sm">/GB/month</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">Snapshots</div>
                            <div className="text-4xl font-bold text-white mb-1">₹6.2</div>
                            <div className="text-white/50 text-sm">/GB/month</div>
                        </div>
                    </div>

                    <Link to="/pricing">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                            View Full Pricing <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Knowledge Base Section */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Knowledge Base & Guides</h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                            <BookOpen className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-[Avenir]">Block Storage Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to create and manage volumes.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="How to create a block storage volume" />
                        <KBLink title="How to attach volumes to VMs" />
                        <KBLink title="How to take and restore snapshots" />
                        <KBLink title="How to resize volumes without downtime" />
                        <KBLink title="Best practices for database storage" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="What is block storage?"
                        answer="Block storage provides raw storage volumes that can be attached to virtual machines. Unlike object storage, block storage offers low-latency, high-IOPS performance ideal for databases and applications requiring file system access."
                    />
                    <FAQItem
                        question="How do I attach a volume to my VM?"
                        answer="You can attach a volume through the CloudPe console or API. Navigate to your volume, select 'Attach', and choose the target VM. The volume will be available as a block device that you can format and mount."
                    />
                    <FAQItem
                        question="Can I resize volumes without downtime?"
                        answer="Yes, you can expand block storage volumes online without unmounting or detaching them. Simply increase the size in the console, then extend the filesystem from within your VM. Note: You can only increase size, not decrease."
                    />
                    <FAQItem
                        question="What is the maximum volume size?"
                        answer="CloudPe block storage volumes can be up to 16TB in size. You can attach multiple volumes to a single VM if you need more storage capacity."
                    />
                    <FAQItem
                        question="How do snapshots work?"
                        answer="Snapshots create a point-in-time copy of your volume. They are incremental, meaning only changed blocks are stored after the first snapshot. You can use snapshots for backups or to create new volumes."
                    />
                    <FAQItem
                        question="Is my data encrypted?"
                        answer="Yes, all block storage volumes are encrypted at rest using AES-256 encryption. Data in transit is also encrypted. You maintain full control over your encryption keys."
                    />
                    <FAQItem
                        question="Can I use block storage with Kubernetes?"
                        answer="Yes, CloudPe provides a CSI (Container Storage Interface) driver for Kubernetes. This allows you to dynamically provision block storage volumes as persistent volumes for your pods."
                    />
                    <FAQItem
                        question="What happens to my data if I delete a VM?"
                        answer="Block storage volumes persist independently of VMs. If you delete a VM, attached volumes are detached but not deleted. You can reattach them to another VM or delete them separately."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to get started?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Deploy high-performance block storage in seconds.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] transition-all">
                        Create Volume
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
            <div className="h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                <MetallicIconWrapper icon={Icon} size={48} />
                <h3 className="text-xl font-bold mt-6 mb-3 font-[Avenir]">{title}</h3>
                <p className="text-white/60 leading-relaxed font-[Sansation]">{desc}</p>
            </div>
        </WavyCard>
    );
}

function SpecCard({ icon: Icon, label, value }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-colors">
            <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <div className="text-white/40 text-sm mb-1">{label}</div>
            <div className="text-2xl font-bold text-white">{value}</div>
        </div>
    );
}

function UseCaseCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-white/60 text-sm font-[Sansation]">{desc}</p>
        </div>
    );
}

function KBLink({ title }: { title: string }) {
    return (
        <a href="#" className="block group">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-purple-500/50 transition-colors">
                <span className="font-medium text-white group-hover:text-purple-400 transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-purple-400 transition-colors" />
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
                className="w-full flex items-center justify-between py-6 text-left hover:text-purple-400 transition-colors focus:outline-none"
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
