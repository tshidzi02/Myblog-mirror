// Import styling for this component
import './Profile.css';

// This component displays a profile image, your name, and a description
function Profile() {
  return (
    <div className="profile-container">
      {/* Profile image (use profile.jpg from the public folder) */}
      <img src="/profile.jpg" alt="Profile" className="profile-image" />

      {/* Text section with name and bio */}
      <div className="profile-text">
        <h2>Hello! I'm Mutshidzi 👋</h2>
        <p>
          I’m passionate about learning how computers and data work — especially web programming and
          mathematics.
        </p>
        <p>
          After graduation, I plan to pursue data science, software engineering, or research where I
          can solve real-world problems. 💻📊
        </p>
      </div>
    </div>
  );
}

// Export the component so it can be used in App.jsx
export default Profile;
// This imports the CSS styling rules from the file Profile.css
