// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white shadow-md fixed top-0 z-50">
      <div className="text-2xl font-bold text-black">Mutshidzi Madzivhandila</div>
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        <li><Link to="/profile" className="hover:text-purple-600">Profile</Link></li>
        <li><Link to="/blog" className="hover:text-purple-600">Blog</Link></li>
        <li><Link to="/education" className="hover:text-purple-600">Education</Link></li>
        <li><Link to="/experience" className="hover:text-purple-600">Experience</Link></li>
      </ul>
    </nav>
  );
}
