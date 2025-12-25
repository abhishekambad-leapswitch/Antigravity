import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Globe, Lock, ArrowRight, Quote, BookOpen, Cloud, Video, BarChart3, Archive, Shield, ChevronDown, ChevronUp, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function S3StoragePage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-400 font-bold mb-8">
                    <Database className="w-4 h-4" /> Global Object Storage
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Reliable, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">High-Throughput Storage</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    S3-API compatible storage for data lakes, backups, and media serving. Built-in global CDN integration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-emerald-600 rounded-full font-bold text-white hover:bg-emerald-500 transition-all flex items-center gap-2">
                        Create Bucket <ArrowRight className="w-5 h-5" />
                    </button>
                    <Link to="/pricing">
                        <button className="px-8 py-4 bg-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all">
                            View Pricing
                        </button>
                    </Link>
                </div>
            </div>

            {/* Key Features Grid */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Globe}
                        title="Global CDN Included"
                        desc="Deliver content with low latency worldwide. Our integrated Content Delivery Network accelerates asset delivery automatically."
                    />
                    <FeatureCard
                        icon={Lock}
                        title="Immutable Buckets"
                        desc="Protect your critical data from accidental deletion or ransomware with Write-Once-Read-Many (WORM) policies."
                    />
                    <FeatureCard
                        icon={Database}
                        title="Zero Ingress Fees"
                        desc="Migrate your data to CloudPe for free. We never charge for incoming bandwidth, making data lakes cost-effective."
                    />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Object storage is ideal for storing unstructured data at any scale.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard
                        icon={BarChart3}
                        title="Data Lakes"
                        desc="Store petabytes of raw data for analytics, machine learning, and business intelligence workloads."
                    />
                    <UseCaseCard
                        icon={Archive}
                        title="Backup & Disaster Recovery"
                        desc="Durable backup storage with 11 nines durability. Protect critical data with versioning and replication."
                    />
                    <UseCaseCard
                        icon={Cloud}
                        title="Static Website Hosting"
                        desc="Host static websites directly from S3 buckets with custom domains and SSL certificates."
                    />
                    <UseCaseCard
                        icon={Video}
                        title="Media Streaming"
                        desc="Store and deliver video, audio, and images with CDN integration for global low-latency access."
                    />
                    <UseCaseCard
                        icon={Server}
                        title="Application Assets"
                        desc="Store user uploads, profile images, documents, and other application-generated content."
                    />
                    <UseCaseCard
                        icon={Shield}
                        title="Compliance Archives"
                        desc="Immutable storage with WORM policies for regulatory compliance and legal hold requirements."
                    />
                </div>
            </div>

            {/* Pricing Preview */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <div className="bg-gradient-to-br from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-3xl p-10 text-center backdrop-blur-md">
                    <h2 className="text-3xl font-bold mb-4 font-[Avenir]">Simple, Transparent Pricing</h2>
                    <p className="text-white/60 mb-8 font-[Sansation]">Pay only for the storage you use. No hidden fees.</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">Storage</div>
                            <div className="text-4xl font-bold text-white mb-1">₹3.1</div>
                            <div className="text-white/50 text-sm">/GB/month</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">Ingress</div>
                            <div className="text-4xl font-bold text-emerald-400 mb-1">FREE</div>
                            <div className="text-white/50 text-sm">Unlimited uploads</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">API Requests</div>
                            <div className="text-4xl font-bold text-white mb-1">₹0</div>
                            <div className="text-white/50 text-sm">Included</div>
                        </div>
                    </div>

                    <Link to="/pricing">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                            View Full Pricing <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Client Logs / Testimonials */}
            <div className="max-w-[1000px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Trusted by Data-Driven Teams</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <TestimonialCard
                        quote="Moving 500TB of medical imaging data to CloudPe S3 saved us 60% compared to AWS. The throughput is incredible."
                        author="CTO, MedTech AI"
                    />
                    <TestimonialCard
                        quote="The S3 compatibility meant we didn't have to rewrite a single line of code. It just worked instantly."
                        author="Lead DevOps, StreamLine"
                    />
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
                            <h3 className="text-xl font-bold font-[Avenir]">Object Storage Guides</h3>
                            <p className="text-white/60 text-sm">Getting started with buckets and objects.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="How to create S3 Object Storage & Generate Keys" />
                        <KBLink title="How to configure bucket policies" />
                        <KBLink title="How to set up static website hosting" />
                        <KBLink title="How to enable versioning and lifecycle rules" />
                        <KBLink title="How to use S3 with AWS CLI" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="Is CloudPe S3 compatible with AWS S3?"
                        answer="Yes, CloudPe Object Storage is fully S3-API compatible. You can use existing tools like AWS CLI, SDKs, and applications without modification. Just change the endpoint URL to point to CloudPe."
                    />
                    <FAQItem
                        question="How do I generate access keys?"
                        answer="Access keys can be generated from the CloudPe console under Storage > S3 Object Storage > Access Keys. You'll receive an Access Key ID and Secret Access Key for API authentication."
                    />
                    <FAQItem
                        question="Is there a free tier?"
                        answer="While we don't offer a free storage tier, ingress (uploads) are completely free. You only pay for stored data at ₹3.1/GB/month, making it cost-effective for data migration and backups."
                    />
                    <FAQItem
                        question="How is storage billed?"
                        answer="Storage is billed based on the average GB stored per month. We calculate daily usage and bill at month-end. There are no minimum fees or commitments."
                    />
                    <FAQItem
                        question="Can I host a static website?"
                        answer="Yes, CloudPe S3 supports static website hosting. Configure your bucket for public access, set an index document, and optionally use a custom domain with SSL."
                    />
                    <FAQItem
                        question="Is my data encrypted?"
                        answer="Yes, all data is encrypted at rest using AES-256 encryption. Data in transit is encrypted via HTTPS. You can also use client-side encryption for additional security."
                    />
                    <FAQItem
                        question="What is the durability guarantee?"
                        answer="CloudPe S3 provides 99.999999999% (11 nines) durability. Data is replicated across multiple availability zones with automatic integrity checks."
                    />
                    <FAQItem
                        question="Are there egress fees?"
                        answer="Yes, egress (downloads) are charged based on bandwidth used. However, data transfer within the same region is free, and CDN-served content has reduced egress costs."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to store at scale?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Create your first bucket in seconds. No minimum fees.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all">
                        Create Bucket
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
            <div className="h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
                <MetallicIconWrapper icon={Icon} size={48} />
                <h3 className="text-xl font-bold mt-6 mb-3 font-[Avenir]">{title}</h3>
                <p className="text-white/60 leading-relaxed font-[Sansation]">{desc}</p>
            </div>
        </WavyCard>
    );
}

function UseCaseCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-white/60 text-sm font-[Sansation]">{desc}</p>
        </div>
    );
}

function TestimonialCard({ quote, author }: any) {
    return (
        <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] relative">
            <Quote className="w-8 h-8 text-white/20 absolute top-6 left-6" />
            <p className="text-lg text-white/80 italic mb-6 relative z-10 pl-4 border-l-2 border-emerald-500">
                "{quote}"
            </p>
            <div className="text-sm font-bold text-white/40 uppercase tracking-widest pl-4">
                — {author}
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
