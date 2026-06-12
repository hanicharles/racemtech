import shinuPhoto from "@/images/shinu.jpeg";

export type Faculty = {
  name: string;
  role: string;
  org: string;
  bio: string;
  tracks: ("ai" | "cybersecurity")[];
  image?: string;
};

export const faculty: Faculty[] = [
  {
    name: "Dr. Shinu Abhi",
    role: "Director, Corporate Learning",
    org: "REVA RACE",
    bio: "20+ years leading executive education and corporate learning programs across BFSI and IT.",
    tracks: ["ai", "cybersecurity"],
    image: shinuPhoto,
  },
  {
    name: "Dr. J. B. Simha",
    role: "Chief AI Officer & Professor",
    org: "AdoptAI Technologies / RACE",
    bio: "Designed and deployed analytical and AI systems across BFSI, Telecom, Healthcare and Manufacturing.",
    tracks: ["ai"],
  },
  {
    name: "Ratnakar Pandey",
    role: "Chief Data Scientist",
    org: "Granicus",
    bio: "AI & Data Science Leader with 15+ years of experience across Tech, BFSI, FinTech and Retail.",
    tracks: ["ai"],
  },
  {
    name: "Pradeepta Mishra",
    role: "Vice President — AI",
    org: "Beghou Consulting",
    bio: "20+ years in applied AI, deep learning and data science; author of multiple books on AI.",
    tracks: ["ai"],
  },
  {
    name: "Ravi Shukla",
    role: "Distinguished Engineer",
    org: "Dell Technologies",
    bio: "17+ years in AI, cloud and large-scale enterprise systems engineering.",
    tracks: ["ai"],
  },
  {
    name: "Akshay Kulkarni",
    role: "Global Head — AI & GenAI",
    org: "Publicis Sapient",
    bio: "Globally recognised AI/ML evangelist, author and speaker.",
    tracks: ["ai"],
  },
  {
    name: "Usha Rengaraju",
    role: "Chief of Research",
    org: "Exa Protocol",
    bio: "World's first woman Triple Kaggle Grandmaster, AI consultant and trainer.",
    tracks: ["ai"],
  },
  {
    name: "Dr. Sai Hareesh",
    role: "Innovator & Founder",
    org: "Maestro Technologies / i2i",
    bio: "14+ years in AI, Computer Vision and Deep Learning across defence and enterprise.",
    tracks: ["ai"],
  },
  {
    name: "Dr. Bismillah Kani",
    role: "Staff AI/ML Scientist",
    org: "Waygate Technologies",
    bio: "15+ years delivering enterprise-scale AI solutions across aerospace and industry.",
    tracks: ["ai"],
  },
  {
    name: "Sathya Subbiah",
    role: "Lead Research Engineer — OT Security",
    org: "Signify Innovation Labs",
    bio: "Security architect specialising in OT and embedded systems security.",
    tracks: ["cybersecurity"],
  },
  {
    name: "Qazi Kaleem",
    role: "Cybersecurity Engineer",
    org: "Amazon, Australia",
    bio: "Cloud and application security specialist with deep experience in AWS.",
    tracks: ["cybersecurity"],
  },
  {
    name: "Satish Sreenivasaiah",
    role: "Head — Product Security",
    org: "TCS",
    bio: "Security architect with two decades of experience in product and platform security.",
    tracks: ["cybersecurity"],
  },
  {
    name: "Rahul Dev",
    role: "DevSecOps Engineer",
    org: "JP Morgan",
    bio: "DevSecOps practitioner focused on CI/CD security and cloud-native pipelines.",
    tracks: ["cybersecurity"],
  },
  {
    name: "A. N. Datta",
    role: "Information Security Analyst",
    org: "TATA Consultancy Services",
    bio: "SOC and threat-hunting specialist, RACE alumnus mentoring current cohorts.",
    tracks: ["cybersecurity"],
  },
];
