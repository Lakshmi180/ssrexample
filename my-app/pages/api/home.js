export default function handler(req, res) {
  res.status(200).json({
    navbar: {
      logo: "/logo.png",
      links: ["Home", "Courses", "About", "Contact"],
    },
    banner: {
      title: "Excellence through Skills for Future-Ready Careers",
      subtitle: "For Future-Ready Careers with University Certification",
      image: "/banner-student.png",
      form: {
        fields: ["name", "email", "phone"],
        button: "Apply Now",
      },
    },
    courses: [
      { id: 1, title: "BBA", desc: "Business Administration", price: "₹50,000" },
      { id: 2, title: "Data Science & AI", desc: "Learn ML & AI", price: "₹75,000" },
    ],
    testimonials: [
      { name: "Rahul", text: "Great platform!", img: "/student1.png" },
      { name: "Sneha", text: "Loved the courses!", img: "/student2.png" },
    ],
    awards: [
      { id: 1, title: "Best EdTech Award 2024", img: "/award1.png" },
      { id: 2, title: "Innovation Award", img: "/award2.png" },
    ],
    gallery: ["/g1.png", "/g2.png", "/g3.png"],
    footer: {
      address: "Hyderabad, India",
      links: ["Privacy Policy", "Terms of Service"],
      social: ["facebook.png", "instagram.png"],
    },
  });
}
