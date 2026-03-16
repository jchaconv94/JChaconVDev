/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Facebook, 
  Smartphone,
  ChevronRight,
  Terminal,
  Database,
  Server,
  Globe,
  Wifi,
  Monitor,
  HardDrive
} from 'lucide-react';

const services = [
  {
    title: "Soporte Técnico Informático",
    desc: "Mantenimiento, instalación y solución de problemas en computadoras, laptops, impresoras y software, garantizando su correcto funcionamiento.",
    icon: Wrench,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Desarrollo de Software a Medida",
    desc: "Diseño y desarrollo de sistemas y aplicaciones adaptados a las necesidades específicas de cada negocio para mejorar la productividad.",
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Automatización y Soluciones Digitales",
    desc: "Implementación de herramientas digitales y automatización de procesos para optimizar la gestión empresarial y mejorar la eficiencia operativa.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Consultoría Tecnológica y Seguridad Informática",
    desc: "Asesoría para optimizar e implementar soluciones tecnológicas, aplicando buenas prácticas de seguridad de la información.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-400/10"
  }
];

const technologies = [
  { name: "Python", icon: Terminal },
  { name: "PHP", icon: Server },
  { name: "JavaScript", icon: Globe },
  { name: "TypeScript", icon: Globe },
  { name: "AppScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Firebase", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Docker", icon: Server },
  { name: "GitHub", icon: Code2 },
  { name: "NGINX", icon: Server },
  { name: "React", icon: Globe },
  { name: "Linux", icon: Terminal },
  { name: "n8n", icon: Cpu }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-brand-500/30 font-sans relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/40 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-blue-600 flex items-center justify-center text-white">
              JC
            </div>
            <span>Jordan Chacón Villacís</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologías</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all">
            Hablemos
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  Disponible para nuevos proyectos tecnológicos
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
                >
                  Ingeniero de Sistemas <br className="hidden md:block" />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-600">
                    Soluciones Tecnológicas
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Desarrollo software a medida, automatizo procesos empresariales y optimizo la infraestructura tecnológica para impulsar la eficiencia y el crecimiento de tu negocio.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  <a href="#servicios" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    Explorar Servicios <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#contacto" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    Solicitar Asesoría
                  </a>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] order-1 lg:order-2 mb-16 lg:mb-0 flex items-center justify-center"
              >
                {/* Floating Tech Icons */}
                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 z-30 w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-brand-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                >
                  <Code2 className="w-8 h-8 text-brand-400" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/4 -right-8 z-30 w-14 h-14 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  <Database className="w-7 h-7 text-purple-400" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 left-1/4 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                >
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, 15, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-8 -right-4 z-30 w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <Cpu className="w-8 h-8 text-blue-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -10, 0], x: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-10 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-pink-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                >
                  <Server className="w-6 h-6 text-pink-400" />
                </motion.div>

                {/* New Icons: Security, IT Support, Networking, Hardware */}
                <motion.div 
                  animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -top-10 right-10 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                >
                  <ShieldCheck className="w-6 h-6 text-red-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 18, 0], x: [0, -8, 0], rotate: [0, 12, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute top-1/3 -left-12 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-orange-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                >
                  <Wrench className="w-5 h-5 text-orange-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 12, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute bottom-1/4 -right-12 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  <Wifi className="w-5 h-5 text-cyan-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0], x: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute -bottom-2 left-4 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  <HardDrive className="w-5 h-5 text-indigo-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -8, 0], x: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                  className="absolute top-10 -right-4 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                >
                  <Monitor className="w-5 h-5 text-yellow-400" />
                </motion.div>

                {/* Main Image Container - Premium Tech Style */}
                <div className="relative w-full aspect-[4/5] z-10 group">
                  {/* High-tech border frame */}
                  <div className="absolute inset-0 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                    
                    {/* Animated Code Background */}
                    <div className="absolute inset-0 opacity-20 font-mono text-[8px] sm:text-[10px] leading-tight text-brand-400 overflow-hidden z-0 select-none pointer-events-none flex flex-col">
                      <motion.div 
                        animate={{ y: ["0%", "-50%"] }} 
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col"
                      >
                        <div className="p-4 whitespace-pre">
                          {`function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}

class SecurityProtocol {
  constructor(level) {
    this.level = level;
    this.encryption = 'AES-256-GCM';
  }
  
  async verify(token) {
    const isValid = await crypto.verify(token);
    if (!isValid) throw new Error('Access Denied');
    return true;
  }
}

// Initializing neural network...
const nn = new NeuralNet({ layers: [128, 64, 32] });
nn.train(dataset).then(() => {
  console.log('Model ready');
});

export const systemConfig = {
  maxConnections: 10000,
  timeout: 5000,
  retryAttempts: 3
};

function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}`}
                        </div>
                        <div className="p-4 whitespace-pre">
                          {`function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}

class SecurityProtocol {
  constructor(level) {
    this.level = level;
    this.encryption = 'AES-256-GCM';
  }
  
  async verify(token) {
    const isValid = await crypto.verify(token);
    if (!isValid) throw new Error('Access Denied');
    return true;
  }
}

// Initializing neural network...
const nn = new NeuralNet({ layers: [128, 64, 32] });
nn.train(dataset).then(() => {
  console.log('Model ready');
});

export const systemConfig = {
  maxConnections: 10000,
  timeout: 5000,
  retryAttempts: 3
};

function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}`}
                        </div>
                      </motion.div>
                    </div>

                    {/* Inner glow and gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-transparent to-purple-500/20 z-10 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10" />
                    
                    {/* The Image */}
                    <img 
                      src="https://lh3.googleusercontent.com/d/1dCuj8NXePGuVdhg4Cf4b8z-bDPNVZB3L"
                      alt="Jordan Chacón Villacis"
                      className="w-full h-full object-cover object-center relative z-0 contrast-125 saturate-110 brightness-105 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-10 opacity-30" />
                    
                    {/* Scanning line animation */}
                    <motion.div 
                      animate={{ y: ['-10%', '110%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 right-0 h-1 bg-brand-400/50 shadow-[0_0_20px_rgba(56,189,248,0.8)] z-20"
                    />
                  </div>
                </div>
                
                {/* Decorative background glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-brand-500/30 via-blue-500/20 to-purple-500/30 blur-[80px] -z-10 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Áreas de Especialidad</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Servicios especializados en desarrollo de software, automatización de procesos y gestión de soluciones tecnológicas.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tecnologias" className="py-24 px-6 bg-black/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Stack Tecnológico</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16">Herramientas modernas y robustas para construir el futuro.</p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  <tech.icon className="w-4 h-4 opacity-70" />
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-black border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">¿Listo para empezar?</h2>
                <p className="text-slate-400">Contáctame para discutir tu próximo proyecto o necesidad tecnológica.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <a href="tel:956606972" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1">Teléfono</p>
                    <p className="font-medium text-white">956606972</p>
                  </div>
                </a>
                
                <a href="mailto:jchaconvillacis@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="font-medium text-white text-sm sm:text-base truncate">jchaconvillacis@gmail.com</p>
                  </div>
                </a>

                <a href="https://tiktok.com/@jordanduk" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1">TikTok</p>
                    <p className="font-medium text-white">@jordanduk</p>
                  </div>
                </a>

                <a href="https://facebook.com/owoweb" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1">Facebook</p>
                    <p className="font-medium text-white">owoweb</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Jordan Chacón Villacis. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
