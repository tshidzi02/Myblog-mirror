// Import the CSS file that styles the navigation bar
import './Navbar.css';

// Define a new functional React component called "Navbar"
function Navbar({ setActiveSection }) {
  // We use the "setActiveSection" function passed from App.jsx
  // to switch between different sections when buttons are clicked

  return (
    <nav className="navbar">
      {' '}
      {/* This is the container for all buttons */}
      {/* Each button updates the active section */}
      <button onClick={() => setActiveSection('profile')}>Profile</button>
      <button onClick={() => setActiveSection('education')}>Education</button>
      <button onClick={() => setActiveSection('experience')}>Experience</button>
      <button onClick={() => setActiveSection('blog')}>Blog</button>
    </nav>
  );
}

// Export this component so it can be used in App.jsx
export default Navbar;
