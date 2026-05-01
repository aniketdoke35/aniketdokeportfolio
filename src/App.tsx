import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ArrowUpRight, Search, Briefcase, User, Mail, ChevronRight, Monitor, Code, Palette, MapPin, Moon, Sun, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

gsap.registerPlugin(ScrollTrigger);

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Data
const PROJECTS = [
  {
    id: 1,
    title: "Delhi High Court e-District Portal",
    category: "Web Portal",
    description: "Developed the e-District portal. Tech stack includes Next.js, SCSS, Docker, i18n, NextRoute, and SSR.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
    color: "bg-zinc-100",
    tags: ["Next.js", "Docker", "SSR"]
  },
  {
    id: 2,
    title: "ConnectFM Maintenance",
    category: "Web Maintenance",
    description: "Maintained and optimized the ConnectFM platform using React.js, Nginx, and Docker.",
    image: "https://images.unsplash.com/photo-1516280440502-d9646b9edcce?q=80&w=2000&auto=format&fit=crop",
    color: "bg-stone-100",
    tags: ["React.js", "Nginx", "Docker"]
  },
  {
    id: 3,
    title: "Data Insiders",
    category: "Web Application",
    description: "Crafted a powerful digital presence for Data Insiders using WordPress, Elementor, and integrated Razorpay for smooth payment processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    color: "bg-blue-50",
    tags: ["WordPress", "Elementor", "Razorpay"]
  },
  {
    id: 4,
    title: "Room Wala",
    category: "Full-Stack App",
    description: "Built a comprehensive room-finding platform. Utilized Next.js, Tailwind CSS, NextAuth.js, NextApi Routes, MySQL, AWS S3, and AWS RDS.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    color: "bg-purple-50",
    tags: ["Next.js", "MySQL", "AWS"]
  }
];

const EXPERIENCES = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Digital Hack Zone Pvt. Ltd.",
    period: "Feb 2024 - Current",
    location: "Pune, Maharashtra, India",
    description: "Developed web applications using React.js, Next.js, and Node.js. Researched and implemented new technologies to improve development processes. Deployed applications using AWS and Azure."
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "ewslab",
    period: "Sep 2023 - Feb 2024",
    location: "Pune, Maharashtra, India",
    description: "Developed back-end services utilizing Node.js and Express for data manipulation and business logic. Designed and implemented MongoDB and MySQL database schemas. Created responsive web applications."
  }
];

const EDUCATIONS = [
  {
    id: 1,
    degree: "MCA (Master of computer application)",
    institution: "rashtrasant tukadoji maharaj nagpur university",
    period: "2023 - 2025",
    cgpa: "CGPA 7/10"
  },
  {
    id: 2,
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Degree college of physical education, H.V.P.M Amravati",
    period: "2020 - 2023",
    cgpa: "CGPA 8/10"
  }
];

