import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Globe, ArrowRight, Send } from "lucide-react";
import { LiquidBackground } from "../components/WavyBlob";

export function Contact() {
    return (
        <div className="pt-24 pb-20 px-6 relative overflow-hidden min-h-screen">
            <LiquidBackground />

            {/* Header */}
            <div className="max-w-[1200px] mx-auto text-center mb-16 relative z-10 pt-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl text-white mb-6"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 800 }}
                >
                    Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8154EF] to-[#6366f1]">Touch</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/60 max-w-2xl mx-auto"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                >
                    Have questions about our infrastructure? Our team is ready to help you build the impossible.
                </motion.p>
            </div>

            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        <ContactCard
                            icon={MessageSquare}
                            title="Sales"
                            desc="Talk to our solutions team"
                            action="sales@cloudpe.com"
                        />
                        <ContactCard
                            icon={Mail}
                            title="Support"
                            desc="Technical assistance 24/7"
                            action="support@cloudpe.com"
                        />
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
                        <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-[#8154EF]" /> Global Presence
                        </h3>
                        {/* Abstract Map Representation */}
                        <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden">
                            {/* Styling purely through CSS for map nodes */}
                            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#8154EF] rounded-full shadow-[0_0_10px_#8154EF] animate-pulse" />
                            <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-white/50 rounded-full" />
                            <div className="absolute top-[35%] left-[48%] w-3 h-3 bg-[#6366f1] rounded-full shadow-[0_0_10px_#6366f1] animate-pulse delay-75" />
                            <div className="absolute top-[40%] left-[52%] w-2 h-2 bg-white/50 rounded-full" />
                            <div className="absolute top-[55%] left-[75%] w-3 h-3 bg-[#8154EF] rounded-full shadow-[0_0_10px_#8154EF] animate-pulse delay-150" />

                            {/* Grid lines to simulate map */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8154EF]" /> New York</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8154EF]" /> London</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8154EF]" /> Singapore</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8154EF]" /> Mumbai</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md"
                >
                    <h2 className="text-3xl text-white font-bold mb-8" style={{ fontFamily: 'Avenir, sans-serif' }}>Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <InputGroup label="First Name" placeholder="John" />
                            <InputGroup label="Last Name" placeholder="Doe" />
                        </div>
                        <InputGroup label="Email" placeholder="john@company.com" type="email" />
                        <InputGroup label="Company" placeholder="CloudPe Inc." />

                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#8154EF] focus:ring-1 focus:ring-[#8154EF] transition-all resize-none"
                                placeholder="How can we help you scale?"
                            />
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-[#8154EF] to-[#6366f1] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(129,84,239,0.5)] hover:shadow-[0_0_30px_-5px_rgba(129,84,239,0.7)] transition-all flex items-center justify-center gap-2 group">
                            Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

function ContactCard({ icon: Icon, title, desc, action }: { icon: any, title: string, desc: string, action: string }) {
    return (
        <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-[#8154EF]/50 transition-colors group">
            <div className="w-12 h-12 bg-[#8154EF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8154EF] transition-colors">
                <Icon className="w-6 h-6 text-[#8154EF] group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-white/50 text-sm mb-3">{desc}</p>
            <a href={`mailto:${action}`} className="text-[#8154EF] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                {action} <ArrowRight className="w-3 h-3" />
            </a>
        </div>
    );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
    return (
        <div>
            <label className="block text-white/70 text-sm font-medium mb-2">{label}</label>
            <input
                type={type}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#8154EF] focus:ring-1 focus:ring-[#8154EF] transition-all"
                placeholder={placeholder}
            />
        </div>
    );
}
