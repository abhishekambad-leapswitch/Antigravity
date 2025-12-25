import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Box, RefreshCw, ShieldCheck, ArrowRight, BookOpen, Cpu, Server, Layers, Zap, ChevronDown, ChevronUp, Globe, Terminal, Activity, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";
import { MetallicIconWrapper } from "../components/MetallicIcon";

export function KubernetesPage() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 font-bold mb-8">
                    <Box className="w-4 h-4" /> Cloud Native Infrastructure
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-[Avenir]"
                >
                    Production-Ready <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">K8s Clusters</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-[Sansation]">
                    Fully managed Kubernetes service. We handle the control plane upgrades, security patching, and scaling so you can focus on shipping code.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-cyan-600 rounded-full font-bold text-white hover:bg-cyan-500 transition-all flex items-center gap-2">
                        Create Cluster <ArrowRight className="w-5 h-5" />
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
                        icon={RefreshCw}
                        title="One-Click Upgrades"
                        desc="Stay on the latest stable Kubernetes version with zero-downtime rolling upgrades for your node pools."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Free HA Control Plane"
                        desc="We provide a highly available control plane at no cost. You only pay for the compute resources (worker nodes) you use."
                    />
                    <FeatureCard
                        icon={Box}
                        title="Auto-Scaling"
                        desc="Horizontal Pod Autoscaling (HPA) and Cluster Autoscaling strictly integrated to handle traffic spikes effortlessly."
                    />
                </div>
            </div>

            {/* Architecture Overview */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Architecture Overview</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    CloudPe manages the control plane so you can focus on your applications.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Control Plane - Managed */}
                    <div className="bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            MANAGED BY CLOUDPE
                        </div>
                        <div className="mb-6">
                            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck className="w-7 h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-[Avenir]">Control Plane</h3>
                            <p className="text-white/60 font-[Sansation]">Fully managed, highly available, and free.</p>
                        </div>
                        <div className="space-y-3">
                            <ArchItem text="API Server (3 replicas)" />
                            <ArchItem text="etcd Cluster (encrypted)" />
                            <ArchItem text="Controller Manager" />
                            <ArchItem text="Scheduler" />
                            <ArchItem text="Automatic Upgrades" />
                            <ArchItem text="Security Patching" />
                        </div>
                        <div className="mt-6 pt-6 border-t border-cyan-500/20">
                            <div className="text-3xl font-bold text-cyan-400">FREE</div>
                            <div className="text-white/40 text-sm">No control plane charges</div>
                        </div>
                    </div>

                    {/* Worker Nodes - User pays */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                            YOU PAY FOR THIS
                        </div>
                        <div className="mb-6">
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                                <Server className="w-7 h-7 text-white/80" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-[Avenir]">Worker Nodes</h3>
                            <p className="text-white/60 font-[Sansation]">Choose your node configuration and scale.</p>
                        </div>
                        <div className="space-y-3">
                            <ArchItem text="General Purpose nodes (a.gp1)" />
                            <ArchItem text="CPU Optimized nodes (a.cpu1)" />
                            <ArchItem text="Memory Optimized nodes (a.mem1)" />
                            <ArchItem text="GPU nodes (L4, H200)" />
                            <ArchItem text="Multiple node pools" />
                            <ArchItem text="Auto-scaling enabled" />
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="text-white/40 text-sm mb-1">Starting at</div>
                            <div className="text-3xl font-bold text-white">₹1,117<span className="text-white/40 text-sm">/node/mo</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cluster Sizing Options */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Cluster Sizing Options</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    From development environments to enterprise-scale production clusters.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <ClusterCard
                        title="Development"
                        nodes="1-3 nodes"
                        desc="Perfect for local development, testing, and learning Kubernetes."
                        features={["Single node pool", "Manual scaling", "Dev/Test workloads"]}
                        price="₹1,117"
                    />
                    <ClusterCard
                        title="Production"
                        nodes="3-10 nodes"
                        desc="Recommended for production applications with high availability requirements."
                        features={["Multiple node pools", "Auto-scaling", "Load balancer included", "99.9% SLA"]}
                        price="₹3,351"
                        isPopular
                    />
                    <ClusterCard
                        title="Enterprise"
                        nodes="10+ nodes"
                        desc="Large-scale deployments with dedicated support and custom configurations."
                        features={["Unlimited node pools", "GPU nodes available", "Dedicated support", "Custom SLA"]}
                        price="Custom"
                    />
                </div>
            </div>

            {/* Node Pool Types */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Node Pool Types</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Mix and match node types to optimize for your workload requirements.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <NodePoolCard
                        title="General Purpose"
                        icon={Box}
                        desc="Balanced compute for most workloads"
                        price="₹1,516/mo"
                        color="text-blue-400"
                    />
                    <NodePoolCard
                        title="CPU Optimized"
                        icon={Cpu}
                        desc="High-frequency for compute-intensive tasks"
                        price="₹1,117/mo"
                        color="text-orange-400"
                    />
                    <NodePoolCard
                        title="Memory Optimized"
                        icon={Layers}
                        desc="High RAM for in-memory databases"
                        price="₹1,366/mo"
                        color="text-green-400"
                    />
                    <NodePoolCard
                        title="GPU Nodes"
                        icon={Zap}
                        desc="NVIDIA L4/H200 for ML workloads"
                        price="₹26,180/mo"
                        color="text-purple-400"
                    />
                </div>
            </div>

            {/* Add-on Integrations */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Built-in Integrations</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Pre-configured add-ons to enhance your Kubernetes experience.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <IntegrationCard icon={Activity} title="Monitoring" desc="Prometheus & Grafana stack for metrics and alerting" />
                    <IntegrationCard icon={Terminal} title="Logging" desc="Centralized logging with Loki or ELK stack integration" />
                    <IntegrationCard icon={Globe} title="Ingress Controller" desc="NGINX Ingress for traffic routing and SSL termination" />
                    <IntegrationCard icon={ShieldCheck} title="Cert-Manager" desc="Automatic TLS certificate provisioning with Let's Encrypt" />
                    <IntegrationCard icon={Database} title="Persistent Storage" desc="CSI driver for dynamic block storage provisioning" />
                    <IntegrationCard icon={Box} title="Helm Support" desc="Deploy applications using Helm charts from any repository" />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="max-w-[1200px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 font-[Avenir]">Use Cases</h2>
                <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-[Sansation]">
                    Kubernetes is ideal for modern, cloud-native applications.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UseCaseCard icon={Box} title="Containerized Applications" desc="Deploy and manage Docker containers at scale with orchestration." />
                    <UseCaseCard icon={Layers} title="Microservices Architecture" desc="Build loosely coupled services with independent scaling." />
                    <UseCaseCard icon={RefreshCw} title="CI/CD Pipelines" desc="Automated deployments with GitOps and continuous delivery." />
                    <UseCaseCard icon={Zap} title="Machine Learning Inference" desc="Serve ML models with GPU nodes and auto-scaling." />
                    <UseCaseCard icon={Activity} title="Auto-Scaling Workloads" desc="Handle traffic spikes with horizontal pod autoscaling." />
                    <UseCaseCard icon={Globe} title="Multi-Region Deployments" desc="Deploy across regions for high availability and low latency." />
                </div>
            </div>

            {/* Pricing Preview */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <div className="bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/30 rounded-3xl p-10 text-center backdrop-blur-md">
                    <h2 className="text-3xl font-bold mb-4 font-[Avenir]">Simple Kubernetes Pricing</h2>
                    <p className="text-white/60 mb-8 font-[Sansation]">Control plane is free. Pay only for worker nodes.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
                            <div className="text-cyan-400 text-sm font-bold mb-2">CONTROL PLANE</div>
                            <div className="text-5xl font-bold text-white mb-1">FREE</div>
                            <div className="text-white/50 text-sm">Fully managed, HA</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <div className="text-white/40 text-sm mb-2">WORKER NODES</div>
                            <div className="text-4xl font-bold text-white mb-1">₹1,117</div>
                            <div className="text-white/50 text-sm">/node/month (starting)</div>
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
                        <div className="p-3 bg-cyan-500/20 rounded-lg">
                            <BookOpen className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-[Avenir]">Kubernetes Guides</h3>
                            <p className="text-white/60 text-sm">Learn how to deploy and manage clusters.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <KBLink title="How to create a Managed Kubernetes Cluster" />
                        <KBLink title="How to deploy your first application" />
                        <KBLink title="How to configure Horizontal Pod Autoscaling" />
                        <KBLink title="How to set up Ingress and SSL" />
                        <KBLink title="How to add GPU nodes for ML workloads" />
                        <KBLink title="How to connect kubectl to your cluster" />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto mb-32 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="Is the Kubernetes control plane really free?"
                        answer="Yes, CloudPe provides the control plane at no cost. The control plane includes the API server, etcd, controller manager, and scheduler. You only pay for the worker nodes (VMs) that run your applications."
                    />
                    <FAQItem
                        question="What Kubernetes versions are supported?"
                        answer="We support the latest three minor versions of Kubernetes. When a new version is released, we test and make it available within 2-4 weeks. You can upgrade your cluster with one click."
                    />
                    <FAQItem
                        question="Can I use GPU nodes in my cluster?"
                        answer="Yes, you can add GPU node pools to your cluster. We offer NVIDIA L4 (₹26,180/month) and H200 (₹300/hour) GPUs for machine learning training and inference workloads."
                    />
                    <FAQItem
                        question="How do I connect kubectl to my cluster?"
                        answer="After creating your cluster, download the kubeconfig file from the console or use our CLI. Run 'cloudpe k8s kubeconfig' to automatically configure kubectl for your cluster."
                    />
                    <FAQItem
                        question="Does CloudPe K8s support auto-scaling?"
                        answer="Yes, we support both Horizontal Pod Autoscaling (HPA) for scaling pods and Cluster Autoscaler for automatically adding/removing nodes based on resource demands."
                    />
                    <FAQItem
                        question="What load balancer options are available?"
                        answer="CloudPe provides a cloud load balancer that integrates with Kubernetes Services of type LoadBalancer. It costs ₹2,000/month and supports Layer 4 and Layer 7 load balancing."
                    />
                    <FAQItem
                        question="Can I migrate my existing cluster?"
                        answer="Yes, you can migrate workloads from other Kubernetes clusters or cloud providers. We provide migration guides and our support team can assist with complex migrations."
                    />
                    <FAQItem
                        question="How are upgrades handled?"
                        answer="Control plane upgrades are automatic and zero-downtime. Node pool upgrades can be triggered manually with rolling updates, ensuring your workloads remain available during the upgrade."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-6 font-[Avenir]">Ready to go cloud native?</h2>
                <p className="text-white/60 mb-8 font-[Sansation]">Deploy your first Kubernetes cluster in minutes.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all">
                        Create Cluster
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
            <div className="h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
                <MetallicIconWrapper icon={Icon} size={48} />
                <h3 className="text-xl font-bold mt-6 mb-3 font-[Avenir]">{title}</h3>
                <p className="text-white/60 leading-relaxed font-[Sansation]">{desc}</p>
            </div>
        </WavyCard>
    );
}

function ArchItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 text-sm text-white/80">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {text}
        </div>
    );
}

