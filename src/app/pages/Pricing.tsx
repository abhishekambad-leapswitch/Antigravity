
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";
import {
    Check, ChevronDown, ChevronUp, Server, Cpu, Database, Network,
    Monitor, HardDrive, Shield, Zap, Layers, Box
} from "lucide-react";
import { WavyCard, LiquidBackground } from "../components/WavyBlob";

export function Pricing() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen bg-black text-white">
            <LiquidBackground />

            {/* Header */}
            <div className="max-w-[1200px] mx-auto text-center mb-16 relative z-10 pt-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 font-[Avenir]"
                >
                    Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Pricing</span>
                </motion.h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 font-[Sansation]">
                    Pay only for what you use. No hidden fees or long-term commitments.
                </p>
                <p className="text-sm text-white/40 font-[Sansation]">
                    All prices include 30GB Block Storage (₹186/month). Hourly rates are per-second billing.
                </p>
            </div>

            {/* Pricing Tabs */}
            <div className="max-w-[1200px] mx-auto relative z-10 mb-24">
                <Tabs.Root defaultValue="compute" className="flex flex-col items-center">
                    <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-white/5 rounded-full backdrop-blur-md">
                        <PricingTabTrigger value="compute" label="Compute" icon={Server} />
                        <PricingTabTrigger value="gpu" label="GPU Cloud" icon={Cpu} />
                        <PricingTabTrigger value="storage" label="Storage" icon={Database} />
                        <PricingTabTrigger value="network" label="Network" icon={Network} />
                    </Tabs.List>

                    <Tabs.Content value="compute" className="w-full">
                        <ComputePricing />
                    </Tabs.Content>

                    <Tabs.Content value="gpu" className="w-full">
                        <GPUPricing />
                    </Tabs.Content>

                    <Tabs.Content value="storage" className="w-full">
                        <StoragePricing />
                    </Tabs.Content>

                    <Tabs.Content value="network" className="w-full">
                        <NetworkPricing />
                    </Tabs.Content>
                </Tabs.Root>
            </div>

            {/* FAQ Section */}
            <div className="max-w-[800px] mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 font-[Avenir]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem question="How does billing work?" answer="We offer both hourly and monthly billing. Hourly instances are billed per second of usage, while monthly instances serve as a reservation for dedicated capacity. You can switch between billing modes anytime." />
                    <FAQItem question="Are there any hidden fees?" answer="No hidden fees. Prices shown include everything. All VM prices include 30GB of block storage. We provide generous bandwidth allocations with every instance." />
                    <FAQItem question="Can I resize my plan?" answer="Yes, you can vertically scale block storage and compute instances at any time. Most upgrades are zero-downtime. You can only increase block storage size, not decrease it." />
                    <FAQItem question="Do you offer volume discounts?" answer="Yes, for enterprise requirements and committed use, please contact our sales team for custom pricing. We offer 3-month, 6-month, and annual commitments with significant discounts." />
                    <FAQItem question="What's the difference between the VM series?" answer="CPU Optimized (a.cpu1) has high clock speeds for compute-intensive tasks. General Purpose (a.gp1) offers balanced resources. Memory Optimized (a.mem1) provides high RAM for databases and caching." />
                    <FAQItem question="Is the Kubernetes control plane really free?" answer="Yes, the Kubernetes control plane is fully managed and free. You only pay for the worker node VMs that run your workloads." />
                </div>
            </div>
        </div>
    );
}

// Sub-components

