export const siteConfig = {
  name: "Trimurti Enterprise",
  url: "https://trimurtienterprisespvt.com",
  description:
    "Trimurti Enterprise delivers infrastructure materials, transport logistics, hard rock blasting, and civil execution support for large-scale industrial projects across India.",
  phone: "+91 9082433849",
  email: "trimurtienterprises4726@gmail.com",
  whatsapp: "919137304245",
  workingHours: "Monday to Saturday, 9:00 AM to 10:00 PM",
  address: {
    street: "Khadakpada Genreral Arun Kumar Vaidya Marg, Goregaon East",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "40065"
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/trimurti_enterprises47?igsh=aWI3aWJ2ZzlibTA3" },
    { label: "YouTube", href: "https://youtube.com/@trimurtienterprisespvt?si=WkX31CyUNzvHkNLB" }
  ]
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Infrastructure Services",
        children: [
          { label: "Hard Rock Control Blasting", href: "/services/hard-rock-control-blasting" },
          { label: "Hard Rock Diamond Saw Cutting", href: "/services/hard-rock-diamond-saw-cutting" },
          { label: "Chemical Hard Rock Cracking", href: "/services/chemical-hard-rock-cracking" },
          { label: "Manual Hard Rock Breaking", href: "/services/manual-hard-rock-breaking" },
          { label: "Splitter Rock Cracking", href: "/services/splitter-rock-cracking" },
          { label: "Fixing of Steel Fabric / Wiremesh", href: "/services/steel-fabric-wiremesh-fixing" },
          { label: "All Diameter Rockbolts", href: "/services/all-diameter-rockbolts" },
          { label: "Shotcrete", href: "/services/shotcrete" }
        ]
      },
      {
        label: "Trimurti Stone Crusher",
        href: "/services/materials/trimurti-stone-crusher"
      },
      {
        label: "Trimurti Transport",
        href: "/services/materials/trimurti-transport"
      }
    ]
  },
  { label: "Equipments", href: "/equipments" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const equipments = [
  {
    title: "Excavation Machinery",
    description: "High-capacity excavators and rock-handling machines built for deep cutting, bulk excavation, and demanding terrain conditions.",
    icon: "tools",
    points: [
      "Heavy-duty excavation support",
      "Reliable performance on hard strata",
      "Fast deployment for active sites"
    ]
  },
  {
    title: "Crushing Plant Equipment",
    description: "Production-ready crushing and screening systems for graded aggregates, M.Sand, and continuous material output.",
    icon: "crusher",
    points: [
      "Consistent aggregate processing",
      "Efficient grading and screening",
      "Built for steady production cycles"
    ]
  },
  {
    title: "Transport Fleet",
    description: "Bulk logistics vehicles supporting rubble, metal, sand, and construction material movement across infrastructure projects.",
    icon: "truck",
    points: [
      "Scheduled bulk haulage",
      "Material-safe delivery planning",
      "Project-linked dispatch reliability"
    ]
  },
  {
    title: "Rock Support Systems",
    description: "Equipment and installation support for rockbolts, wiremesh, and stabilization work in tunnels, slopes, and exposed faces.",
    icon: "bolt",
    points: [
      "Stability-focused support systems",
      "Tunnel and slope reinforcement",
      "Ready for complex site conditions"
    ]
  }
];

export const equipmentInventory = [
  {
    serialNo: "1",
    machine: "Hydraulic Excavator",
    description: "TATA SUPER EX-200LC SANY -SY220 C-9 & SANY SY140 C-9 XCMG-210",
    quantity: "12 NOS"
  },
  {
    serialNo: "2",
    machine: "Diamond Cutting Machine",
    description: "LT:- 4 & Cutting Machinga",
    quantity: "8 NOS"
  },
  {
    serialNo: "3",
    machine: "Dumper / Hyva",
    description: "TATA 1613 & Ashok Layland",
    quantity: "18 NOS"
  },
  {
    serialNo: "4",
    machine: "Air Compreser & Electric Air Compreser",
    description: "Cp-cp 300F & ATLAS-ELGI DT 450/150",
    quantity: "10 NOS"
  },
  {
    serialNo: "5",
    machine: "Rock Breaker",
    description: "FURUKAWA HYDEAULIC F-22LN :4 R.K 22 HYDEAULIC :- 4",
    quantity: "12 NOS"
  },
  {
    serialNo: "6",
    machine: "Jack Hammer",
    description: "SANDVIC",
    quantity: "55 NOS"
  }
];

export const projects = [
  {
    title: "Urban Excavation Works",
    description: "Precision hard rock execution for dense city sites where vibration control, sequencing, and safety planning are critical.",
    image: "/images/services/Hard Rock Control Blasting1.jpeg",
    points: [
      "Controlled blasting strategy",
      "Low-disturbance site execution",
      "Schedule-focused delivery"
    ]
  },
  {
    title: "Aggregate Supply Projects",
    description: "Continuous delivery of 20 mm aggregate, M.Sand, and plaster sand for concrete, finishing, and structural packages.",
    image: "/images/services/M. SAND1.jpeg",
    points: [
      "Consistent grading quality",
      "Bulk production readiness",
      "Dependable material supply"
    ]
  },
  {
    title: "Heavy Logistics Operations",
    description: "Coordinated movement of rubble, metal, and sand through route-planned transport systems that keep sites moving.",
    image: "/images/services/Trimurti Transport1.jpeg",
    points: [
      "Efficient route planning",
      "On-time dispatch support",
      "Multi-load infrastructure logistics"
    ]
  }
];

export const projectRecords = [
  { serialNo: "1", name: "Afcon Infrastructure Limited", project: "Shaft, Assembly & Tail Water Tunnel Project Mulund", work: "Control Blasting Work For Shaft, Assembly & Tail Water Tunnel", site: "Mulund Thane" },
  { serialNo: "2", name: "Afcon Infrastructure Limited", project: "Shaft, Assembly & Tail Water Tunnel Project Gate No :- 4", work: "112 Mtr Dept Excavation And Control Blating Work Completed in 3 month", site: "CIDCO" },
  { serialNo: "3", name: "H.C.C. - H.D.C.", project: "Coast Road Project", work: "Control Blasting Work", site: "Worli - Bandra Sea Link" },
  { serialNo: "4", name: "Lodha", project: "Residential Bulding", work: "Control Blasting Work & Daimond Rock Cutting", site: "Dombivali" },
  { serialNo: "5", name: "Lodha", project: "Palava Social Housing - Infra", work: "Hard Rock Control Blasting Work", site: "Taloja, Palava II" },
  { serialNo: "6", name: "Lodha", project: "Royall Villa", work: "Control Blasting Work", site: "Upper Thane, Mankoli" },
  { serialNo: "7", name: "3 Circle", project: "Antaliya 2", work: "Daimond Hard Rock Cutting Work & Chemical Rock Cracking", site: "Tardeo Antaliya Building, Mumbai" },
  { serialNo: "8", name: "FERANI DEVLOPERS", project: "K Raheja", work: "Control Blasting Work", site: "Malad, Dindoshi (E)" },
  { serialNo: "9", name: "Palam Grove Beach Hotel Pvt. Ltd", project: "K Raheja", work: "Daimond Hard Rock Cutting", site: "Ghatkopar" },
  { serialNo: "10", name: "SHIRKE", project: "PRADHAN MANTRI AWAS YOGNA", work: "Control Blasting Work", site: "KHONI, DOMBIVALI" },
  { serialNo: "11", name: "H.C.C.", project: "UNDER GROUND MTED", work: "Control Blasting Work", site: "Kalba Devi, Mumbai" },
  { serialNo: "12", name: "Gundecha", project: "Residential Building", work: "Control Blasting Work", site: "Poisor, Mumbai" },
  { serialNo: "13", name: "MAHALINGAM EARTH MOVERS PVT.LTD", project: "Residential Building", work: "Control Blasting Work", site: "Akuli, Kandivali (E)" },
  { serialNo: "14", name: "L&T, NESCO", project: "I.T. Park", work: "Control Blasting Work", site: "Western Highway, Goregaon (E)" },
  { serialNo: "15", name: "BALAJI EARTH MOVERS", project: "Residential Building", work: "Control Blasting Work", site: "Dahisar (E), Mumbai" },
  { serialNo: "16", name: "L&T COMPANY (DURISTAR INRATUCTTER PVT.LTD)", project: "Metro Rail Vidhan Bhavan Stion", work: "Control Blasting Work", site: "Vidhan Bhavan, Mumbai" },
  { serialNo: "17", name: "FORBES COMPANY (SHAPOORJI PALLONJI)", project: "Residential Tower", work: "Control Blasting Work", site: "Chandivali, Mumbai" },
  { serialNo: "18", name: "H.P.C.L COMPANY (L.R. ENTERPRISES)", project: "Calion Plant", work: "Control Blasting Work", site: "Mahul, Mumbai" },
  { serialNo: "19", name: "H.P.C.L. COMPANY (S.R.ENTERPRISES)", project: "Calion Plant", work: "Control Blasting Work", site: "Mahul, Mumbai" },
  { serialNo: "20", name: "M.I.D.C (I. R. ENTERPRISES)", project: "MIDC RAIL PROGRESS", work: "Control Blasting Work", site: "M.I.D.C. STATION, ANDHERI (E)" }
];

export const materialServicePages = [
  {
    slug: "trimurti-stone-crusher",
    title: "Trimurti Stone Crusher",
    group: "Stone Crusher Division",
    description: "Engineered aggregate production with strict quality grading for infrastructure and construction projects.",
    metaTitle: "Stone Crusher in Mumbai | Aggregate & M.Sand Supply in Maharashtra",
    metaDescription: "Trimurti Enterprise operates top-tier stone crushers in Mumbai, Maharashtra. We supply 20mm aggregate, M.Sand, and plaster sand for heavy infrastructure projects.",
    icon: "crusher",
    points: [
      "Consistent grading and size control",
      "High-volume output for project continuity",
      "Tested quality for structural reliability"
    ],
    children: [
      { label: "20 mm", href: "/services/materials/trimurti-stone-crusher#stone-crusher-20-mm" },
      { label: "M.Sand", href: "/services/materials/trimurti-stone-crusher#stone-crusher-m-sand" },
      { label: "Plaster Sand", href: "/services/materials/trimurti-stone-crusher#stone-crusher-plaster-sand" }
    ],
    subServices: [
      {
        slug: "stone-crusher-20-mm",
        title: "20 mm Aggregate",
        description: "High-strength 20 mm graded aggregate for concrete works, foundations, and heavy-load structural applications.",
        icon: "foundation",
        points: [
          "Uniform particle size distribution",
          "Suitable for RCC and structural concrete",
          "Reliable supply for large project demand"
        ],
        images: [
          "/images/services/M. SAND1.jpeg"
        ]
      },
      {
        slug: "stone-crusher-m-sand",
        title: "M.Sand",
        description: "Manufactured sand processed for consistent grading, clean texture, and dependable construction performance.",
        icon: "arch",
        points: [
          "Controlled fines for workability",
          "Ideal for block work and concrete mix",
          "Clean and quality-checked source"
        ],
        images: [
          "/images/services/M. SAND1.jpeg",
          "/images/services/M. SAND2.jpeg",
          "/images/services/M. SAND3.jpeg"
        ]
      },
      {
        slug: "stone-crusher-plaster-sand",
        title: "Plaster Sand",
        description: "Fine, well-graded plaster sand for smooth wall finishing and high-quality surface texture.",
        icon: "spark",
        points: [
          "Fine texture for smooth finish",
          "Low impurity and dust control",
          "Consistent quality across batches"
        ],
        images: [
          "/images/services/M. SAND2.jpeg"
        ]
      }
    ]
  },
  {
    slug: "trimurti-transport",
    title: "Trimurti Transport",
    group: "Transport Division",
    description: "Dedicated bulk logistics with disciplined scheduling and route planning for uninterrupted site operations.",
    metaTitle: "Heavy Logistics & Material Transport in Mumbai, Maharashtra",
    metaDescription: "Reliable transport services across Mumbai and Maharashtra. Bulk haulage of metal, M.Sand, and rubble for uninterrupted construction scheduling.",
    icon: "truck",
    points: [
      "Fast turnaround and route planning",
      "Bulk movement for construction materials",
      "Reliable dispatch and delivery tracking"
    ],
    children: [
      { label: "Rubble", href: "/services/materials/trimurti-transport#transport-rubble" },
      { label: "Metal 10/20", href: "/services/materials/trimurti-transport#transport-metal-10-20" },
      { label: "M.Sand", href: "/services/materials/trimurti-transport#transport-m-sand" },
      { label: "Plaster Sand", href: "/services/materials/trimurti-transport#transport-plaster-sand" }
    ],
    subServices: [
      {
        slug: "transport-rubble",
        title: "Rubble Transport",
        description: "Safe and timely rubble movement from excavation sites for disposal, filling, or reuse requirements.",
        icon: "truck",
        points: [
          "Site-to-site rubble movement",
          "Scheduled pickup and dispatch",
          "Efficient turnaround for active sites"
        ],
        images: [
          "/images/services/Trimurti Transport1.jpeg",
          "/images/services/Trimurti Transport2.jpeg"
        ]
      },
      {
        slug: "transport-metal-10-20",
        title: "Metal 10/20 Transport",
        description: "Bulk haulage of 10/20 metal for concrete and civil works with dependable delivery windows.",
        icon: "foundation",
        points: [
          "Bulk transport for metal aggregates",
          "Timely delivery to batching and site points",
          "Reliable logistics planning"
        ],
        images: [
          "/images/services/Trimurti Transport3.jpeg"
        ]
      },
      {
        slug: "transport-m-sand",
        title: "M.Sand Transport",
        description: "Consistent and on-time M.Sand logistics to maintain uninterrupted project execution.",
        icon: "arch",
        points: [
          "Clean loading and careful handling",
          "Daily or on-demand dispatch",
          "Optimized routes for fast supply"
        ],
        images: [
          "/images/services/Trimurti Transport4.jpeg",
          "/images/services/Trimurti Transport5.jpeg"
        ]
      },
      {
        slug: "transport-plaster-sand",
        title: "Plaster Sand Transport",
        description: "Specialized transport for plaster sand with controlled handling to preserve material quality.",
        icon: "spark",
        points: [
          "Loss-minimized transport handling",
          "Reliable delivery commitments",
          "Support for interior and finishing phases"
        ],
        images: [
          "/images/services/Trimurti Transport6.jpeg"
        ]
      }
    ]
  }
];
export const homeStats = [
  { value: "20+", label: "Active Projects" },
  { value: "250+", label: "Complete Projects" },
  { value: "20+", label: "Year Experience" },
  { value: "100%", label: "Safety Record" }
];

export const clients = [
  { name: "Afcons", logo: "/images/clients/afcons.jpeg", alt: "Afcons logo" },
  { name: "Arihant Superstructures Ltd.", logo: "/images/clients/Arihant.jpeg", alt: "Arihant Superstructures logo" },
  { name: "Chandak", logo: "/images/clients/chandak.jpeg", alt: "Chandak logo" },
  { name: "HCC", logo: "/images/clients/hcc.jpeg", alt: "HCC logo" },
  { name: "Lodha", logo: "/images/clients/lodha.jpeg", alt: "Lodha logo" },
  { name: "L&T", logo: "/images/clients/LT.jpeg", alt: "L&T logo" },
  { name: "Raheja Realty", logo: "/images/clients/raheja.jpeg", alt: "Raheja Realty logo" },
  { name: "Shirke", logo: "/images/clients/shirke.jpeg", alt: "Shirke logo" },
  { name: "Shapoorji Pallonji", logo: "/images/clients/SP.jpeg", alt: "Shapoorji Pallonji logo" }
];

export const services = [
  {
    slug: "hard-rock-control-blasting",
    name: "Hard Rock Control Blasting",
    short: "Precision-engineered excavation with minimal vibration and maximum control.",
    description:
      "High-precision explosives management for controlled excavations in dense geological environments and sensitive infrastructure zones.",
    heroImage: "/images/services/Hard Rock Control Blasting1.jpeg",
    detailImage: "/images/services/Hard Rock Control Blasting2.jpeg",
    ctaImage: "/images/services/Hard Rock Control Blasting3.jpeg",
    icon: "blast",
    heroTag: "Infrastructure Excellence",
    useCases: ["Urban Excavation", "Tunneling Projects", "Quarry Operations"],
    benefits: [
      {
        title: "Seismic Safety",
        text: "Advanced vibration monitoring protects nearby utilities, heritage structures, and dense urban developments."
      },
      {
        title: "Precision Profiling",
        text: "Accurate cut geometry reduces over-break and minimizes downstream backfilling requirements."
      },
      {
        title: "Time Efficiency",
        text: "Optimized blast sequencing accelerates excavation cycles and keeps infrastructure schedules on track."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Site Survey",
        text: "Geological mapping, density assessment, and utility sensitivity reviews shape the blast strategy."
      },
      {
        step: "02",
        title: "Blast Design",
        text: "Hole depth, burden, spacing, and charge distribution are modeled for safe fragmentation."
      },
      {
        step: "03",
        title: "Execution",
        text: "Electronic detonators and controlled sequencing manage energy release with site-specific discipline."
      },
      {
        step: "04",
        title: "Post-Blast Analysis",
        text: "Debris clearance and vibration review verify performance and support final sign-off."
      }
    ],
    metaTitle: "Hard Rock Control Blasting Services in Mumbai & Maharashtra",
    metaDescription:
      "Explore Trimurti Enterprise hard rock control blasting solutions for excavation, tunneling, quarry work, and sensitive urban projects in Mumbai and Maharashtra."
  },
  {
    slug: "hard-rock-diamond-saw-cutting",
    name: "Hard Rock Diamond Saw Cutting",
    short: "Clean, vibration-free sawing for precise removal in constrained sites.",
    description:
      "Industrial diamond-tipped cutting solutions for exact line control where low vibration and minimal disturbance are critical.",
    metaTitle: "Hard Rock Diamond Saw Cutting in Mumbai, Maharashtra",
    metaDescription: "Expert hard rock diamond saw cutting services in Mumbai. Clean, vibration-free sawing for precise rock removal in constrained or urban sites.",
    icon: "cut"
  },
  {
    slug: "chemical-hard-rock-cracking",
    name: "Chemical Hard Rock Cracking",
    short: "Silent expansive agents for demolition zones where blasting is restricted.",
    description:
      "Rock demolition using expansive compounds to split hard strata safely in regulated, dense, or noise-sensitive areas.",
    metaTitle: "Chemical Hard Rock Cracking Services in Mumbai | Silent Rock Demolition",
    metaDescription: "Noise-free chemical hard rock cracking across Mumbai and Maharashtra. Safe, expansive rock demolition for restricted or sensitive zones.",
    icon: "flask"
  },
  {
    slug: "manual-hard-rock-breaking",
    name: "Manual Hard Rock Breaking",
    short: "Skilled intervention for delicate and difficult access excavation work.",
    description:
      "Careful manual rock removal for precision excavation around utilities, structures, and irregular profiles.",
    metaTitle: "Manual Hard Rock Breaking Contractors in Mumbai, Maharashtra",
    metaDescription: "Professional manual hard rock breaking for delicate excavation works in Mumbai. Trust our skilled team to break hard rocks safely around active utilities.",
    icon: "hammer"
  },
  {
    slug: "splitter-rock-cracking",
    name: "Splitter Rock Cracking",
    short: "Hydraulic splitting for efficient breakdown of large hard rock sections.",
    description:
      "Controlled rock splitting solutions that improve safety and access while reducing uncontrolled breakage.",
    metaTitle: "Hydraulic Splitter Rock Cracking in Mumbai, Maharashtra",
    metaDescription: "Efficient hydraulic splitter rock cracking services across Maharashtra. Safe and controlled breakdown of large hard rock sections without extensive blasting.",
    icon: "split"
  },
  {
    slug: "steel-fabric-wiremesh-fixing",
    name: "Fixing of Steel Fabric / Wiremesh",
    short: "Reinforcement installation for slope protection and excavation stability.",
    description:
      "Mesh and fabric fixing services that strengthen exposed faces and support shotcrete or structural stabilization layers.",
    metaTitle: "Fixing of Steel Fabric & Wiremesh in Mumbai | Slope Protection",
    metaDescription: "Specialized steel fabric and wiremesh fixing in Mumbai, Maharashtra. Reliable reinforcement installation ensuring excavation stability and structural support.",
    icon: "grid"
  },
  {
    slug: "all-diameter-rockbolts",
    name: "All Diameter Rockbolts",
    short: "Comprehensive rock anchoring systems for face and tunnel stabilization.",
    description:
      "Rockbolt supply and installation across a range of diameters for underground works, slopes, and structural retaining faces.",
    metaTitle: "Rockbolt Installation Services in Mumbai | All Diameter Anchoring",
    metaDescription: "Full-service rock anchoring and all diameter rockbolts installation in Mumbai, Maharashtra. We stabilize tunnels, slopes, and heavy retaining walls.",
    icon: "bolt"
  },
  {
    slug: "shotcrete",
    name: "Shotcrete",
    short: "Immediate concrete support and surface sealing for demanding sites.",
    description:
      "High-pressure shotcrete application for excavation support, lining, sealing, and rapid structural reinforcement.",
    heroImage: "/images/services/SHOTCRETE1.jpeg",
    detailImage: "/images/services/SHOTCRETE2.jpeg",
    ctaImage: "/images/services/SHOTCRETE3.jpeg",
    icon: "drop",
    metaTitle: "Expert Shotcrete Services in Mumbai & Maharashtra",
    metaDescription:
      "Specialized shotcrete services across Mumbai. We offer rapid structural support, surface sealing, and high-pressure concrete reinforcement for challenging sites."
  }
];

export const featuredServices = [
  { title: "Civil Engineering", text: "Precision planning and structural integrity for large-scale urban developments.", icon: "arch", href: "/services" },
  { title: "Raw Materials", text: "Supplying premium stone, sand, and graded aggregates for heavy foundations.", icon: "foundation", href: "/services/materials/trimurti-stone-crusher" },
  { title: "Bulk Logistics", text: "High-capacity transport systems that keep projects supplied without delay.", icon: "truck", href: "/services/materials/trimurti-transport" },
  { title: "Mining Operations", text: "Efficient resource extraction managed with disciplined environmental safety protocols.", icon: "pick", href: "/services/hard-rock-control-blasting" },
  { title: "Heavy Equipment", text: "A modern fleet of excavators, crushers, and support machinery for high-output sites.", icon: "tools", href: "/services" },
  { title: "Rapid Deployment", text: "Responsive logistics support for emergency infrastructure repairs and supply movement.", icon: "speed", href: "/services/materials/trimurti-transport" },
  { title: "Quality Control", text: "Internal testing and sieve analysis to ensure dependable aggregate performance.", icon: "shield", href: "/services" },
  { title: "Site Consulting", text: "On-ground advice that aligns material quality, haulage planning, and structural requirements.", icon: "people", href: "/contact" }
];

export const divisions = [
  {
    title: "Trimurti Stone Crusher",
    text: "Our crushing units utilize advanced engineering to produce graded aggregates that exceed national standards for heavy-duty infrastructure.",
    points: ["High-grade basalt aggregates", "Precision sieve analysis"],
    cta: "Technical Specs",
    icon: "crusher"
  },
  {
    title: "Trimurti Transport",
    text: "A heavy-lift fleet equipped with route planning and disciplined logistics coordination for just-in-time delivery.",
    points: ["Multi-axle logistics solutions", "Specialized heavy haulage"],
    cta: "Fleet Capacity",
    icon: "truck"
  }
];

export const certifications = [
  { title: "ISO 9001:2015", text: "Quality Management", icon: "seal" },
  { title: "Class A Contractor", text: "Govt. Certified", icon: "gavel" },
  { title: "OHSAS 18001", text: "Safety Standard", icon: "shield" },
  { title: "Green Enabler", text: "Sustainable Sourcing", icon: "leaf" }
];

export const values = [
  {
    title: "The Mission",
    text: "To empower infrastructure projects with uncompromised material quality and logistics precision, ensuring every foundation is built for longevity.",
    icon: "rocket"
  },
  {
    title: "The Vision",
    text: "To be the most trusted name in architectural resources across the nation, synonymous with the strength of the structures we help build.",
    icon: "vision"
  },
  {
    title: "The Values",
    text: "Integrity in measurement, punctuality in delivery, and excellence in every grain of sand we provide to our civic partners.",
    icon: "spark"
  }
];

export const team = [
  {
    name: "Rajesh Trimurti",
    role: "Managing Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ss8XwHU8_o3AwZF2UTr10UB1T90-CIcXWclmCj5rw-INr8tRipSLCuWpPGxtjiNefaKBG2YzbrlUqaTYjsauwfz4QV8bhwZCSOdbiTB-JhPAHrhg5f64N4M-GwRS28XEbs8mBMe7lpJ-2h9IuWdL_HdpvyJvUSDi_mHxCN-BGvORFxWVEMy1ya1OUUgEaUEwi_y9FmQ2PAX9KU8Xg8Dr18LDwCHs6FWlPR9z9XFvPaLBwqOGLnjEhrIDBQJrDMFBqtdxPcKW5Bc"
  },
  {
    name: "Ananya Sharma",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBSiHlSqd_KJb2Fo4zEiYemJOEouKmuaQt5vd0AZrS73lcFHDf1VYc0qKotdhvioJGuPbqKAvpkW86fEjawh1tUaxRjJs-ixytfd3rcnOiZmLyXia7VMVXQWD2NnaC63uPqkY_XCDcndFNbrkAhABpfPG7u7xdnv-qI1HYMUJKyXi2bQZoX4hWTjf7e880Zh2cR5dBc3gdcOXSBkhjHplh0uqF0D3XUXg8KS8yMXaFYuyQfzdEo6r2MQe1YvI-wNxhMvKgYIuxpuc"
  },
  {
    name: "Vikram Singh",
    role: "Logistics Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Sc3nf71pcMeXoqay01xswrUahk2SDKYgRThoIfHBohqb_9Na1PjbhJsihM3s1yMr2x9aSRtJ3D3iyL4ISf7CSt-Y6xLnm9BMPKxPrFm7dKoutaW41nLtZHz95yDPfj8IOw1D5RP61NAyYujFx398wMYJBdjcyJFRcFbj-eXXENbf9UJNdzQ835-5pqSnGzfIOQXvp36Q44OC3corRmoGjzx5XW30kW_EE2cDT_h0M0UFsBWd0hPlP8JE5JqDSuql6zq2ylHtl7o"
  },
  {
    name: "Priya Patel",
    role: "Quality Assurance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ggsQch0zG0KlXbaC3CbQWVvQvOBLO0-nFIqUT8SiQplwQ6d9F4U9R06xNLs1JrBBKqcNtm1kNcfn6qe-Hwjc0bAd5hRGhFGxnrYuc3LkXzSmgLkD2VUuQRROv6NUT0S4g1wf90zeWLrVl12Tw-u2qvqqREx3-_n52d8fY9G8gJLv8RNBhA3sQ43Q8vv5zh_7j8AJRs3Um4Y8Tqv7H44M-iP8NyBGCAv5CiMugZh3WwYiQxVfPev5I-UZ4HIKsHd3pyc1hBZUJDY"
  }
];

export const resources = [
  {
    title: "Stone Crusher",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2NiiDj-dbPS3mFziZt5XDj0viGkXmP1vNcSFK4LGx6n9qb8GRA7dLKm08CnThOiKBacjui-6U4TMdyJv8ELQxxsWPQtQvYtlK5IwdVFYaf3fzsIEUwz-It5-RhO1LwIISW--JxodO1o9gH7pCmUsXtoHzWla1IGjgCXDmSMRltMleM2OrB3W_tkCKzIuMwNyqNe6S1fTCNUVtLAJ61LSMpgnL7oWAZ4vDbBzmt0eOkMn_PxNY4Qkc-C6PFaUdXvDYsj9wglwiWs",
    points: ["20mm aggregate", "M-Sand (manufactured sand)", "Plaster sand"],
    href: "/services/materials/trimurti-stone-crusher"
  },
  {
    title: "Transport Services",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9n9vGk9bInV-lH1C8WAZIOIcbWoC9eXg22jnGifglTlgYphA6we6rPJraQiqx-CZyuPWw4hQ1UgaEahnIui8TJ4fCnJPhhHpt_JLbHxrxkZBD0UIg2MLaU_TpNu43i9_50VbqB1xwiDr3cdLbyGtay5WSXEk9PuXfZnzKw21COtr87oQqAwDmz6M5nmPdW3Z_ML2P30cSKbMMQ9p82eFsSU-GZPN5v4p8bKdeIujSiImYuMsW7Xs78-Fb-eYvL0Pwa6-JGgw7pFE",
    points: ["Rubble transport", "Metal haulage", "Fleet logistics solutions"],
    href: "/services/materials/trimurti-transport"
  }
];

export const contactStats = [
  { value: "20+", label: "Active Projects" },
  { value: "250+", label: "Complete Projects" },
  { value: "20+", label: "Year Experience" },
  { value: "100%", label: "Safety Record" }
];

export const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPSxi9nnEz9CWZXIPFPDTIhG9vB538C6Q9DvlD4mhSpX9b0OJoJP9qlkNWyall8y5OvFrYi5Hh0LdeGkSkDGrdoAfeXWEjXN3VjTN3sw0R-KKKztyDPkq8kO3Yz8D0ueVXOe-SZHEZ4vzAcDU9KeEPfmJ1HJaf4XKoj0zlCDTwI2hotY0nFWAS0eAdeSMtb7Ei2Mu8qXOMNTS64fdGId3asevujjLe6oOPTD5R78yEVp4iOWA2c3Q4OjgxBtjoBraxJRNz2VJhk7k";

export const homeImages = {
  hero: "/images/services/home.jpeg",
  crusher:
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80",
  transport:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
};






