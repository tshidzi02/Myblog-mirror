import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import BlogPost from "./pages/BlogPost";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

import Image1 from "./assets/images1.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.png";

const INITIAL_POSTS = [
  { id: "seed-1", title: "How I Built My First Website", date: "2025-08-01", tag: "Web Dev", tags: ["HTML","CSS","React"], image: Image1, content: "I used React and Tailwind to build my first fully responsive web app." },
  { id: "seed-2", title: "My Internship at Masiphumelele Library", date: "2025-07-01", tag: "Internship", tags: ["Community","Digital"], image: Image2, content: "I helped digitize the book catalog and created a new website." },
  { id: "seed-3", title: "Study Tips for CS Students", date: "2025-06-01", tag: "Study Tips", tags: ["Study","Productivity"], image: Image3, content: "Here are my top 5 methods for managing stress and boosting marks." },
];

export default function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    try { return saved ? JSON.parse(saved) : INITIAL_POSTS; } catch { return INITIAL_POSTS; }
  });
  useEffect(() => { localStorage.setItem("posts", JSON.stringify(posts)); }, [posts]);

  function handleAddPost(newPost) {
    const normalized = { ...newPost, tags: Array.isArray(newPost.tags) ? newPost.tags : (newPost.tag ? [newPost.tag] : []) };
    setPosts(prev => [normalized, ...prev]);
  }

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/blog" element={<BlogPost posts={posts} />} />
        <Route
          path="/blog/new"
          element={
            <ProtectedRoute>
              <CreatePost onAddPost={handleAddPost} />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