function PricingTabTrigger({ value, label, icon: Icon }: any) {
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

function ComputePricing() {
    const [osType, setOsType] = useState<'linux' | 'windows'>('linux');
    const [vmSeries, setVmSeries] = useState<'cpu' | 'gp' | 'mem'>('cpu');
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'hourly'>('monthly');

    // Data from beta.cloudpe.com/pricing
    const vmData = {
        cpu: {
            title: "CPU Intensive",
            subtitle: "a.cpu1 series",
            icon: Cpu,
            color: "text-orange-400",
            description: "High clock speed for compute-intensive tasks",
            flavors: [
                { flavor: "a.cpu1.4g", cpu: "2", ram: "4 GB", linux: { monthly: "₹1,117", hourly: "₹1.53" }, windows: { monthly: "₹1,917", hourly: "₹2.63" } },
                { flavor: "a.cpu1.8g", cpu: "4", ram: "8 GB", linux: { monthly: "₹2,048", hourly: "₹2.80" }, windows: { monthly: "₹3,248", hourly: "₹4.45" } },
                { flavor: "a.cpu1.16g", cpu: "8", ram: "16 GB", linux: { monthly: "₹3,910", hourly: "₹5.35" }, windows: { monthly: "₹5,710", hourly: "₹7.82" } },
                { flavor: "a.cpu1.32g", cpu: "16", ram: "32 GB", linux: { monthly: "₹7,634", hourly: "₹10.45" }, windows: { monthly: "₹10,434", hourly: "₹14.29" } },
                { flavor: "a.cpu1.64g", cpu: "32", ram: "64 GB", linux: { monthly: "₹15,082", hourly: "₹20.66" }, windows: { monthly: "₹19,882", hourly: "₹27.24" } },
                { flavor: "a.cpu1.128g", cpu: "64", ram: "128 GB", linux: { monthly: "₹32,276", hourly: "₹44.21" }, windows: { monthly: "₹57,876", hourly: "₹79.28" } },
            ]
        },
        gp: {
            title: "General Purpose",
            subtitle: "a.gp1 series",
            icon: Box,
            color: "text-blue-400",
            description: "Balanced vCPU and RAM for most workloads",
            flavors: [
                { flavor: "a.gp1.4g", cpu: "1", ram: "4 GB", linux: { monthly: "₹1,330", hourly: "₹1.82" }, windows: { monthly: "₹1,516", hourly: "₹2.08" } },
                { flavor: "a.gp1.8g", cpu: "2", ram: "8 GB", linux: { monthly: "₹1,582", hourly: "₹2.17" }, windows: { monthly: "₹1,768", hourly: "₹2.42" } },
                { flavor: "a.gp1.16g", cpu: "4", ram: "16 GB", linux: { monthly: "₹2,980", hourly: "₹4.08" }, windows: { monthly: "₹3,166", hourly: "₹4.34" } },
                { flavor: "a.gp1.32g", cpu: "8", ram: "32 GB", linux: { monthly: "₹5,880", hourly: "₹8.05" }, windows: { monthly: "₹8,466", hourly: "₹11.60" } },
                { flavor: "a.gp1.64g", cpu: "16", ram: "64 GB", linux: { monthly: "₹11,180", hourly: "₹15.32" }, windows: { monthly: "₹15,766", hourly: "₹21.60" } },
                { flavor: "a.gp1.128g", cpu: "32", ram: "128 GB", linux: { monthly: "₹21,683", hourly: "₹29.70" }, windows: { monthly: "₹30,269", hourly: "₹41.46" } },
            ]
        },
        mem: {
            title: "Memory Optimized",
            subtitle: "a.mem1 series",
            icon: Layers,
            color: "text-green-400",
            description: "High RAM for databases and caching",
            flavors: [
                { flavor: "a.mem1.8g", cpu: "1", ram: "8 GB", linux: { monthly: "₹1,366", hourly: "₹1.87" }, windows: { monthly: "₹1,766", hourly: "₹2.42" } },
                { flavor: "a.mem1.16g", cpu: "2", ram: "16 GB", linux: { monthly: "₹2,546", hourly: "₹3.48" }, windows: { monthly: "₹2,946", hourly: "₹4.04" } },
                { flavor: "a.mem1.32g", cpu: "4", ram: "32 GB", linux: { monthly: "₹4,906", hourly: "₹6.72" }, windows: { monthly: "₹5,306", hourly: "₹7.27" } },
                { flavor: "a.mem1.64g", cpu: "8", ram: "64 GB", linux: { monthly: "₹9,626", hourly: "₹13.18" }, windows: { monthly: "₹9,826", hourly: "₹13.46" } },
                { flavor: "a.mem1.128g", cpu: "16", ram: "128 GB", linux: { monthly: "₹19,066", hourly: "₹26.11" }, windows: { monthly: "₹18,866", hourly: "₹25.84" } },
                { flavor: "a.mem1.256g", cpu: "32", ram: "256 GB", linux: { monthly: "₹37,946", hourly: "₹51.98" }, windows: { monthly: "₹38,166", hourly: "₹52.28" } },
                { flavor: "a.mem1.512g", cpu: "64", ram: "512 GB", linux: { monthly: "₹79,838", hourly: "₹109.36" }, windows: { monthly: "₹80,186", hourly: "₹109.84" } },
            ]
        }
    };

    const currentData = vmData[vmSeries];
    const Icon = currentData.icon;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                {/* OS Toggle */}
                <div className="bg-white/5 p-1 rounded-full flex">
                    <button
                        onClick={() => setOsType('linux')}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${osType === 'linux' ? 'bg-[#8154EF] text-white shadow-lg shadow-purple-500/20' : 'text-white/60 hover:text-white'}`}
                    >
                        Linux
                    </button>
                    <button
                        onClick={() => setOsType('windows')}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${osType === 'windows' ? 'bg-[#8154EF] text-white shadow-lg shadow-purple-500/20' : 'text-white/60 hover:text-white'}`}
                    >
                        Windows
                    </button>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="bg-white/5 p-1 rounded-full flex relative">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-6 py-2 rounded-full font-medium transition-all relative z-10 ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('hourly')}
                        className={`px-6 py-2 rounded-full font-medium transition-all relative z-10 ${billingCycle === 'hourly' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        Hourly
                    </button>
                    <motion.div
                        className="absolute inset-y-1 rounded-full bg-white/10"
                        layoutId="billingCycle"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{
                            width: "50%",
                            left: billingCycle === 'monthly' ? "4px" : "calc(50% - 4px)",
                        }}
                    />
                </div>
            </div>

            {/* VM Series Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {(['cpu', 'gp', 'mem'] as const).map((series) => {
                    const data = vmData[series];
                    const SeriesIcon = data.icon;
                    return (
                        <button
                            key={series}
                            onClick={() => setVmSeries(series)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${vmSeries === series
                                    ? `border-${data.color.replace('text-', '')} bg-white/5 shadow-lg shadow-${data.color.replace('text-', '')}/10`
                                    : 'border-white/10 hover:border-white/30'
                                }`}
                        >
                            <SeriesIcon className={`w-5 h-5 ${vmSeries === series ? data.color : 'text-white/60'}`} />
                            <span className={`font-medium ${vmSeries === series ? 'text-white' : 'text-white/60'}`}>
                                {data.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Pricing Table */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
                <div className="p-6 border-b border-white/10 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${currentData.color}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-[Avenir]">{osType === 'linux' ? 'Linux' : 'Windows'} {currentData.title}</h3>
                        <p className="text-white/50 text-sm">{currentData.subtitle} • {currentData.description}</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-white/40 text-sm border-b border-white/5">
                                <th className="p-4 font-medium">Flavor</th>
                                <th className="p-4 font-medium">vCPU</th>
                                <th className="p-4 font-medium">RAM</th>
                                <th className="p-4 font-medium text-right">
                                    Price ({billingCycle === 'monthly' ? 'Monthly' : 'Hourly'})
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-white/80 font-[Sansation]">
                            {currentData.flavors.map((row) => {
                                const priceData = row[osType];
                                const price = billingCycle === 'monthly' ? priceData.monthly : priceData.hourly;
                                return (
                                    <tr key={row.flavor} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className={`p-4 font-mono ${currentData.color}`}>{row.flavor}</td>
                                        <td className="p-4">{row.cpu} vCPU</td>
                                        <td className="p-4">{row.ram}</td>
                                        <td className="p-4 font-bold text-right text-lg">{price}<span className="text-xs text-white/40 font-normal">/{billingCycle === 'monthly' ? 'mo' : 'hr'}</span></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-white/[0.02] text-center text-sm text-white/50">
                    * Total price includes {osType === 'windows' ? 'Windows License & ' : ''}30GB Block Storage allocation
                </div>
            </div>

            {/* Kubernetes Note */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <Box className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Managed Kubernetes</h4>
                        <p className="text-white/60 text-sm">Control Plane is FREE. Pay only for worker node VMs.</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">FREE</div>
                    <div className="text-white/50 text-sm">Control Plane</div>
                </div>
            </div>
        </div>
    );
}

function GPUPricing() {
    return (
        <div className="space-y-8">
            {/* H200 Section */}
            <div>
                <h3 className="text-2xl font-bold mb-6 font-[Avenir] text-center">NVIDIA H200 - Flagship AI Training</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#8154EF]/30 rounded-2xl p-8 hover:border-[#8154EF] transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#8154EF] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">ON DEMAND</div>
                            <div className="mb-6">
                                <Cpu className="w-12 h-12 text-[#8154EF] mb-4" />
                                <h3 className="text-2xl font-bold font-[Avenir]">1x NVIDIA H200</h3>
                                <p className="text-white/60">Single GPU Instance</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">₹300</span>
                                <span className="text-white/40">/hour</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-white/70">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 141 GB HBM3e VRAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 16 vCPU Cores</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 128 GB System RAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 4.8 TB/s Memory Bandwidth</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 3,958 TFLOPS FP8</li>
                            </ul>
                            <button className="w-full py-3 bg-[#8154EF] rounded-lg font-bold text-white hover:bg-[#6f42c1] transition-colors">Deploy Now</button>
                        </div>
                    </WavyCard>

                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#8154EF]/30 rounded-2xl p-8 hover:border-[#8154EF] transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#8154EF] to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">8-GPU CLUSTER</div>
                            <div className="mb-6">
                                <Cpu className="w-12 h-12 text-[#8154EF] mb-4" />
                                <h3 className="text-2xl font-bold font-[Avenir]">8x NVIDIA H200</h3>
                                <p className="text-white/60">Multi-GPU Cluster</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">₹2,400</span>
                                <span className="text-white/40">/hour</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-white/70">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 1,128 GB HBM3e VRAM (8x141GB)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 128 vCPU Cores</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 1,024 GB System RAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> 900 GB/s NVLink Interconnect</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8154EF]" /> Distributed Training Ready</li>
                            </ul>
                            <button className="w-full py-3 bg-[#8154EF] rounded-lg font-bold text-white hover:bg-[#6f42c1] transition-colors">Deploy Now</button>
                        </div>
                    </WavyCard>
                </div>
            </div>

            {/* L4 Section */}
            <div>
                <h3 className="text-2xl font-bold mb-6 font-[Avenir] text-center">NVIDIA L4 - Efficient Inference</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
                            <div className="mb-6">
                                <Monitor className="w-12 h-12 text-[#6366f1] mb-4" />
                                <h3 className="text-2xl font-bold font-[Avenir]">1x NVIDIA L4</h3>
                                <p className="text-white/60">Single GPU Instance</p>
                            </div>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-white">₹26,180</span>
                                <span className="text-white/40">/month</span>
                            </div>
                            <div className="mb-6 text-white/50 text-sm">~₹35.86/hour</div>
                            <ul className="space-y-3 mb-8 text-sm text-white/70">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 24 GB GDDR6 VRAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 16 vCPU Cores</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 64 GB System RAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 300 GB/s Memory Bandwidth</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 485 TFLOPS FP8</li>
                            </ul>
                            <button className="w-full py-3 bg-white/10 rounded-lg font-bold text-white hover:bg-white/20 transition-colors">Deploy Now</button>
                        </div>
                    </WavyCard>

                    <WavyCard className="h-full">
                        <div className="h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#6366f1] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">2-GPU</div>
                            <div className="mb-6">
                                <Monitor className="w-12 h-12 text-[#6366f1] mb-4" />
                                <h3 className="text-2xl font-bold font-[Avenir]">2x NVIDIA L4</h3>
                                <p className="text-white/60">Dual GPU Instance</p>
                            </div>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-white">₹33,980</span>
                                <span className="text-white/40">/month</span>
                            </div>
                            <div className="mb-6 text-white/50 text-sm">~₹46.55/hour</div>
                            <ul className="space-y-3 mb-8 text-sm text-white/70">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 48 GB GDDR6 VRAM (2x24GB)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 32 vCPU Cores</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> 128 GB System RAM</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> Parallel Inference</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#6366f1]" /> Ray Tracing Support</li>
                            </ul>
                            <button className="w-full py-3 bg-white/10 rounded-lg font-bold text-white hover:bg-white/20 transition-colors">Deploy Now</button>
                        </div>
                    </WavyCard>
                </div>
            </div>
        </div>
    );
}

function StoragePricing() {
    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-4">
                <StorageCard title="Object Storage" icon={Database} price="₹3.1" unit="/GB/mo" desc="S3 Compatible" highlight />
                <StorageCard title="Block Storage" icon={HardDrive} price="₹6.2" unit="/GB/mo" desc="High Performance NVMe" />
                <StorageCard title="Snapshots" icon={Zap} price="₹6.2" unit="/GB/mo" desc="Point-in-time Backup" />
                <StorageCard title="Backups" icon={Shield} price="₹2.0" unit="/GB/mo" desc="Automated Protection" />
            </div>

            {/* Storage Details */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-6 font-[Avenir]">Storage Features</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5 text-emerald-400" /> Object Storage (S3)
                        </h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> AWS S3 API Compatible</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Zero Ingress Fees</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 11 Nines Durability</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Global CDN Included</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Versioning & Lifecycle Policies</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <HardDrive className="w-5 h-5 text-purple-400" /> Block Storage (NVMe)
                        </h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Up to 64,000 IOPS</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Up to 1 GB/s Throughput</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Sub-millisecond Latency</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Online Volume Expansion</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Maximum 16TB per Volume</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NetworkPricing() {
    return (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md p-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-6 font-[Avenir]">Networking Services</h3>
                    <ul className="space-y-4">
                        <NetworkItem label="IPv4 Address" price="₹200/mo" desc="Public static IP" />
                        <NetworkItem label="Floating IP" price="₹200/mo" desc="Reassignable IP" />
                        <NetworkItem label="Load Balancer" price="₹2,000/mo" desc="L4/L7 load balancing" />
                        <NetworkItem label="Site-to-Site VPN" price="₹1,000/node/mo" desc="Secure tunnel" />
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6 font-[Avenir]">Included Free</h3>
                    <ul className="space-y-4">
                        <NetworkItem label="Virtual Private Cloud (VPC)" price="Free" desc="Network isolation" free />
                        <NetworkItem label="Private Networking" price="Free" desc="Inter-VM traffic" free />
                        <NetworkItem label="Inbound Data Transfer" price="Free" desc="Unlimited ingress" free />
                        <NetworkItem label="Firewall Rules" price="Free" desc="Security groups" free />
                    </ul>
                </div>
            </div>
        </div>
    );
}

function StorageCard({ title, icon: Icon, price, unit, desc, highlight }: any) {
    return (
        <div className={`bg-white/[0.03] border rounded-xl p-6 transition-colors ${highlight ? 'border-emerald-500/50 hover:border-emerald-500' : 'border-white/10 hover:border-[#8154EF]/50'}`}>
            <Icon className={`w-8 h-8 mb-4 ${highlight ? 'text-emerald-400' : 'text-[#8154EF]'}`} />
            <h4 className="font-bold text-lg mb-1">{title}</h4>
            <p className="text-xs text-white/50 mb-4">{desc}</p>
            <div className="mt-auto">
                <span className="text-2xl font-bold">{price}</span>
                <span className="text-white/40 text-xs">{unit}</span>
            </div>
        </div>
    );
}

function NetworkItem({ label, price, desc, free }: any) {
    return (
        <li className="flex items-center justify-between border-b border-white/5 pb-3">
            <div>
                <span className="text-white/80 block">{label}</span>
                <span className="text-white/40 text-xs">{desc}</span>
            </div>
            <span className={`font-mono font-bold ${free ? 'text-emerald-400' : 'text-[#8154EF]'}`}>{price}</span>
        </li>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
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
