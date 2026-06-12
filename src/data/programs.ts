import aiHero from "@/images/mtech_ai_hero.png";
import cyberHero from "@/images/mtech_cyber_hero.png";
import aiLab from "@/images/mtech_ai_lab.png";
import aiClassroom from "@/images/mtech_ai_classroom.png";
import cyberSoc from "@/images/mtech_cyber_soc.png";
import cyberRange from "@/images/mtech_cyber_range.png";

export type ProgramSlug = "mtech-artificial-intelligence" | "mtech-cybersecurity";

export type Program = {
  slug: ProgramSlug;
  name: string;
  degree: "M.Tech.";
  specialization: string;
  duration: string;
  associations: string[];
  tagline: string;
  overview: string;
  pgcet: {
    year: "2025";
    universityCode: "T946";
    programCode: "P8" | "R8";
  };
  image: string;
  gallery?: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const raceFullTime = {
  headline: "Master Your Future With RACE",
  subheadline:
    "Fast-track your career with AICTE-approved M.Tech. and UGC-recognized M.Sc. in AI & Cybersecurity. Gain global certifications, industry mentorship, weekday classes with internships, and weekend mentor sessions—backed by a 70–80% placement rate at RACE.",
  workIntegratedLine: "Work-integrated program: Job on weekdays + Weekend classes at campus",
  pgcet: {
    year: "2025",
    universityCode: "T946",
  },
  badges: [
    { value: "4.8/5", label: "Student Rating" },
    { value: "AICTE", label: "Approved" },
    { value: "500+", label: "Alumni Network" },
    { value: "70–80%", label: "Placement Rate (after Phase 1)" },
  ],
  whyChoose: [
    {
      title: "Top-tier industry mentors",
      body: "Learn directly from 50+ seasoned industry experts and tech leaders—sessions led by practitioners shaping the future of technology.",
      metric: "50+ Senior Leaders as Mentors",
    },
    {
      title: "Live industry projects",
      body: "Build real skills through hands-on projects that map to real enterprise challenges—problem-solving from day one.",
      metric: "Live Project Experience",
    },
    {
      title: "Proven career outcomes",
      body: "Strong outcomes supported by a structured journey—packages up to ₹11.5 LPA and early placements for many cohorts.",
      metric: "Up to ₹11.5 LPA Highest Package",
    },
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "Hands on Learning",
      duration: "3 Months",
      tracks: [
        {
          title: "Artificial Intelligence Track",
          items: ["Python", "MongoDB", "DBMS", "Power BI"],
        },
        {
          title: "Cybersecurity Track",
          items: ["Infrastructure Security", "Incident Response"],
        },
        {
          title: "Cloud Track",
          items: ["Cloud Computing", "AWS/Azure Fundamentals"],
        },
        {
          title: "Mini Project Track",
          items: ["Build real-world projects from Day 1"],
        },
      ],
      outcome: "Ready for the workforce with a strong technical base.",
    },
    {
      phase: "Phase 2",
      title: "Launch your Career",
      duration: "Earn while you Learn",
      notes: [
        "Historical Success Rate: 70–80% of cohorts placed at the end of Phase 1",
        "Placement Support Sessions: Technical resume writing and interview preparation",
        "Work-Integrated Program: Job on weekdays + immersive weekend sessions at campus",
      ],
      metrics: [
        { value: "₹35K", label: "Avg. Internship Stipend" },
        { value: "₹8 LPA", label: "Avg. Full-Time Package" },
      ],
      outcome: "A smooth transition from campus to corporate in Semester 1 itself.",
    },
    {
      phase: "Phase 3",
      title: "Achieve Mastery",
      duration: "Specialize with Industry Experts",
      notes: [
        "Advanced modules with 50+ live tools and certifications",
        "Core subjects taught by 50+ senior industry mentors with practical labs",
        "Industry-sponsored projects on real challenges",
        "Access to state-of-the-art infrastructure and industry-grade tools",
        "Global certifications to validate expertise",
      ],
      outcome: "Become job-ready with in-demand skills.",
    },
    {
      phase: "Phase 4",
      title: "Become a Master",
      duration: "Graduate as an Industry Tech Lead",
      notes: [
        "Build 2+ career-enhancing capstone projects",
        "Research publications: IEEE/Scopus-indexed paper publication or patent filing",
        "Academic recognition and grand convocation ceremony",
      ],
      outcome: "A globally recognized master’s degree with 2 years of industry experience.",
    },
  ],
  placement: {
    headline: "Start Earning from Semester 1!",
    stats: [
      { value: "70–80%", label: "Placement Rate after Phase 1" },
      { value: "₹35K", label: "Average Internship Stipend" },
      { value: "₹8 LPA", label: "Average Full-Time Package" },
    ],
    highlights: [
      {
        batch: "AY22-24 (Batch 1)",
        students: "9",
        internships: "7",
        placements: "6",
        highestStipend: "₹35,000",
        highestSalary: "₹10 LPA",
      },
      {
        batch: "AY23-25 (Batch 2)",
        students: "29",
        internships: "24",
        placements: "18",
        highestStipend: "₹42,000",
        highestSalary: "₹11.5 LPA",
      },
      {
        batch: "AY24-26 (Batch 3)",
        students: "32",
        internships: "22",
        placements: "7",
        highestStipend: "₹35,000",
        highestSalary: "₹6 LPA",
      },
    ],
    totals: [
      { value: "70+", label: "Total Students" },
      { value: "53+", label: "Internship Offers" },
      { value: "31+", label: "Full-time Placements" },
      { value: "₹11.5 LPA", label: "Highest Package" },
    ],
  },
  successStories: [
    {
      name: "Satyam Kumar Yadav",
      role: "Associate Manager — Information Security (Governance, Risk and Compliance)",
      company: "Navi Finserv Limited",
      program: "M.Tech. Cybersecurity",
      batch: "Batch 2023",
      link: "https://www.linkedin.com/in/satyam-kumar-yadav-ba3554198/",
      highlight: "Placed as Associate Manager",
    },
    {
      name: "Afreen N",
      role: "Associate Software Engineer",
      company: "Ecolabs",
      program: "M.Tech. Artificial Intelligence",
      batch: "2025",
      link: "https://www.linkedin.com/in/afreen-n/",
      highlight: "Career start in AI",
    },
    {
      name: "M Prathyusha",
      role: "Associate AI/ML Engineer",
      company: "66degrees",
      program: "M.Tech. Artificial Intelligence",
      batch: "2024",
      link: "https://www.linkedin.com/in/prathyushareddy01/",
      highlight: "Role in AI/ML",
    },
    {
      name: "Tenzin Namsey",
      role: "Security Analyst",
      company: "Terralogic Software Solutions",
      program: "M.Tech. Cybersecurity",
      batch: "2025",
      link: "https://www.linkedin.com/in/tenzin-namsey-85141a20a/",
      highlight: "Security analyst placement",
    },
  ],
} as const;

