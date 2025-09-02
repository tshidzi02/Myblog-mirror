


import profileImg from "../assets/profile.jpg"; // adjust path if needed
import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Profile() {
  const { isLoggedIn } = useAuth()

    // Load/save profile from localStorage so it persists
  const [photo, setPhoto] = useState(() => localStorage.getItem("profile:photo") || "");
  const [summary, setSummary] = useState(() => localStorage.getItem("profile:summary") || "Hi! I’m Mutshidzi. I love web dev and plan to build tools for healthcare.");

  useEffect(() => { localStorage.setItem("profile:photo", photo); }, [photo]);
  useEffect(() => { localStorage.setItem("profile:summary", summary); }, [summary]);

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result); // base64
    reader.readAsDataURL(file);
  }

  return (
    <aside className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-3">👤 Profile</h2>

      {/* Photo (always visible) */}
      <div className="mb-3">
        {photo ? (
          <img src={photo} alt="Profile" className="w-40 h-40 object-cover rounded-full border" />
        ) : (
          <div className="w-40 h-40 rounded-full border grid place-items-center text-gray-500">No Photo</div>
        )}
      </div>

      {/* Summary (always visible) */}
      <p className="text-gray-800 whitespace-pre-wrap">{summary}</p>

      {/* Edit controls (login required) */}
      {!isLoggedIn ? (
        <p className="text-xs text-gray-500 mt-3">Add a new blog to Login to upload a photo and edit your summary.</p>
      ) : (
        <div className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Upload new profile photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Edit profile summary</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="4"
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      )}


    <section className="w-full min-h-screen bg-[#f7f7fb] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 relative bg-gradient-to-br from-grey-100 to-pink-100">
     {/* 🎨 Background Circles */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-40 z-0"></div>
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-700 to-purple-700 rounded-full opacity-30 z-0"></div>
      <div className="absolute top-[30%] right-[-80px] w-[180px] h-[180px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-40 z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[120px] h-[120px] bg-gradient-to-br from-purple-1000 to-pink-1000 rounded-full opacity-40 z-0"></div>


      {/* 👩 Profile Image (Left) */}
        <div className ="w-full md:w-1/2 z-10 flex justify-center">
        <img
  src={profileImg}
  alt="Profile"
 className="rounded-full w-100 h-100 object-cover border-4 border-white shadow-xl"
/>
      </div>

      {/* 👋 Hello Text + Sub-intro (Right) */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-7xl font-bold leading-tight relative inline-block">
          <span className="absolute -inset-1 transform -skew-x-12 bg-purple-300 opacity-50 rounded-md z-0"></span>
          <span className="relative z-10">Hello!</span>
        </h1>

        <p className="mt-6 text-xl text-gray-800 font-medium leading-relaxed">
          I'm <strong>Mutshidzi</strong>. Mathematics student and future Data Scientist.
          <br />
          Welcome to my personal blog and digital space.
        </p>

         {/* Interests */}
      <div className="text-sm text-gray-800 text-left mb-6">
        <p className="font-semibold mb-1">💡 Interests:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Data science and analytics</li>
          <li>Scientific modeling (especially disease spread)</li>
          <li>Web development (React, Tailwind, Next.js)</li>
          <li>Machine learning & AI for healthcare</li>
          <li>Mathematical problem solving</li>
          <li>Building interactive dashboards with real-time data</li>
        </ul>
      </div>

      {/* Future Plans */}
      <div className="text-sm text-gray-800 text-left">
        <p className="font-semibold mb-1">🎯 Future Plans:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Pursue a Master’s in Biomathematics or Data Science</li>
          <li>Publish research on mathematical models for disease prediction</li>
          <li>Work in public health tech, building tools for outbreak response</li>
          <li>Start a blog or YouTube channel for simplified math + code tutorials</li>
          <li>Mentor students interested in data + math careers</li>
        </ul>
      </div>
        </div>
    </section>
   </aside>
  );
}    

