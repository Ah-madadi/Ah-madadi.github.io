const CONFIG = {
  "nav": {
    "logo": "Ah.madadi",
    "cta": "Get in touch",
    "ctaLink": "mailto:ah.madadi@ut.ac.ir",
    "links": [
      {
        "label": "Skills",
        "href": "#skills"
      },
      {
        "label": "Projects",
        "href": "#projects"
      },
      {
        "label": "Education",
        "href": "#education"
      },
      {
        "label": "Contact",
        "href": "#contact"
      }
    ]
  },
  "hero": {
    "badge": "Electrical Engineering · Power",
    "name": "Amir Hossein Madadi",
    "tagline": "Electrical Engineering student at the University of Tehran. I design and simulate power grids, electrical machines, RISC-V microprocessors, and control architectures — from transistor-level hardware to grid-scale systems.",
    "buttons": [
      {
        "label": "View Projects",
        "href": "#projects",
        "style": "primary"
      },
      {
        "label": "Contact Me",
        "href": "#contact",
        "style": "ghost"
      }
    ]
  },
  "skills": {
    "label": "Expertise",
    "title": "Core Engineering Competencies & Toolchain",
    "description": "Comprehensive expertise across power systems, electrical machines, digital design, and computational engineering using industry-standard tools.",
    "items": [
      {
        "icon": "power",
        "title": "Power Systems & Grid Analysis",
        "desc": "Load flow, short-circuit analysis, contingency studies, and grid-scale power system simulation.",
        "tags": [
          "DIgSILENT PowerFactory",
          "PowerWorld",
          "MATLAB/Simulink"
        ]
      },
      {
        "icon": "digital",
        "title": "Digital Logic & Processor Design",
        "desc": "RTL architecture, pipelined RISC-V/MIPS processors, sequential systems, and FPGA synthesis.",
        "tags": [
          "Verilog",
          "Quartus Prime",
          "ModelSim",
          "RISC-V"
        ]
      },
      {
        "icon": "machines",
        "title": "Electrical Machines & Transformer Design",
        "desc": "FEM-based motor/transformer modeling, equivalent-circuit analysis, and electromagnetic field simulation.",
        "tags": [
          "Ansys Maxwell",
          "Simcenter SPEED",
          "COMSOL",
          "RMxprt"
        ]
      },
      {
        "icon": "control",
        "title": "Control Systems & Automation",
        "desc": "Motor control, linear dynamic systems, industrial process control, and PLC programming.",
        "tags": [
          "MATLAB/Simulink",
          "Simscape",
          "Siemens PLC"
        ]
      },
      {
        "icon": "circuits",
        "title": "Circuits & Electronics",
        "desc": "Analog/digital circuit simulation, transient analysis, high-voltage insulation, and PCB design.",
        "tags": [
          "LTspice",
          "PSpice",
          "Multisim",
          "OrCAD Capture",
          "Altium Designer"
        ]
      },
      {
        "icon": "software",
        "title": "Computational Engineering",
        "desc": "Algorithmic simulation, data processing, numerical methods, and embedded software development.",
        "tags": [
          "Python",
          "C/C++",
          "MATLAB Live Scripts",
          "NumPy",
          "AutoCAD"
        ]
      }
    ]
  },
  "projects": {
    "label": "Work",
    "title": "All Projects",
    "description": "Complete portfolio of engineering projects — from power grid analysis and electrical machine design to digital processor architecture and control systems.",
    "items": [
      {
        "featured": true,
        "title": "Power System Analysis — IEEE 39-Bus",
        "desc": "Load flow and short-circuit studies on the IEEE 39-Bus test network using DIgSILENT PowerFactory. Performed maximum loadability analysis, generator outage scenarios, voltage profiling, and N-1 contingency assessment. Compared Newton-Raphson and Fast Decoupled algorithms in MATLAB for convergence accuracy on large networks.",
        "tech": [
          "DIgSILENT PowerFactory",
          "MATLAB",
          "IEEE 39-Bus",
          "Load Flow",
          "Short Circuit"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "Power System Analysis — 400kV/230kV Transmission Network",
        "desc": "Analyzed 400kV and 230kV transmission line parameters on tower configurations, performed load-flow studies, and assessed N-1 contingency criteria for grid reliability. Implemented Newton-Raphson, Fast Decoupled, and Gauss-Seidel algorithms in MATLAB Live Scripts for large-network convergence.",
        "tech": [
          "MATLAB",
          "Live Scripts",
          "Transmission Line"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "Three-Phase Induction Motor Design — Ansys Maxwell-RMxprt",
        "desc": "Designed a 7.5kW/1452rpm/380V 4-pole induction motor in Ansys Maxwell-RMxprt. Specified stator/rotor geometry, slot dimensions, winding configuration, and performed electromagnetic performance characterization including torque-speed and efficiency curves.",
        "tech": [
          "Ansys Maxwell",
          "RMxprt",
          "7.5kW"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "Pipelined, Multi-Cycle & Single-Cycle RISC-V Processor Design",
        "desc": "Designed and verified RV32I-class RISC-V processor architectures in Verilog: single-cycle, multi-cycle, and 5-stage pipelined datapaths. Implemented ALU, register file, immediate generation, branch control, instruction/data memories, forwarding, hazard detection, and flush/control gating. Validated with custom assembly workloads including signed 32-bit array sorting.",
        "tech": [
          "Verilog",
          "ModelSim",
          "Quartus"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "High-Frequency Transformer Design & Construction",
        "desc": "Designed and built a high-frequency transformer using EE55 ferrite core for 20kHz–several MHz range. Performed parameter calculations, selected litz wire for skin-effect mitigation, and validated performance through practical testing. Combined analytical design in Excel with hands-on construction.",
        "tech": [
          "Ferrite Core EE55",
          "Litz Wire",
          "High Frequency",
          "Excel"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "Motor Speed Control & DC Motor Design",
        "desc": "Implemented motor speed control strategies for DC shunt and induction motors using Simulink/Simscape with FOC. Designed and optimized a DC motor in Simcenter SPEED including geometric and electromagnetic parameter calculation. Compared dynamic responses between classical and modern control approaches.",
        "tech": [
          "Simulink",
          "Simscape",
          "Simcenter SPEED"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "CSTR Process Control — Nonlinear Industrial System",
        "desc": "Modeled and controlled a Continuous Stirred Tank Reactor (CSTR) with irreversible exothermic A→B reaction. Implemented 3 coupled differential equations (mass balance, reactor energy, jacket energy) with parameters F=100 L/min, V=100L. Designed control loops for temperature and conversion regulation in Simulink.",
        "tech": [
          "MATLAB",
          "Simulink"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "FPGA Function Generator (DDS) — Digital Synthesis",
        "desc": "Built a Direct Digital Synthesis function generator on FPGA generating sine, square, triangular, sawtooth, half-wave, and full-wave rectified waveforms. Implemented DAC with PWM, frequency/amplitude selector, and ROM-based waveform lookup. Includes Ring Oscillator, LM555 Timer, and Schmitt Trigger Oscillator implementations in LTspice before FPGA realization.",
        "tech": [
          "Verilog",
          "Quartus Prime",
          "FPGA",
          "PWM DAC",
          "LTspice"
        ],
        "link": null,
        "status": "done"
      },
      {
        "featured": true,
        "title": "High-Voltage Insulation & Electric Field Simulation",
        "desc": "Analyzed 2D electric potential and field distribution in electrode/insulation geometries using FDM, Monte Carlo, and FEM. Studied traveling waves on 300Ω air lines (1500km/400km), damping behavior, and transient response. Combined MATLAB, COMSOL, and LTspice for multi-tool validation of insulation coordination.",
        "tech": [
          "COMSOL",
          "FDM",
          "Monte Carlo",
          "LTspice"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "MIPS Single-Cycle, Pipeline & Multi-Cycle Processors",
        "desc": "Designed three MIPS processor architectures in Verilog: single-cycle (ALU, register file, control unit, data memory), 5-stage pipeline with forwarding and hazard units, and multi-cycle implementation. Validated with array sorting and arithmetic test programs.",
        "tech": [
          "Verilog",
          "ModelSim",
          "MIPS",
          "Computer Architecture"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "FPGA Digital Design — Radix-4 Multiplier & Accelerators",
        "desc": "Implemented Radix-4 multiplier on FPGA with datapath/controller partitioning. Built Exponential Engine as SoC accelerator with wrapper controller in SystemVerilog. Includes clock generation, frequency dividers, Baud rate generator for UART, and T flip-flop based sequential systems.",
        "tech": [
          "Verilog",
          "SystemVerilog",
          "Quartus Prime",
          "FPGA",
          "SoC Accelerator"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Rat-in-Maze Hardware Solver & Linear Regression Accelerator",
        "desc": "Designed hardware to solve 16×16 mazes using maze memory and solver modules. Built a linear regression hardware accelerator with data loader, coefficient calculator, and error checker using datapath/controller architecture. Implemented Booth multiplier for arithmetic operations.",
        "tech": [
          "Verilog",
          "ModelSim",
          "Booth Multiplier"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Electronics Projects — Oscillators, Amplifiers & Multi-Stage Design",
        "desc": "Built multi-waveform oscillators (square via Op-Amp → triangular integrator → half-wave triangle). Designed 3-stage transistor amplifier (CC + CE + CB) with PSPICE simulation and theoretical comparison. Performed differential amplifier analysis with CMRR, AC sweep, and Early voltage effects.",
        "tech": [
          "LTspice",
          "PSPICE",
          "Multisim",
          "Op-Amp",
          "BJT Amplifier"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Circuit Labs — Oscilloscope, AC/DC Analysis & Frequency Response",
        "desc": "9 lab sessions covering oscilloscope fundamentals, digital multimeter use, resistive circuits (KVL/KCL), nonlinear circuits (diodes/transistors), Op-Amp circuits, first/second-order transient response, and frequency response with resonance and impedance matching.",
        "tech": [
          "Oscilloscope",
          "Multimeter",
          "RLC Circuits",
          "Frequency Response",
          "Impedance Matching",
          "Lab Equipment"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Linear Control Systems — Lab & Dynamic Response",
        "desc": "Completed 6 control systems lab experiments in MATLAB/Simulink. Analyzed stability from pole locations, first/second-order transient responses, feedback behavior, root-locus and Bode-based interpretation, and compensator design for system optimization.",
        "tech": [
          "MATLAB",
          "Simulink",
          "Root Locus",
          "Bode",
          "Feedback Control"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Signals & Systems — Laplace, Fourier & Convolution",
        "desc": "Implemented 7 computational assignments covering Laplace transforms, Fourier analysis, system response, convolution, and impulse response. Built custom implementations replacing built-in functions to demonstrate algorithmic understanding.",
        "tech": [
          "MATLAB",
          "Laplace Transform",
          "Fourier Transform",
          "Convolution",
          "Signal Processing"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Engineering Statistics & Probability",
        "desc": "Completed 5 projects: Bayes classifier (NumPy), distribution simulation, Bayesian estimation with correlation, Central Limit Theorem proof via moment-generating functions, and MLE parameter estimation. Topics include birthday paradox, coin games, and dataset analysis.",
        "tech": [
          "Python",
          "NumPy",
          "Bayesian Statistics",
          "CLT",
          "MLE",
          "Statistical Modeling"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "C Programming — Dual Snake Game & University Reservation System",
        "desc": "Developed a competitive two-player Snake game with 2D arrays, pointers, and random functions. Built a university cafeteria reservation system evolving from dynamic arrays to linked lists. 8 lab sessions covering arrays, pointers, file I/O, and dynamic memory.",
        "tech": [
          "C",
          "Data Structures",
          "Linked Lists"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Electromagnetics — DC Motor Physical Modeling",
        "desc": "Modeled a single-loop DC motor from first principles: magnetic field, magnetic force, Faraday's law, and induced EMF. Implemented in MATLAB with 3-person team, combining analytical derivation with numerical simulation.",
        "tech": [
          "MATLAB",
          "Electromagnetics",
          "Physical Simulation"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "Overvoltage Detection & Three-Phase Unbalance",
        "desc": "Designed an overvoltage detection circuit for AC networks and a three-phase unbalance detector (conductor break) in Multisim. Two-part project combining protection relay concepts with power quality analysis.",
        "tech": [
          "Multisim",
          "Power Quality",
          "Overvoltage Protection",
          "Three-Phase Systems"
        ],
        "link": null,
        "status": "done"
      },
      {
        "title": "PCB Design & General Workshop",
        "desc": "11-week workshop covering resistor/capacitor fundamentals, oscilloscope and multimeter usage, and PCB design principles. Hands-on experience with Arduino-based prototyping and circuit construction.",
        "tech": [
          "Arduino",
          "PCB Design",
          "Oscilloscope",
          "Prototyping",
          "Lab Equipment"
        ],
        "link": null,
        "status": "done"
      }
    ]
  },
  "education": {
    "label": "Background",
    "title": "Education",
    "description": "Foundational and applied engineering background with hands-on expertise in power systems, electrical machines, and digital design.",
    "items": [
      {
        "icon": "🎓",
        "school": "University of Tehran",
        "degree": "B.Sc. in Electrical Engineering — Power Engineering",
        "date": "2021 — 2026 (Expected)"
      }
    ]
  },
  "contact": {
    "label": "Connect",
    "title": "Let's talk",
    "description": "Open to internships, research collaborations, and engineering roles in power systems, electrical machines, digital hardware, and engineering simulations.",
    "links": [
      {
        "type": "email",
        "value": "ah.madadi@ut.ac.ir",
        "href": "mailto:ah.madadi@ut.ac.ir"
      },
      {
        "type": "github",
        "value": "Ah-madadi",
        "href": "https://github.com/Ah-madadi"
      },
      {
        "type": "linkedin",
        "value": "Connect with me",
        "href": "https://www.linkedin.com/in/Ah-madadi"
      },
      {
        "type": "resume",
        "value": "Download CV (FA)",
        "href": "Resume_AmirHossein_Madadi.pdf"
      },
      {
        "type": "resume",
        "value": "Download CV (EN)",
        "href": "Resume_AmirHossein_Madadi_EN.pdf"
      }
    ]
  },
  "footer": "Built with care · © 2026 Amir Hossein Madadi"
};
