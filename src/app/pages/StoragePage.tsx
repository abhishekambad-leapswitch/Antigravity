import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, HardDrive, Shield, ArrowRight, Save, Scale, RefreshCw, Zap, BookOpen, ChevronDown, ChevronUp, Archive, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function StoragePage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-400 font-bold mb-8">
                    <Database className="w-4 h-4" /> Durable Cloud Storage
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Secure Data <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">for Any Scale</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    From high-performance NVMe block storage for databases to infinite S3-compatible object storage for data lakes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/products/storage/s3">
                        <button className="px-8 py-4 bg-emerald-600 rounded-full font-bold text-white hover:bg-emerald-500 transition-all flex items-center gap-2">
                            Explore Object Storage <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <Link to="/products/storage/block">
                        <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2">
                            Explore Block Storage <HardDrive className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Storage Types Grid */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Object Storage */}
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-emerald-900/10 to-transparent border border-emerald-500/30 rounded-3xl p-10 relative overflow-hidden">
                            <div className="mb-8">
                                <MetallicIconWrapper icon={Database} size={56} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 font-[Avenir]">S3 Object Storage</h2>
                            <p className="text-white/60 mb-8 font-[Sansation] text-lg">
                                S3-compatible, scalable storage for backups, media, and unstructured data. Pay only for what you store.
                            </p>
                            <div className="space-y-4 mb-8">
                                <StorageFeature icon={Scale} text="Infinite Scalability" />
                                <StorageFeature icon={RefreshCw} text="Zero Ingress Fees" />
                                <StorageFeature icon={Shield} text="11 Nines Durability" />
                            </div>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl font-bold text-white">₹3.1</span>
                                <span className="text-white/50">/GB/mo</span>
                            </div>
                            <Link to="/products/storage/s3">
                                <button className="w-full py-3 bg-emerald-600 rounded-lg font-bold text-white hover:bg-emerald-500 transition-colors">Create Bucket</button>
                            </Link>
                        </div>
                    </WavyCard>

                    {/* Block Storage */}
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-10 relative overflow-hidden">
                            <div className="mb-8">
                                <MetallicIconWrapper icon={HardDrive} size={56} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 font-[Avenir]">Block Storage</h2>
                            <p className="text-white/60 mb-8 font-[Sansation] text-lg">
                                High-performance NVMe volumes attachable to any compute instance. Ideal for databases and boot drives.
                            </p>
                            <div className="space-y-4 mb-8">
                                <StorageFeature icon={Zap} text="Low Latency NVMe" />
                                <StorageFeature icon={Save} text="Instant Snapshots" />
                                <StorageFeature icon={Scale} text="Resize on-the-fly" />
                            </div>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl font-bold text-white">₹6.2</span>
                                <span className="text-white/50">/GB/mo</span>
                            </div>
                            <Link to="/products/storage/block">
                                <button className="w-full py-3 bg-white/10 rounded-lg font-bold text-white hover:bg-white/20 transition-colors">Create Volume</button>
                            </Link>
                        </div>
                    </WavyCard>
                </div>
            </div>

            {/* Additional Storage Options */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Additional Storage Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <AddonCard
                        icon={Camera}
                        title="Snapshots"
                        desc="Point-in-time copies of your block storage volumes for backup and recovery."
                        price="₹6.2/GB/mo"
                    />
                    <AddonCard
                        icon={Archive}
                        title="Backups"
                        desc="Automated backup service with retention policies and easy restore options."
                        price="₹2.0/GB/mo"
                    />
                </div>
            </div>

            {/* Use Case Comparison */}
            <div className="max-w-[1000px] mx-auto mb-32 text-center relative z-10">
                <h2 className="text-3xl font-bold mb-12 font-[Avenir]">Which storage do I need?</h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-emerald-400 mb-4">Use Object Storage for...</h3>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Hosting static website assets (images, css)</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Long-term backups and archives</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Data lakes for big data analytics</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Content delivery for streaming apps</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Machine learning training datasets</li>
                        </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Use Block Storage for...</h3>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Primary boot drives for VMs</li>
                            <li className="flex items-start gap-2"><span className="text-purple-400">•</span> High-performance databases (MySQL, Mongo)</li>
                            <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Applications requiring file system access</li>
                            <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Local caching for fast access</li>
                            <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Kubernetes persistent volumes</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Knowledge Base Section */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Knowledge Base & Guides</h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-emerald-500/20 rounded-lg">
                            <BookOpen className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-[Avenir]">Storage Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to use CloudPe storage services.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="Getting started with Object Storage" />
                        <KBLink title="How to attach block storage to a VM" />
                        <KBLink title="How to take and restore snapshots" />
                        <KBLink title="Best practices for database storage" />
                        <KBLink title="Migrating data from AWS S3" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="What storage options are available?"
                        answer="CloudPe offers two primary storage types: Object Storage (S3-compatible at ₹3.1/GB/mo) for unstructured data, backups, and media, and Block Storage (NVMe at ₹6.2/GB/mo) for databases and applications requiring file system access."
                    />
                    <FAQItem
                        question="When should I use Object vs Block storage?"
                        answer="Use Object Storage for unstructured data like images, videos, backups, and data lakes. Use Block Storage when you need a file system for databases, application data, or boot volumes that require low-latency access."
                    />
                    <FAQItem
                        question="How is storage billed?"
                        answer="Storage is billed based on the average GB stored per month. We calculate daily usage and bill at month-end. Object storage charges ₹3.1/GB/mo, Block storage ₹6.2/GB/mo, Snapshots ₹6.2/GB/mo, and Backups ₹2.0/GB/mo."
                    />
                    <FAQItem
                        question="Can I expand storage without downtime?"
                        answer="Yes, both storage types support online expansion. For Object Storage, there's no limit - just upload more data. For Block Storage, you can increase volume size without unmounting, then extend the filesystem from within your VM."
                    />
                    <FAQItem
                        question="Is my data encrypted at rest?"
                        answer="Yes, all storage is encrypted at rest using AES-256 encryption. Object Storage also supports server-side encryption with customer-managed keys. Data in transit is encrypted via HTTPS/TLS."
                    />
                    <FAQItem
                        question="What is the maximum storage size?"
                        answer="Object Storage has no practical limit - store petabytes of data. Block Storage volumes can be up to 16TB each, and you can attach multiple volumes to a single VM for larger capacity."
                    />
                    <FAQItem
                        question="How do backups work?"
                        answer="For Block Storage, you can take instant snapshots which are stored at ₹6.2/GB/mo. Automated backups are available at ₹2.0/GB/mo with configurable retention policies. Object Storage supports versioning for data protection."
                    />
                    <FAQItem
                        question="What is the durability guarantee?"
                        answer="Object Storage provides 99.999999999% (11 nines) durability with data replicated across multiple availability zones. Block Storage provides 99.99% availability with redundant hardware and automatic data replication."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to store your data?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Get started with CloudPe storage in seconds.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/products/storage/s3">
                        <button className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all">
                            Create Object Bucket
                        </button>
                    </Link>
                    <Link to="/products/storage/block">
                        <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/5 transition-all">
                            Create Block Volume
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function StorageFeature({ icon: Icon, text }: any) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <Icon className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white/90 font-medium">{text}</span>
        </div>
    );
}

function AddonCard({ icon: Icon, title, desc, price }: any) {
    return (
        <div className="flex items-start gap-4 p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-white mb-1 font-[Avenir]">{title}</h4>
                <p className="text-sm text-white/50 mb-2 font-[Sansation]">{desc}</p>
                <div className="text-emerald-400 font-bold">{price}</div>
            </div>
        </div>
    );
}

function KBLink({ title }: { title: string }) {
    return (
        <a href="#" className="block group">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-emerald-400 transition-colors" />
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
                className="w-full flex items-center justify-between py-6 text-left hover:text-emerald-400 transition-colors focus:outline-none"
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