export const programs: Program[] = [
  {
    slug: "mtech-artificial-intelligence",
    degree: "M.Tech.",
    specialization: "Artificial Intelligence",
    name: "M.Tech. in Artificial Intelligence",
    duration: "24 months",
    associations: ["AWS Academy", "Microsoft Azure"],
    tagline: "Turn curiosity into code.",
    overview:
      "A full-time postgraduate program designed to build strong AI foundations, hands-on skills, and real project experience through a structured multi-phase journey.",
    pgcet: {
      year: "2025",
      universityCode: "T946",
      programCode: "P8",
    },
    image: aiHero,
    gallery: [
      {
        title: "Advanced AI & Computing Lab",
        description: "Equipped with high-performance computing clusters, GPU server racks, and AI software stacks for building deep learning models, training neural networks, and processing large scale datasets.",
        image: aiLab,
      },
      {
        title: "Executive Smart Classroom",
        description: "Designed for intensive classroom lecture sessions, code reviews, and direct interactions with industry mentors from AWS Academy and Microsoft Azure.",
        image: aiClassroom,
      }
    ],
  },
  {
    slug: "mtech-cybersecurity",
    degree: "M.Tech.",
    specialization: "Cybersecurity",
    name: "M.Tech. in Cybersecurity",
    duration: "24 months",
    associations: ["EC-Council", "Microsoft Azure Cloud", "Terralogic Inc."],
    tagline: "Turn vigilance into victory.",
    overview:
      "A full-time postgraduate program focused on security fundamentals, incident response, and advanced specialization—supported by mentorship, labs, and industry-aligned outcomes.",
    pgcet: {
      year: "2025",
      universityCode: "T946",
      programCode: "R8",
    },
    image: cyberHero,
    gallery: [
      {
        title: "Security Operations Centre (SOC) Simulation Lab",
        description: "A sandbox SOC setup featuring real-time security dashboard simulations, threat maps, intrusion detection systems, and vulnerability assessment tools.",
        image: cyberSoc,
      },
      {
        title: "Cyber Range Sandbox Lab",
        description: "A secure playground for ethical hacking, penetration testing, malware analysis, and network defense simulations using industry-standard tools.",
        image: cyberRange,
      }
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