function Header({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-[52px]">
            <div className="flex items-center">
              <a href="#" className="font-semibold text-xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">Aniket Doke</a>
            </div>
            <nav className="hidden md:flex gap-8 text-[12px] font-medium text-gray-500 uppercase tracking-widest">
              <a href="#about" className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors">About</a>
              <a href="#work" className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors">Work</a>
              <a href="#experience" className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors">Experience</a>
              <a href="#education" className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors">Education</a>
              <a href="#contact" className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="text-[#1d1d1f] dark:text-gray-400 dark:hover:text-[#f5f5f7] p-2 transition-colors">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="md:hidden flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1d1d1f] dark:text-[#f5f5f7] p-2">
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-white dark:bg-[#121212] pt-20 px-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <nav className="flex flex-col space-y-6 text-2xl font-semibold tracking-tight">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 dark:text-[#f5f5f7] border-b border-gray-100 dark:border-white/10 pb-4">About</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 dark:text-[#f5f5f7] border-b border-gray-100 dark:border-white/10 pb-4">Work</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 dark:text-[#f5f5f7] border-b border-gray-100 dark:border-white/10 pb-4">Experience</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 dark:text-[#f5f5f7] border-b border-gray-100 dark:border-white/10 pb-4">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 dark:text-[#f5f5f7] pb-4">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}

declare global {
  interface Window {
    VANTA: any;
  }
}

function Hero() {
  const container = useRef<HTMLElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    if (window.VANTA) {
      vantaEffect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x000000, 
        backgroundAlpha: 0, 
        color1: 0xff0000,
        color2: 0xd1ff,
        colorMode: "varianceGradient",
        quantity: 5,
        birdSize: 1,
        wingSpan: 30,
        speedLimit: 5,
        separation: 20,
        alignment: 20,
        cohesion: 20
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(nameRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.8")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6");

    gsap.to(container.current, {
      y: 150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-20 pb-12 overflow-hidden flex flex-col justify-center min-h-screen">
      <div ref={vantaRef} className="absolute inset-0 pointer-events-none z-0" />
      {/* Colorful Animated Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-500 rounded-full blur-[120px] opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-left relative z-10">
        <div>
          <div ref={nameRef} className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-4 opacity-0">
            Hi, I'm Aniket Doke.
          </div>
          <h1 ref={textRef} className="text-5xl md:text-[84px] leading-[0.9] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white mb-6 max-w-4xl opacity-0">
            Designing for the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">next generation.</span>
          </h1>
        </div>
        <p 
          ref={descRef}
          className="mt-8 text-xl font-medium text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10 opacity-0"
        >
          I'm a software engineer and designer focused on building scalable, beautiful, and intuitive products that people love to use.
        </p>
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row items-start gap-4 opacity-0"
        >
          <a href="#work">
            <Button className="rounded-full px-8 py-6 text-sm font-semibold bg-[#0066cc] text-white hover:bg-blue-700 transition-all">
              View My Work
            </Button>
          </a>
          <a href="#contact">
             <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-semibold border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white dark:border-white/20 dark:text-[#f5f5f7] dark:hover:bg-white/10 transition-all text-[#1d1d1f]">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const ABOUT_IMAGES = [
    "/about-1.jpg",
    "/about-2.jpg",
    "/about-3.jpg",
  ];

  useGSAP(() => {
    gsap.fromTo('.about-reveal', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-reveal-trigger',
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  const activeImage = ABOUT_IMAGES[activeIndex];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-[#f5f5f7] dark:bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 dark:from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 about-reveal-trigger">
        <div className="bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl rounded-[2.5rem] p-6 lg:p-12 border border-gray-200/60 dark:border-white/10 shadow-xl shadow-gray-200/20 dark:shadow-none about-reveal">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center about-reveal">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-10">
                Who I am.
              </h2>
              
              <div className="space-y-8 text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-12">
                <p>
                  I am a passionate Full-Stack Developer with expertise in React.js, Next.js, Node.js, and Express.js, dedicated to building responsive and highly efficient web applications.
                </p>
                <p>
                  Currently working at Digital Hack Zone Pvt. Ltd., I specialize in developing efficient database schemas and integrating robust RESTful APIs, utilizing cloud services like AWS and Azure.
                </p>
                
                <blockquote className="pt-4 border-t border-gray-200 dark:border-white/10 text-sm italic text-gray-500 mt-8">
                  "Delivering modern web experiences through responsive design and scalable architecture."
                </blockquote>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm transition-all hover:shadow-md group">
                  <div className="text-3xl font-bold text-[#1d1d1f] dark:text-white">4+</div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter mt-1">Projects Completed</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm transition-all hover:shadow-md group">
                  <div className="text-3xl font-bold text-[#1d1d1f] dark:text-white">1+ yrs</div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter mt-1">Professional Experience</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1d1d1f] dark:text-[#f5f5f7] mb-5">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Docker", "AWS", "UI/UX"].map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-gray-200 rounded-full text-xs font-semibold border border-gray-200 dark:border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1d1d1f] dark:text-[#f5f5f7] mb-5">Contact Details</h4>
                  <div className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <a href="mailto:aniketdoke35@gmail.com" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                      <Mail className="w-4 h-4 text-gray-400" />
                      aniketdoke35@gmail.com
                    </a>
                    <a href="tel:+918459795785" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                      <Phone className="w-4 h-4 text-gray-400" />
                      +91 8459795785
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      Pune, Maharashtra
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <Button className="w-full sm:w-auto bg-[#0066cc] text-white rounded-full px-8 py-6 text-sm font-semibold hover:bg-blue-700 dark:bg-[#005bb5] dark:hover:bg-[#004a94] transition-all">
                    Download Resume
                 </Button>
              </div>

            </div>
            
            {/* Right Content - Gallery */}
            <div className="lg:col-span-5 flex flex-col gap-4 about-reveal">
              <div className="w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    src={activeImage} 
                    alt="Featured" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0" 
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 h-24 lg:h-32">
                {ABOUT_IMAGES.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeIndex === idx ? 'border-blue-500 scale-100 shadow-lg opacity-100' : 'border-transparent opacity-50 scale-95 hover:opacity-80'}`}
                  >
                    <img src={img} alt={`Gallery thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Reveal animation
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    // Horizontal Scroll
    const container = containerRef.current;
    if (container) {
      let scrollWidth = container.scrollWidth - document.documentElement.clientWidth;
      gsap.to(container, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => "+=" + scrollWidth,
        }
      });
    }

    // Magnetic 3D tilt effect for project cards
    const projectCards = document.querySelectorAll('.project-card.group');
    projectCards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      htmlCard.addEventListener('mousemove', (e) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(htmlCard, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformOrigin: 'center center',
          duration: 0.5,
          ease: 'power2.out',
          boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0,0,0,0.1)`
        });
      });

      htmlCard.addEventListener('mouseleave', () => {
        gsap.to(htmlCard, {
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.4)',
          boxShadow: 'none'
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="py-16 md:py-24 overflow-hidden h-screen flex flex-col justify-center relative">
      <div className="absolute top-16 md:top-24 left-0 w-full px-4 sm:px-6 lg:px-12 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] project-card">
               Selected Projects.
             </h2>
          </div>
        </div>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-12 w-full pt-20">
        <div ref={containerRef} className="flex gap-6 w-max flex-nowrap pb-12">
          {PROJECTS.map((project, index) => (
            <React.Fragment key={project.id}>
              <Dialog>
                <DialogTrigger asChild>
                <div 
                  className={`group cursor-pointer text-left rounded-2xl p-6 flex flex-col justify-between h-[450px] w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 transition-all border ${
                    index % 2 === 1 
                      ? 'bg-[#1d1d1f] dark:bg-white/5 border-transparent dark:border-white/10 text-white shadow-lg' 
                      : 'bg-white dark:bg-[#121212] border-gray-200 dark:border-white/10 shadow-sm'
                  } project-card opacity-0`}
                >
                  <div>
                    <div className={`relative overflow-hidden rounded-xl aspect-[4/3] mb-6 ${project.color}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                    <div className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${index % 2 === 1 ? 'text-gray-400 dark:text-gray-500' : 'text-[#0066cc] dark:text-blue-400'}`}>{project.category}</div>
                    <h3 className={`text-xl font-bold ${index % 2 === 1 ? 'text-white' : 'text-[#1d1d1f] dark:text-[#f5f5f7]'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mt-2 line-clamp-2 ${index % 2 === 1 ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className={`text-sm font-medium flex items-center gap-1 mt-6 ${index % 2 === 1 ? 'text-white' : 'text-[#1d1d1f] dark:text-[#f5f5f7]'}`}>
                    View Case Study <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl border-0 p-0 overflow-hidden rounded-[2rem] bg-white dark:bg-[#121212] text-[#1d1d1f] dark:text-[#f5f5f7]">
                <div className="relative h-64 sm:h-80 w-full">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 sm:p-10">
                  <Badge variant="outline" className="mb-4 text-xs tracking-wider uppercase bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 dark:text-gray-300">{project.category}</Badge>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold tracking-tight mb-2 dark:text-[#f5f5f7]">{project.title}</DialogTitle>
                    <DialogDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                      {project.description}
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-[#f5f5f7] mb-3 uppercase tracking-wider">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-sm px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-lg">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-10 flex gap-4">
                          <Button className="rounded-full px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200">Visit Live Site</Button>
                          <Button variant="outline" className="rounded-full px-8 border-gray-200 dark:border-white/20 dark:text-[#f5f5f7] hover:bg-gray-100 dark:hover:bg-white/10 text-[#1d1d1f]">Read Case Study</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.fromTo('.exp-item', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-12">
          Experience.
        </h2>
        
        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id}
              className="group border-t border-gray-200 dark:border-white/10 py-10 transition-colors hover:bg-white/60 dark:hover:bg-white/5 -mx-4 px-4 sm:mx-0 sm:px-6 rounded-2xl exp-item"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0066cc] dark:group-hover:text-[#409cff] transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 text-gray-500 dark:text-gray-400 text-sm font-medium border-l border-gray-300 dark:border-gray-700 pl-3">
                 <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{exp.company}</span>
                 <span className="text-gray-300 dark:text-gray-700">•</span>
                 <span>{exp.location}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-sm font-medium">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.fromTo('.edu-item', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="education" ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-12">
          Education.
        </h2>
        
        <div className="space-y-0">
          {EDUCATIONS.map((edu) => (
            <div 
              key={edu.id}
              className="group border-t border-gray-200 dark:border-white/10 py-10 transition-colors hover:bg-white/60 dark:hover:bg-white/5 -mx-4 px-4 sm:mx-0 sm:px-6 rounded-2xl edu-item"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0066cc] dark:group-hover:text-[#409cff] transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 text-gray-500 dark:text-gray-400 text-sm font-medium border-l border-gray-300 dark:border-gray-700 pl-3">
                 <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{edu.institution}</span>
                 <span className="text-gray-300 dark:text-gray-700">•</span>
                 <span>{edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.fromTo('.contact-item', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 border-t border-gray-200 dark:border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 contact-item">
          Get in Touch.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 contact-item">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-item flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:aniketdoke35@gmail.com">
            <Button className="rounded-full px-10 py-6 text-base font-semibold bg-[#0066cc] text-white hover:bg-blue-700 dark:bg-[#005bb5] dark:hover:bg-[#004a94] transition-all inline-flex items-center gap-2">
              <Mail size={18} />
              Say Hello
            </Button>
          </a>
          <a href="https://wa.me/918459795785" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-10 py-6 text-base font-semibold bg-[#25D366] text-white hover:bg-[#128C7E] transition-all inline-flex items-center gap-2 border-none">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              WhatsApp
            </Button>
          </a>
        </div>
        <div className="contact-item flex gap-6 justify-center items-center mt-10">
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-transform hover:scale-110 text-[#1d1d1f] dark:text-[#f5f5f7]">
             <Github size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-transform hover:scale-110 text-[#0077b5] dark:text-[#409cff]">
             <Linkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-transform hover:scale-110 text-[#E1306C] dark:text-[#ff4081]">
             <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-8 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 dark:text-gray-500 gap-6 border-t border-gray-200 dark:border-white/10 relative">
       <div>© {new Date().getFullYear()} Aniket Doke Portfolio. All rights reserved.</div>
       <div className="flex gap-6 uppercase tracking-widest font-semibold flex-wrap justify-center">
         <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">LinkedIn</span>
         <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">GitHub</span>
         <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Dribbble</span>
       </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev: string) => prev === 'light' ? 'dark' : 'light');

  return (
    <ReactLenis root>
      <SmoothCursor />
      <div className="relative min-h-screen bg-[#f5f5f7] dark:bg-[#0a0a0a] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans selection:bg-[#0066cc]/20 selection:text-[#0066cc] overflow-clip">
        {/* Animated Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 dark:bg-blue-900/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-400/20 dark:bg-purple-900/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-pink-400/20 dark:bg-pink-900/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Work />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

