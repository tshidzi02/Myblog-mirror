import React from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {}
      <aside className="md:w-1/4 bg-gray-100 p-4 sticky top-0 h-screen overflow-y-auto">
        <Profile />
      </aside>

      {}
      <main className="flex-1 p-6 space-y-12 bg-white text-gray-900">
        <Education />
        <Experience />
        <Blog />
      </main>
    </div>
  );
}

export default App;
