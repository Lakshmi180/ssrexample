//file name route.js for creating route path

import { NextResponse } from "next/server";

const home = {
  navbar: {
    logo: "/logo.png",
    links: ["Home", "Courses", "About", "Contact", "Blog", "Events", "Careers"],
  },
  banner: {
    title: "Excellence through Skills for Future-Ready Careers",
    subtitle: "For Future-Ready Careers with University Certification",
    image: "/banner-student.png",
    form: {
      fields: ["name", "email", "phone", "city", "qualification"],
      button: "Apply Now",
    },
  },
  courses: [
    { id: 1, title: "BBA", desc: "Business Administration", price: "₹50,000" },
    { id: 2, title: "Data Science & AI", desc: "Learn ML & AI", price: "₹75,000" },
    { id: 3, title: "Web Development", desc: "HTML, CSS, JavaScript, React", price: "₹60,000" },
    { id: 4, title: "Digital Marketing", desc: "SEO, Ads, Analytics", price: "₹55,000" },
    { id: 5, title: "MBA", desc: "Master of Business Administration", price: "₹1,20,000" },
    { id: 6, title: "Cybersecurity", desc: "Network & Ethical Hacking", price: "₹80,000" },
    { id: 7, title: "Cloud Computing", desc: "AWS, Azure, GCP", price: "₹95,000" },
    { id: 8, title: "Mobile App Development", desc: "Android & iOS", price: "₹70,000" },
    { id: 9, title: "Graphic Design", desc: "Photoshop, Illustrator, UI/UX", price: "₹45,000" },
    { id: 10, title: "Blockchain", desc: "Cryptocurrency & Smart Contracts", price: "₹1,00,000" },
  ],
  testimonials: [
    { name: "Rahul", text: "Great platform!", img: "/student1.png" },
    { name: "Sneha", text: "Loved the courses!", img: "/student2.png" },
    { name: "Arjun", text: "The mentors are amazing!", img: "/student3.png" },
    { name: "Meera", text: "Helped me get my dream job.", img: "/student4.png" },
    { name: "Vikram", text: "Practical and useful skills!", img: "/student5.png" },
    { name: "Anjali", text: "Best investment in education.", img: "/student6.png" },
    { name: "Rohit", text: "Supportive faculty and staff.", img: "/student7.png" },
  ],
  awards: [
    { id: 1, title: "Best EdTech Award 2024", img: "/award1.png" },
    { id: 2, title: "Innovation Award", img: "/award2.png" },
    { id: 3, title: "Excellence in Online Learning", img: "/award3.png" },
    { id: 4, title: "Top Startup 2023", img: "/award4.png" },
    { id: 5, title: "Best Learning Platform", img: "/award5.png" },
  ],
  gallery: [
    "/g1.png",
    "/g2.png",
    "/g3.png",
    "/g4.png",
    "/g5.png",
    "/g6.png",
    "/g7.png",
    "/g8.png",
  ],
  footer: {
    address: "Hyderabad, India",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Refund Policy",
      "Help Center",
      "Careers",
      "Contact Us",
    ],
    social: [
      "facebook.png",
      "instagram.png",
      "twitter.png",
      "linkedin.png",
      "youtube.png",
    ],
  },
};


export async function GET() {
  return NextResponse.json(home);





}
