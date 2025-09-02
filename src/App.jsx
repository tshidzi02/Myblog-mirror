import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogPost from "./pages/BlogPost";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

import Image1 from "./assets/images1.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.png";

const posts = [
  {
    title: "How I Built My First Website",
    date: "August 2025",
    tag: "Web Dev",
    image: Image1,
    content: "I used React and Tailwind to build my first fully responsive web app.",
    tags: ["HTML", "CSS", "React"]
  },
  {
    title: "My Internship at Masiphumelele Library",
    date: "July 2025",
    tag: "Internship",
    image: Image2,
    content: "I helped digitize the book catalog and created a new website.",
    tags: ["Community", "Digital"]
  },
  {
    title: "Study Tips for CS Students",
    date: "June 2025",
    tag: "Study Tips",
    image: Image3,
    content: "Here are my top 5 methods for managing stress and boosting marks.",
    tags: ["Study", "Productivity"]
  }
];

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog/:id" element={<BlogPost posts={posts} />} />
      </Routes>
    </>);
}