function ClusterCard({ title, nodes, desc, features, price, isPopular }: any) {
    return (
        <WavyCard className="h-full">
            <div className={`h-full bg-block border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all relative ${isPopular ? 'ring-2 ring-cyan-500' : ''}`}>
                {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        RECOMMENDED
                    </div>
                )}
                <h3 className="text-2xl font-bold mb-1 font-[Avenir]">{title}</h3>
                <p className="text-cyan-400 font-bold mb-4">{nodes}</p>
                <p className="text-white/60 mb-6 font-[Sansation]">{desc}</p>
                <div className="space-y-3 mb-6">
                    {features.map((f: string) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {f}
                        </div>
                    ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                    <div className="text-white/40 text-sm mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-white">{price}<span className="text-white/40 text-sm">{price !== "Custom" ? "/mo" : ""}</span></div>
                </div>
            </div>
        </WavyCard>
    );
}

function NodePoolCard({ title, icon: Icon, desc, price, color }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
            <Icon className={`w-8 h-8 ${color} mb-4`} />
            <h4 className="font-bold text-lg mb-1 font-[Avenir]">{title}</h4>
            <p className="text-xs text-white/50 mb-4">{desc}</p>
            <div className="text-lg font-bold text-white">{price}</div>
        </div>
    );
}

function IntegrationCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex items-start gap-4 p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
                <h4 className="font-bold text-white mb-1 font-[Avenir]">{title}</h4>
                <p className="text-sm text-white/50 font-[Sansation]">{desc}</p>
            </div>
        </div>
    );
}

function UseCaseCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[Avenir]">{title}</h3>
            <p className="text-white/60 text-sm font-[Sansation]">{desc}</p>
        </div>
    );
}

function KBLink({ title }: { title: string }) {
    return (
        <a href="#" className="block group">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-cyan-400 transition-colors" />
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
                className="w-full flex items-center justify-between py-6 text-left hover:text-cyan-400 transition-colors focus:outline-none"
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
