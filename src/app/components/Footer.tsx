import { Github, Terminal } from "lucide-react";
import logoImage from "../../assets/logo.png";

export function Footer() {
  const footerLinks = {
    Products: [
      { name: "GPU Instances", href: "#gpu" },
      { name: "Virtual Machines", href: "#vm" },
      { name: "Kubernetes", href: "#k8s" },
      { name: "Object Storage", href: "#storage" },
      { name: "Block Storage", href: "#block" },
      { name: "Networking", href: "#network" },
    ],
    Solutions: [
      { name: "AI Training", href: "#training" },
      { name: "LLM Inference", href: "#inference" },
      { name: "Startups", href: "#startups" },
      { name: "Enterprise", href: "#enterprise" },
      { name: "HPC", href: "#hpc" },
    ],
    Developers: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "CLI Tools", href: "#cli" },
      { name: "SDKs", href: "#sdk" },
      { name: "GitHub", href: "#github" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Partners", href: "#partners" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "SLA", href: "#sla" },
      { name: "Compliance", href: "#compliance" },
      { name: "Security", href: "#security" },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <img
                src={logoImage}
                alt="CloudPe"
                className="h-7 w-auto"
              />
            </div>
            <p
              className="text-white/60 text-sm mb-6"
              style={{ fontFamily: 'Sansation, sans-serif' }}
            >
              AI-ready cloud infrastructure built for performance and scale.
            </p>
            <div className="flex gap-4">
              <a
                href="#github"
                className="w-10 h-10 bg-white/5 hover:bg-[#8154EF]/20 border border-white/10 hover:border-[#8154EF]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-white/60 hover:text-[#8154EF]" />
              </a>
              <a
                href="#terminal"
                className="w-10 h-10 bg-white/5 hover:bg-[#8154EF]/20 border border-white/10 hover:border-[#8154EF]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Terminal className="w-5 h-5 text-white/60 hover:text-[#8154EF]" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 600 }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: 'Sansation, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/40 text-sm"
              style={{ fontFamily: 'Sansation, sans-serif' }}
            >
              © 2024 CloudPe. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#status"
                className="text-white/60 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                Status
              </a>
              <a
                href="#security"
                className="text-white/60 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                Security
              </a>
              <a
                href="#sla"
                className="text-white/60 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                SLA
              </a>
              <a
                href="#contact"
                className="text-white/60 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                Contact
              </a>
              <a
                href="#careers"
                className="text-white/60 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'Sansation, sans-serif' }}
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}