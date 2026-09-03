export const portfolioData = {
  personal: {
    name: "Haider Ali",
    role: "Full-Stack & MERN Developer | AI & E-Commerce Specialist",
    roles: [
      "Full-Stack Developer",
      "MERN Stack Developer",
      "AI Models & App Development",
      "WordPress & Shopify Store Expert",
      "E-Commerce AI Integration",
      "Canva & Excel Specialist"
    ],
    status: "Available for Freelance & Full-time Roles",
    location: "Global / Remote",
    email: "haideralimangwal786@gmail.com",
    phone: "+92 311 5809634",
    whatsapp: "https://wa.me/923115809634",
    github: "https://github.com/haideralimangwal786-ctrl",
    linkedin: "https://www.linkedin.com/in/haider-ali-8a008325a/",
    facebook: "https://www.facebook.com/share/18PW8D9uGc/",
    instagram: "https://www.instagram.com/haiderali26122?igsi=eGdrbWkwczJkNDlm",
    cvUrl: "./Haider_Ali_CV.pdf",
    bio: "I design and build ultra-fast, aesthetically striking, and scalable digital products. Specialized in turning complex business ideas into seamless user experiences using modern full-stack technologies.",
    shortBio: "Architecting high-performance web applications with obsessive attention to typography, micro-interactions, and scalable engineering.",
    stats: [
      { label: "Years of Experience", value: "3+", numeric: 3, suffix: "+" },
      { label: "Completed Projects", value: "25+", numeric: 25, suffix: "+" },
      { label: "Client Satisfaction", value: "100%", numeric: 100, suffix: "%" },
      { label: "Code Commits", value: "1.2k+", numeric: 1200, suffix: "+" }
    ],
    pillars: [
      {
        number: "01",
        title: "Clean Architecture",
        description: "Writing scalable, maintainable, and modular code following industry-best software design patterns."
      },
      {
        number: "02",
        title: "Pixel-Perfect Aesthetics",
        description: "Obsessive focus on fluid typography, golden ratio spacing, and subtle micro-interactions that captivate users."
      },
      {
        number: "03",
        title: "Blazing Speed & SEO",
        description: "Optimizing bundle sizes, Core Web Vitals, and server-side rendering for sub-second load times."
      }
    ]
  },

  skills: {
    mern: [
      { name: "Full-Stack MERN Architecture", level: 96, category: "Full-Stack", experience: "3+ yrs", highlight: "End-to-end MongoDB, Express, React, and Node.js web applications", icon: "Layers" },
      { name: "React.js (Frontend Architecture)", level: 96, category: "Frontend", experience: "3+ yrs", highlight: "Component Lifecycle, Custom Hooks, State Management, Redux & Vite", icon: "Code" },
      { name: "Node.js & Express APIs", level: 93, category: "Backend", experience: "3+ yrs", highlight: "High-throughput RESTful services, Middleware, JWT auth & Microservices", icon: "Cpu" },
      { name: "MongoDB & Database Systems", level: 92, category: "Database", experience: "3+ yrs", highlight: "Complex Aggregation pipelines, Mongoose ODM, Schema indexing", icon: "Shield" },
      { name: "JavaScript (ES6+ / Modern JS)", level: 96, category: "Language", experience: "4+ yrs", highlight: "Modern async/await paradigms, closures, DOM manipulation & Web APIs", icon: "Terminal" },
      { name: "Tailwind CSS & Modern UI", level: 98, category: "Styling", experience: "3+ yrs", highlight: "Pixel-perfect responsive design, custom tokens, glassmorphism & dark modes", icon: "Sparkles" }
    ],
    ai_app: [
      { name: "AI Models & LLM Integration", level: 93, category: "AI & ML", experience: "2+ yrs", highlight: "OpenAI GPT-4, Claude, Custom Embeddings, LangChain & Prompt Design", icon: "Bot" },
      { name: "Full-Stack App Development", level: 95, category: "Applications", experience: "3+ yrs", highlight: "High-performance Progressive Web Apps, Enterprise SaaS platforms", icon: "Globe" },
      { name: "E-Commerce AI Automation", level: 91, category: "Smart Systems", experience: "2+ yrs", highlight: "AI-driven Product Recommendations, Dynamic Search & Smart Chatbots", icon: "Sparkles" },
      { name: "REST & Real-time WebSockets", level: 94, category: "Networking", experience: "3+ yrs", highlight: "Bi-directional real-time feeds, Socket.io, Server-Sent Events", icon: "Terminal" }
    ],
    ecommerce: [
      { name: "Shopify Store Development", level: 94, category: "E-Commerce", experience: "2.5+ yrs", highlight: "Custom Liquid templates, High-converting product pages & App integrations", icon: "ShoppingCart" },
      { name: "WordPress & WooCommerce", level: 95, category: "CMS", experience: "3+ yrs", highlight: "Bespoke custom themes, Plugin development, Speed optimization & SEO", icon: "Globe" },
      { name: "Payment Gateways & Checkout", level: 93, category: "Fintech", experience: "3+ yrs", highlight: "Stripe, PayPal, Local payment gateways & 1-click checkout flows", icon: "Shield" },
      { name: "Store CRO & Speed Optimization", level: 92, category: "Optimization", experience: "2.5+ yrs", highlight: "Core Web Vitals tuning, 90+ Mobile Lighthouse scores & Cart recovery", icon: "BarChart" }
    ],
    tools_design: [
      { name: "Canva Pro & Visual Branding", level: 96, category: "Design", experience: "3+ yrs", highlight: "Brand Identity, Pitch Decks, High-impact Social Media Creatives & Ads", icon: "Palette" },
      { name: "Advanced Microsoft Excel", level: 95, category: "Analytics", experience: "3.5+ yrs", highlight: "Complex Formulas, Financial Modeling, Pivot Tables & Data Dashboards", icon: "BarChart" },
      { name: "Git & GitHub Version Control", level: 95, category: "DevOps", experience: "4+ yrs", highlight: "Branching strategies, CI/CD automation, Pull Requests & Code Reviews", icon: "Code" },
      { name: "Postman & API QA Testing", level: 94, category: "Testing", experience: "3+ yrs", highlight: "Automated regression testing, endpoint validation & Mock servers", icon: "CheckCircle" }
    ]
  },

  projects: [
    {
      id: "homedify-marketplace",
      title: "Homedify – AI Powered Marketplace",
      category: "Full-Stack & AI",
      featured: true,
      tagline: "Full-stack marketplace connecting buyers & sellers with AI verification & escrow",
      description: "A full-stack marketplace platform featuring AI-based verification, secure authentication, role-based dashboards, and modern web architecture. This platform connects buyers and sellers seamlessly while ensuring maximum security.",
      image: "./src/assets/homedify.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      highlights: [
        "AI Verification System for user profiles, identity & listing authenticity",
        "Role-Based User Dashboards with secure JWT-based access controls",
        "Escrow Payment Integration for trustworthy, protected financial transactions",
        "Real-time Chat Support & Dynamic Search with high-speed indexing"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "⚡ AI Verified Platform | Escrow Protected"
    },
    {
      id: "dr-waseem-iqbal-hub",
      title: "Dr. Waseem Iqbal Research Hub",
      category: "Full-Stack & AI",
      featured: true,
      tagline: "Dynamic academic research portfolio & CMS powered by custom MERN architecture",
      description: "High-performance, fully dynamic academic research portfolio and content management system designed to showcase scientific publications, global experience, and research impact, powered by a custom MERN architecture.",
      image: "./src/assets/proj_waseem.jpg",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "JWT", "Axios"],
      highlights: [
        "Custom-built Admin Control Panel for zero-code, real-time content updates",
        "Secure JWT-based authentication system for administrative access",
        "Fully dynamic, database-driven frontend powered by MongoDB and Express REST APIs",
        "Premium glassmorphic UI design with smooth micro-animations and optimistic updates"
      ],
      liveUrl: "https://waseemiqbalresearchhub.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "🔬 Global Research CMS | Real-time Admin"
    },
    {
      id: "premium-naat-player",
      title: "Premium Naat Player",
      category: "App Development",
      featured: true,
      tagline: "Multi-user audio streaming platform with IndexedDB offline storage & visualizer",
      description: "Developed a multi-user audio streaming platform featuring advanced audio controls, custom audio visualizers, and offline playback capabilities for seamless listening experiences.",
      image: "./src/assets/naatplayer.png",
      tech: ["HTML5", "CSS3", "JavaScript", "IndexedDB", "Web Audio API"],
      highlights: [
        "Engineered an offline playback system utilizing IndexedDB storage without internet",
        "Custom interactive audio visualizers and responsive playback controls",
        "Comprehensive user authentication system and custom playlist management",
        "Smooth hardware-accelerated playback with Web Audio API"
      ],
      liveUrl: "https://naat-coral.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "🎵 Offline Storage | Web Audio API"
    },
    {
      id: "wallnest-app",
      title: "WallNest — HD Wallpaper App",
      category: "App Development",
      featured: false,
      tagline: "High-performance mobile wallpaper application powered by the Pexels API",
      description: "Engineered a high-performance cross-platform wallpaper application powered by the Pexels API with search, categories, favorites, and wallpaper setting functionality.",
      image: "./src/assets/wallnest.jpg",
      tech: ["Flutter", "Dart", "Pexels API", "Provider", "REST APIs"],
      highlights: [
        "Infinite scrolling and dynamic category filtering for instant content discovery",
        "Robust state management using Provider to handle favorites and downloads",
        "Optimized for high performance, delivering instant HD images across diverse devices",
        "One-tap wallpaper apply and high-resolution background caching"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/haideralimangwal786-ctrl",
      metrics: "📱 Cross-Platform | High-Res Wallpapers"
    },
    {
      id: "haiderweb-portfolio-cms",
      title: "Dynamic Developer Portfolio & CMS",
      category: "Full-Stack & AI",
      featured: false,
      tagline: "Personal portfolio with custom-built CMS dashboard for zero-code updates",
      description: "A premium, fully responsive personal portfolio website featuring a custom-built Content Management System (CMS). Designed with modern aesthetics and glassmorphism, it allows seamless management of projects, skills, services, and client testimonials.",
      image: "./src/assets/proj_haiderweb.jpg",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Vite", "Mongoose"],
      highlights: [
        "Custom Secure Admin Dashboard for complete content & project management",
        "Dynamic showcase of Projects, Skills, and Services from MongoDB database",
        "Integrated Contact Form with a dedicated Messages Inbox in the admin panel",
        "Real-time content updates without requiring a code redeploy"
      ],
      liveUrl: "https://haiderweb-alpha.vercel.app/",
      githubUrl: "https://github.com/haideralimangwal786-ctrl/haiderweb",
      metrics: "🚀 Production CMS | Real-time Database"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Lead Full-Stack & MERN Architect",
      company: "Apex Digital Solutions",
      period: "2023 — Present",
      type: "Full-Time",
      badge: "Active Leadership",
      description: "Directing the end-to-end full-stack MERN architecture, AI model integration pipelines, and high-conversion headless storefronts for enterprise clients.",
      achievements: [
        "Architected enterprise MERN applications handling over 250k+ daily requests with sub-100ms response times",
        "Integrated custom AI models and LLM APIs for automated content generation and dynamic customer recommendation engines",
        "Orchestrated reusable UI design systems and secure JWT-based microservices"
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "AI Models", "Express.js", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "AI & E-Commerce Web Developer",
      company: "Vortex Interactive Lab",
      period: "2022 — 2023",
      type: "Full-Time",
      badge: "Client SaaS & CRO",
      description: "Engineered high-converting Shopify stores, bespoke WordPress/WooCommerce themes, and smart SaaS web applications featuring dynamic animations.",
      achievements: [
        "Developed 15+ custom Shopify stores & WordPress websites resulting in an average 38% increase in checkout conversions",
        "Engineered real-time features using WebSockets and integrated Stripe/PayPal 1-click payment workflows",
        "Collaborated with cross-functional design teams translating complex Figma specifications into responsive web code"
      ],
      skills: ["Shopify Liquid", "WordPress", "React", "Node.js", "WooCommerce", "Stripe API", "GSAP"]
    },
    {
      id: "exp-3",
      role: "Full-Stack Engineer & Digital Solutions Freelancer",
      company: "Upwork & Global Clients",
      period: "2021 — 2022",
      type: "Contract / Remote",
      badge: "100% Job Success",
      description: "Delivered tailor-made web applications, e-commerce storefronts, Canva visual branding assets, and advanced Excel analytics dashboards for international clients.",
      achievements: [
        "Shipped 25+ completed projects with 100% 5-star client satisfaction and on-time milestones",
        "Built automated Microsoft Excel financial modeling spreadsheets and KPI analytics dashboards",
        "Designed high-impact Canva Pro marketing pitch decks, social media creatives, and digital brand identities"
      ],
      skills: ["Full-Stack Dev", "WordPress", "Shopify", "Canva Pro", "Advanced Excel", "Git & GitHub"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "University of Chakwal (UOC)",
      location: "Chakwal, Punjab, Pakistan",
      period: "2022 — 2026",
      grade: "Session 2022 — 2026",
      website: "https://uoc.edu.pk",
      image: "./src/assets/uoc-campus.jpg?v=2",
      tag: "Higher Education",
      description: "Focused on core Computer Science, Software Architecture, Full-Stack Web Development, Data Structures, Database Systems, and Intelligent Software Engineering.",
      highlights: [
        "Specialized in modern full-stack development, distributed databases & API engineering",
        "Developed scalable capstone software applications with high academic performance"
      ]
    },
    {
      degree: "F.Sc Pre-Engineering",
      institution: "Kallar Science College, Kallar Kahar",
      location: "Kallar Kahar, District Chakwal",
      period: "2020 — 2022",
      grade: "First Division • Grade A",
      website: "http://www.kksc.edu.pk",
      image: "./src/assets/kksc-campus.jpg?v=2",
      tag: "Intermediate College",
      description: "Rigorous scientific foundation in Advanced Mathematics, Physics, Chemistry, and Analytical Problem Solving at one of the premier science institutions of the region.",
      highlights: [
        "Strong analytical and mathematical reasoning foundation for computational engineering",
        "Active participation in science exhibitions and academic competitions"
      ]
    },
    {
      degree: "Matriculation (Science & Computer Studies)",
      institution: "Government High School for Boys, Mangwal",
      location: "Mangwal, District Chakwal",
      period: "2018 — 2020",
      grade: "First Division • Grade A",
      website: "https://chakwal.pk/directory/government-high-school-for-boys-mangwal_10828.html",
      image: "./src/assets/ghs-mangwal.jpg?v=2",
      tag: "Secondary Education",
      description: "Completed secondary education with high distinction in Physics, Chemistry, Mathematics, and foundational computer sciences.",
      highlights: [
        "Established strong academic excellence and early interest in digital technology and programming"
      ]
    }
  ]
};
