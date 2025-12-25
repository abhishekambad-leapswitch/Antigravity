import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedGrid } from "./AnimatedBackground";

export function TrustProof() {
  const stats = [
    { label: "Uptime SLA", value: "99.9%", color: "from-green-500 to-emerald-500" },
    { label: "ISO Certified", value: "27001", color: "from-blue-500 to-cyan-500" },
    { label: "SOC Compliant", value: "Type 2", color: "from-purple-500 to-pink-500" },
    { label: "Global Regions", value: "12+", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
          >
            Trusted by AI Innovators
          </h2>
          <p 
            className="text-white/60"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Enterprise-grade infrastructure with proven reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#8154EF]/50 transition-all hover:shadow-2xl hover:shadow-[#8154EF]/20 relative overflow-hidden">
                {/* Animated gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  >
                    <div className="relative">
                      <ShieldCheck className="w-8 h-8 text-[#8154EF]" />
                      <motion.div
                        className="absolute inset-0 bg-[#8154EF]/30 blur-xl rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="text-3xl text-white mb-2"
                    style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 700 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div 
                    className="text-white/60 text-sm group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: 'Sansation, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#8154EF]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos section with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p 
            className="text-white/40 text-sm mb-8"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            Powering AI workloads for innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {/* ZOHO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#C8161D]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: 'Arial, sans-serif', color: '#C8161D' }}
              >
                ZOHO
              </span>
              <div className="absolute inset-0 bg-[#C8161D]/0 group-hover:bg-[#C8161D]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* TVS Insurance */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#003DA5]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#003DA5' }}
              >
                TVS Insurance
              </span>
              <div className="absolute inset-0 bg-[#003DA5]/0 group-hover:bg-[#003DA5]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* Tech Mahindra */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#ED1B24]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#ED1B24' }}
              >
                Tech Mahindra
              </span>
              <div className="absolute inset-0 bg-[#ED1B24]/0 group-hover:bg-[#ED1B24]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* TATA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#1C4B9E]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-2xl font-bold tracking-wider"
                style={{ fontFamily: 'Arial, sans-serif', color: '#1C4B9E' }}
              >
                TATA
              </span>
              <div className="absolute inset-0 bg-[#1C4B9E]/0 group-hover:bg-[#1C4B9E]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* Serum Institute India */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#E31E24]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-lg font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#E31E24' }}
              >
                Serum Institute
              </span>
              <div className="absolute inset-0 bg-[#E31E24]/0 group-hover:bg-[#E31E24]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* Oneplay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#FF6B00]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#FF6B00' }}
              >
                Oneplay
              </span>
              <div className="absolute inset-0 bg-[#FF6B00]/0 group-hover:bg-[#FF6B00]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* MRC Logistics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#0066CC]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#0066CC' }}
              >
                MRC Logistics
              </span>
              <div className="absolute inset-0 bg-[#0066CC]/0 group-hover:bg-[#0066CC]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* HDFC Capital */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#004C8F]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#004C8F' }}
              >
                HDFC Capital
              </span>
              <div className="absolute inset-0 bg-[#004C8F]/0 group-hover:bg-[#004C8F]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* Everstylish */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#E91E63]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#E91E63' }}
              >
                Everstylish
              </span>
              <div className="absolute inset-0 bg-[#E91E63]/0 group-hover:bg-[#E91E63]/5 rounded-lg transition-colors" />
            </motion.div>

            {/* Booking.com */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="relative px-6 py-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#003580]/50 transition-all cursor-pointer group"
            >
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Arial, sans-serif', color: '#003580' }}
              >
                Booking.com
              </span>
              <div className="absolute inset-0 bg-[#003580]/0 group-hover:bg-[#003580]/5 rounded-lg transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}