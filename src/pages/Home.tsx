import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function Home() {
  // Bind scroll progress for the floating 3D Ring
  const { scrollYProgress } = useScroll();
  const ringY = useTransform(scrollYProgress, [0, 1], ['-20vh', '120vh']);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div className="bg-background relative">
      {/* Global Background Parallax Spline Ring */}
      <motion.div 
        style={{ y: ringY, rotate: ringRotate, scale: ringScale }}
        className="fixed top-0 right-0 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none z-0 opacity-30 mix-blend-screen hidden sm:block"
      >
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </motion.div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 blueprint-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-outline">THE DIGITAL BLUEPRINT</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter leading-[1.1] mb-8"
          >
            Your AI-First Business <br/>
            <span className="text-gradient">Starts Here</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-outline max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We architect, build, and deploy intelligent systems that replace manual chaos with automated precision. Stop working in your business. Let AI run it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/" className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 font-medium hover:bg-on-background transition-colors flex items-center justify-center gap-2 group">
              Start Building
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link to="/" className="w-full sm:w-auto border border-outline-variant/50 bg-surface-container-low/30 backdrop-blur-sm px-8 py-4 font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
              Learn The Systems
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Solutions Bento Grid */}
      <section className="py-32 bg-surface-container-lowest border-y border-outline-variant/20 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">Architectural Solutions</h2>
            <p className="text-outline text-lg max-w-2xl">We don't sell software. We build structural advantages for your business using applied artificial intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center mb-8 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">groups</span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">AI Recruiting Systems</h3>
                <p className="text-outline mb-8 max-w-md">Automate your entire hiring pipeline. From sourcing to screening, deploy AI agents that find and vet top talent 24/7 without human bias or fatigue.</p>
                <div className="mt-auto">
                  <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all">
                    Explore Recruiting Architecture
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center mb-8 border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary">model_training</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Custom AI Agents</h3>
              <p className="text-outline mb-8 text-sm">Purpose-built LLM agents trained on your proprietary data to handle customer support, sales, or internal operations.</p>
              <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-4 transition-all">
                Build Custom Agents
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Small Feature 2 */}
            <div className="bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center mb-8 border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary">schema</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Workflow Automation</h3>
              <p className="text-outline mb-8 text-sm">Connect your fragmented tools. We build Zapier/Make architectures that eliminate manual data entry entirely.</p>
              <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-4 transition-all">
                Automate Workflows
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Medium Feature */}
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center mb-8 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">The AI Accelerator</h3>
                <p className="text-outline mb-8">Don't just buy systems; understand them. Our intensive training program teaches you how to leverage AI better than 99% of your competitors.</p>
                <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all">
                  Join The Accelerator
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                <span className="material-symbols-outlined text-6xl text-outline-variant">terminal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Architecture Spotlight */}
      <section className="py-32 relative overflow-hidden border-b border-outline-variant/20 bg-background">
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-sm mb-8">
                <span className="material-symbols-outlined text-sm text-primary">precision_manufacturing</span>
                <span className="text-sm font-medium tracking-wide text-outline">CUSTOM ARCHITECTURE</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[1.1] mb-6">
                Deploying <br/>
                <span className="text-gradient">The Future</span>
              </h2>
              <p className="text-lg text-outline mb-10 max-w-lg leading-relaxed">
                We don't offer cookie-cutter SaaS. We build bespoke AI infrastructure tailored to your exact operational bottlenecks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="bg-primary text-on-primary px-8 py-4 font-medium hover:bg-on-background transition-colors flex items-center justify-center gap-2 group">
                  Request an Audit
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            {/* Detailed 3D Architecture Visual */}
            <div className="perspective-lg hidden lg:block">
              <motion.div 
                initial={{ rotateX: 10, rotateY: -10, opacity: 0 }}
                whileInView={{ rotateX: 5, rotateY: -5, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="depth-card bg-surface-container-low border border-outline-variant/30 p-8 relative overflow-hidden h-96 flex items-center justify-center group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Background Tech Grids */}
                <div className="absolute inset-0 blueprint-grid opacity-30 transition-opacity duration-700 group-hover:opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-transparent to-primary/5"></div>
                
                {/* Sci-Fi HUD Borders */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 m-6 group-hover:border-primary transition-colors duration-500 group-hover:w-20 group-hover:h-20"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 m-6 group-hover:border-primary transition-colors duration-500 group-hover:w-20 group-hover:h-20"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Central Spline Scene (Background Ambient WebGL) */}
                  <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen overflow-hidden scale-125 pointer-events-auto transition-opacity duration-700 group-hover:opacity-100">
                    <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
                  </div>

                  {/* Enhanced 3D CSS Wireframe (Foreground Details) */}
                  <div className="w-56 h-56 relative z-10 hover:scale-110 transition-transform duration-700 pointer-events-none">
                    <div className="absolute w-full h-full border border-primary/40 rotate-45 animate-[spin_12s_linear_infinite]"></div>
                    <div className="absolute w-full h-full border border-primary/30 -rotate-12 animate-[spin_8s_linear_infinite_reverse]"></div>
                    <div className="absolute w-full h-full border border-primary/20 rotate-12 animate-[spin_15s_linear_infinite]"></div>
                    <div className="absolute inset-4 bg-primary/10 backdrop-blur-md border border-primary flex items-center justify-center rotate-45 shadow-[0_0_40px_#3b82f6]">
                      <div className="w-full h-full border border-primary/50 rotate-45 flex items-center justify-center inner-shadow">
                        <span className="material-symbols-outlined text-[60px] text-primary animate-pulse -rotate-90">memory</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cyberpunk Decorative Data */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-primary/70 tracking-widest flex flex-col gap-1 pointer-events-none">
                  <span>SYS_ID: 0x8F9B2</span>
                  <span>STATUS: OPTIMAL</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Map Section (Full Screen Parallax) */}
      <section className="relative bg-background">
        
        {/* Intro */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden border-b border-outline-variant/20 z-10 bg-background">
           <div className="absolute inset-0 blueprint-grid opacity-10"></div>
           <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-sm mb-6"
              >
                <span className="material-symbols-outlined text-sm text-primary">route</span>
                <span className="text-sm font-medium tracking-wide text-outline">THE ARCHITECTURE VISION</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold tracking-tight mb-6">
                A Roadmap to <br/><span className="text-gradient">Autonomy</span>
              </h2>
              <p className="text-outline text-lg max-w-2xl mx-auto mb-10">
                Four phases to evolve your business from chaotic manual labor to a seamlessly orchestrated intelligent system. Scroll to deploy.
              </p>
              <div className="animate-bounce text-primary flex justify-center">
                <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
              </div>
           </div>
        </div>

        {/* Phase 1 */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden border-b border-outline-variant/20 z-20 bg-surface-container-lowest shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 blueprint-grid opacity-5"></div>
           <div className="max-w-6xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="text-sm font-bold tracking-widest text-primary mb-4 uppercase inline-flex items-center gap-3 border border-primary/30 px-3 py-1 bg-primary/5">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                   Phase 01
                </div>
                <h3 className="text-5xl md:text-6xl font-headline font-bold mb-6">Process Mapping</h3>
                <p className="text-outline text-lg leading-relaxed mb-8">
                  We chart every workflow, click, and interaction within your company to identify operational drag and isolate repetitive tasks highly susceptible to replacement.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="border border-outline-variant/20 bg-surface-container-highest p-8 relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]"></div>
                    <span className="material-symbols-outlined text-6xl text-outline mb-6">account_tree</span>
                    <div className="space-y-4">
                      <div className="h-3 bg-outline-variant/30 w-full rounded"></div>
                      <div className="h-3 bg-outline-variant/20 w-5/6 rounded"></div>
                      <div className="h-3 bg-outline-variant/20 w-4/6 rounded"></div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>

        {/* Phase 2 */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden border-b border-outline-variant/20 z-30 bg-surface-container-low shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 blueprint-grid opacity-5"></div>
           <div className="max-w-6xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="text-sm font-bold tracking-widest text-primary mb-4 uppercase inline-flex items-center gap-3 border border-primary/30 px-3 py-1 bg-primary/5">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                   Phase 02
                </div>
                <h3 className="text-5xl md:text-6xl font-headline font-bold mb-6">Hard-Coded Automation</h3>
                <p className="text-outline text-lg leading-relaxed mb-8">
                  Before introducing AI, we interconnect your tech stack using webhooks and APIs. Data moves instantly between systems—zero manual entry.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="border border-primary/30 bg-primary/5 p-8 relative overflow-hidden flex flex-col items-end text-right"
                 >
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
                    <span className="material-symbols-outlined text-6xl text-primary mb-6">dynamic_feed</span>
                    <div className="space-y-4 w-full flex flex-col items-end">
                      <div className="h-3 bg-primary/40 w-full rounded"></div>
                      <div className="h-3 bg-primary/30 w-5/6 rounded"></div>
                      <div className="h-3 bg-primary/20 w-4/6 rounded"></div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>

        {/* Phase 3 */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden border-b border-outline-variant/20 z-40 bg-surface-container-high shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 blueprint-grid opacity-5"></div>
           <div className="max-w-6xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="text-sm font-bold tracking-widest text-primary mb-4 uppercase inline-flex items-center gap-3 border border-primary/30 px-3 py-1 bg-primary/5">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                   Phase 03
                </div>
                <h3 className="text-5xl md:text-6xl font-headline font-bold mb-6">Cognitive Integration</h3>
                <p className="text-outline text-lg leading-relaxed mb-8">
                  We deploy purpose-built LLMs to handle subjective decision-making within your automated workflows. From drafting emails to scoring leads, the system begins to think.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="border border-primary/50 bg-background p-12 relative overflow-hidden flex items-center justify-center"
                 >
                    <div className="absolute inset-0 bg-primary/10 blur-2xl"></div>
                    <span className="material-symbols-outlined text-[80px] text-primary relative z-10 animate-pulse">smart_toy</span>
                 </motion.div>
              </div>
           </div>
        </div>

        {/* Phase 4 */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden border-b border-outline-variant/20 z-50 bg-background shadow-[0_-20px_50px_rgba(31,100,255,0.05)] relative">
           <div className="absolute inset-0 blueprint-grid opacity-20"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="max-w-6xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="text-sm font-bold tracking-widest text-primary mb-4 uppercase inline-flex items-center gap-3 border border-primary px-4 py-2 bg-primary/10 shadow-[0_0_15px_#3b82f6]">
                   <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                   Phase 04
                </div>
                <h3 className="text-5xl md:text-7xl font-headline font-bold mb-6 text-gradient">Systemic Autonomy</h3>
                <p className="text-outline text-lg lg:text-xl leading-relaxed mb-8">
                  Multiple distinct AI agents communicating and coordinating with each other to run entire departments. The blueprint is complete.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                 <motion.div 
                   initial={{ opacity: 0, rotate: -10 }}
                   whileInView={{ opacity: 1, rotate: 0 }}
                   className="grid grid-cols-2 gap-4"
                 >
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`aspect-square border ${i%2===0 ? 'border-primary shadow-[0_0_20px_#3b82f6] bg-primary/10' : 'border-outline-variant/30 bg-surface-container-highest'} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined text-4xl ${i%2===0 ? 'text-primary animate-spin' : 'text-outline'}`}>cycle</span>
                      </div>
                    ))}
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">Proven Architecture</h2>
            <p className="text-outline text-lg max-w-2xl mx-auto">See how we've transformed operations for our partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors"></div>
              <div className="mb-6 flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-primary text-sm">star</span>
                ))}
              </div>
              <p className="text-outline mb-8 leading-relaxed italic">"Since implementing their custom AI agents, our customer support resolution time dropped by 70%. It's literally like having a 24/7 team that never sleeps."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                  <span className="font-headline font-bold text-sm">JD</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm">John D.</h4>
                  <p className="text-xs text-outline">Operations Director</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low border border-outline-variant/20 p-10 group hover:border-outline-variant/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors"></div>
              <div className="mb-6 flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-primary text-sm">star</span>
                ))}
              </div>
              <p className="text-outline mb-8 leading-relaxed italic">"The automated recruiting architecture completely changed how we hire. We filled 10 open engineering roles in half the normal time with zero recruiter bottleneck."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                  <span className="font-headline font-bold text-sm">SM</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm">Sarah M.</h4>
                  <p className="text-xs text-outline">VP of Talent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8">Ready to Build?</h2>
          <p className="text-xl text-outline mb-12">Stop losing time to manual processes. Let's architect a system that scales infinitely.</p>
          <Link to="/" className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-10 py-5 text-lg font-medium hover:bg-on-background transition-colors group">
            Schedule Architecture Review
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
