// ============================================
// PORTFOLIO CONFIG — Edit this file to update your site
// ============================================

const CONFIG = {

  // --- NAVIGATION ---
  nav: {
    logo: "Ah.madadi",
    cta: "Get in touch",
    ctaLink: "mailto:ah.madadi@ut.ac.ir",
    links: [
      { label: "Skills",     href: "#skills" },
      { label: "Projects",   href: "#projects" },
      { label: "Education",  href: "#education" },
      { label: "Contact",    href: "#contact" },
    ],
  },

  // --- HERO SECTION ---
  hero: {
    badge: "Open to opportunities",
    name: "Amir Hossein Madadi",
    tagline: "Electrical Engineering student at the University of Tehran. I design power systems, digital processors, and control architectures — from transistor-level to grid-scale.",
    buttons: [
      { label: "View Projects", href: "#projects", style: "primary" },
      { label: "Contact Me",    href: "#contact",  style: "ghost" },
    ],
  },

  // --- SKILLS SECTION ---
  skills: {
    label: "Expertise",
    title: "What I work with",
    description: "From power system analysis to RTL design — a cross-disciplinary engineering toolkit.",
    items: [
      {
        icon: "⚡",
        title: "Power Systems",
        desc: "Load flow analysis, stability studies, transformer design, and grid optimization.",
        tags: ["MATLAB/Simulink", "ETAP", "PowerWorld"],
      },
      {
        icon: "🔧",
        title: "Digital Design",
        desc: "RTL design, pipelined RISC-V processor, hazard handling, and FPGA synthesis.",
        tags: ["Verilog", "ModelSim", "RISC-V"],
      },
      {
        icon: "🎛️",
        title: "Control Systems",
        desc: "Feedback control, microgrid voltage/frequency regulation, and system modeling.",
        tags: ["Simulink", "dSPACE", "Python"],
      },
      {
        icon: "💻",
        title: "Software & Tools",
        desc: "Engineering simulation, data analysis, and automation scripting.",
        tags: ["Python", "LaTeX", "Git"],
      },
    ],
  },

  // --- PROJECTS SECTION ---
  projects: {
    label: "Work",
    title: "Selected projects",
    description: "Hands-on engineering projects spanning digital design, power systems, and embedded architecture.",
    items: [
      {
        title: "Pipelined RISC-V Processor",
        status: "done",  // "done" = green, "ongoing" = blue
        desc: "Full 5-stage pipelined RISC-V (RV32I) processor with data forwarding, hazard detection, control signal gating on flush, and register file write-through forwarding. Verified with a bubble-sort test program in ModelSim.",
        tech: ["Verilog", "ModelSim", "RISC-V ISA", "10 modules"],
        link: { label: "View on GitHub", url: "https://github.com/Ah-madadi" },
      },
      {
        title: "Transformer Analysis & Optimization",
        status: "done",
        desc: "Electromagnetic analysis and design optimization of power transformers using FEM simulation. Focused on core loss reduction and flux distribution analysis with parametric sweeps.",
        tech: ["MATLAB", "FEMM", "Simulink"],
        link: null,
      },
      {
        title: "Power System Stability Study",
        status: "ongoing",
        desc: "Transient stability analysis of a multi-machine power system. Modeling generator dynamics, fault scenarios, and investigating the effect of excitation control on system stability margins.",
        tech: ["MATLAB/Simulink", "PowerWorld", "Python"],
        link: null,
      },
    ],
  },

  // --- EDUCATION SECTION ---
  education: {
    label: "Background",
    title: "Education",
    description: "Academic foundation in electrical engineering with a focus on power systems.",
    items: [
      {
        icon: "🎓",
        school: "University of Tehran",
        degree: "B.Sc. in Electrical Engineering — Power Systems",
        date: "2021 — 2026 (Expected)",
      },
    ],
  },

  // --- CONTACT SECTION ---
  contact: {
    label: "Connect",
    title: "Let's talk",
    description: "Open to internships, research collaborations, and engineering roles.",
    links: [
      {
        type: "email",
        value: "ah.madadi@ut.ac.ir",
        href: "mailto:ah.madadi@ut.ac.ir",
      },
      {
        type: "github",
        value: "Ah-madadi",
        href: "https://github.com/Ah-madadi",
      },
      {
        type: "linkedin",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/amir-hossein-madadi-aa66422a4/",
      },
    ],
  },

  // --- FOOTER ---
  footer: "Built with care · © 2026 Amir Hossein Madadi",
};
