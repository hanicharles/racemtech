export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  group: "leadership" | "faculty" | "operations" | "marketing" | "business";
};

import shinuPhoto from "@/images/shinu.jpeg";
import kiranPhoto from "@/images/kiran_kumar.png";
import groupPhoto from "@/images/group_photo.jpeg";

const BASE = "https://race.reva.edu.in/wp-content/uploads";

export const team: TeamMember[] = [
  {
    name: "Dr. Shinu Abhi",
    role: "Professor & Director — Corporate Training",
    image: shinuPhoto,
    bio: "20+ years leading executive education and corporate learning programs across BFSI and IT.",
    group: "leadership",
  },
  {
    name: "Dr. J. B. Simha",
    role: "Chief Mentor & Adjunct Faculty — AI",
    image: `${BASE}/Dr._J_B_Simha.png`,
    bio: "Designed and deployed analytical and AI systems across BFSI, Telecom, Healthcare and Manufacturing.",
    group: "leadership",
  },
  {
    name: "Dr. Rashmi Agarwal",
    role: "Associate Professor",
    image: `${BASE}/Dr-Rashmi-1.png`,
    group: "faculty",
  },
  {
    name: "Paramesh G",
    role: "Assistant Professor",
    image: `${BASE}/Paramesh.png`,
    group: "faculty",
  },
  {
    name: "Kiran Kumar K V",
    role: "Assistant Professor",
    image: kiranPhoto,
    group: "faculty",
  },
  {
    name: "Sandeep Vijayaraghavan K",
    role: "Adjunct Faculty — Cybersecurity",
    image: `${BASE}/Sandeep_Vijayaraghavan.png`,
    bio: "Cybersecurity and cloud security expert at Terralogic Inc., with 20+ years of industry experience.",
    group: "leadership",
  },
  {
    name: "Sreedhu Nidheesh",
    role: "HR Business Partner",
    image: `${BASE}/Sreedhu.png`,
    group: "operations",
  },
  {
    name: "Priyanka Umarji",
    role: "Senior Manager — Corporate Partnership & Solutions",
    image: `${BASE}/Priyanka-Umarji.png`,
    group: "business",
  },
  {
    name: "Belavendra Jordan C",
    role: "Senior Technical Lead",
    image: `${BASE}/Jordan.png`,
    group: "operations",
  },
  {
    name: "Samarth Mandvekar",
    role: "AI Product Engineer",
    image: `${BASE}/Samarth.png`,
    group: "operations",
  },
  {
    name: "Vikas Sharma",
    role: "Program Manager",
    image: `${BASE}/VikasSharma.png`,
    group: "operations",
  },
  {
    name: "Irshad Ahmed",
    role: "Senior Program Manager",
    image: `${BASE}/Irshad-Ahmed.png`,
    group: "operations",
  },
  {
    name: "Nikesh Rai",
    role: "Performance Manager — Digital Marketing",
    image: `${BASE}/NikeshRai.png`,
    group: "marketing",
  },
  {
    name: "Kumar Kanti Banerjee",
    role: "Performance Manager — Marketing",
    image: `${BASE}/Kumar1.png`,
    group: "marketing",
  },
  {
    name: "D R Manmohan Rao",
    role: "Team Lead — Branding",
    image: `${BASE}/Manmohan-2.png`,
    group: "marketing",
  },
  {
    name: "Arthi V",
    role: "Content Strategist",
    image: `${BASE}/ArthiV.png`,
    group: "marketing",
  },
  {
    name: "Maha Samruthaa G",
    role: "Senior Business Development Executive",
    image: `${BASE}/MahaSamruthaa.png`,
    group: "business",
  },
  {
    name: "Chaithra V",
    role: "Senior Business Development Executive",
    image: `${BASE}/ChaitraV.png`,
    group: "business",
  },
  {
    name: "Saritha B",
    role: "Business Development Executive",
    image: `${BASE}/Saritha.png`,
    group: "business",
  },
  {
    name: "Sandra K Mathew",
    role: "Business Development Executive",
    image: `${BASE}/Sandra-K-Mathew.png`,
    group: "business",
  },
  {
    name: "Abhishek B M",
    role: "Business Development Executive",
    image: `${BASE}/Abhishek-BM.png`,
    group: "business",
  },
  {
    name: "Lintaraj",
    role: "Business Development Executive",
    image: `${BASE}/lintaraj.png`,
    group: "business",
  },
];

export const partnerLogos = [
  { name: "IBM", src: `${BASE}/2020/11/IBM-1.png` },
  { name: "DSCI", src: `${BASE}/2020/11/DSCI-1.png` },
  { name: "CloudxLab", src: `${BASE}/2020/11/Cloudx_Lab.png` },
  { name: "Jigsaw Academy", src: `${BASE}/2020/11/Jigsaw_Academy-1.png` },
  { name: "PurpleSynapz", src: `${BASE}/2020/11/PurpleSynapz-1.png` },
  { name: "Security Innovation", src: `${BASE}/2020/11/Security_innovation-1.png` },
  { name: "Terralogic", src: `${BASE}/2020/11/Terralogic-1.png` },
  { name: "Times Professional Learning", src: `${BASE}/2021/01/Times_Professional_Learning_logo2.png` },
];

export const heroImages = {
  campus: groupPhoto,
  infrastructure: `${BASE}/RACE-Aboutus-Infra.png`,
  founder: `${BASE}/2020/11/Founder_and_Chancellor_Dr._P._Shyama_Raju.jpg`,
  revaLogo: `${BASE}/2020/11/Reva-logo-1-1.png`,
  raceLogo: `${BASE}/2020/11/Race_Logo.png`,
  bannerSlide: `${BASE}/2017/02/home_betheme_slider_slide1.jpg`,
};
