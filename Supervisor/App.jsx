import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react"
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';

import BlogPost from './pages/BlogPost'; // if you have blog detail view
import CreatePost from "./pages/CreatePost";

import AddBlogPost from "./pages/AddBlogPost";

function App() {

  const initialPosts = [
  {
    title: "How I Built My First Website",
    date: "August 2025",
    tag: "Web Dev",
    image: "/src/assets/image1.png",
    content: "I used React and Tailwind to build my first fully responsive web app."
  },
  {
    title: "My Internship at Masiphumelele Library",
    date: "July 2025",
    tag: "Internship",
    image: "/src/assets/image2.jpg",
    content: "During my internship, I helped digitize the book catalog and created a new website."
  },
  {
    title: "Study Tips for CS Students",
    date: "June 2025",
    tag: "Study Tips",
    image: "/src/assets/image3.png",
    content: "Here are my top 5 methods for managing stress and boosting marks as a computer science student."
  }
];

const [posts, setPosts] = useState(initialPosts);


  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/new" element={<CreatePost onAddPost={(post) => {
  // 🧠 Save to localStorage or Context later
  console.log("New post submitted:", post);
        <Route path="/blog/new" element={<AddBlogPost addPost={addPost} />} />
}} />} />

      </Routes>
    </>
  );
}

export default App;
