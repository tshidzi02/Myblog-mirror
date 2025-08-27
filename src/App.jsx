// Import React and useState hook to manage which section is visible
import { useState } from 'react';

// Import your components
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  // We define state to track which section is active ("profile" by default)
  const [activeSection, setActiveSection] = useState('profile');
  return (
    (
      <div>
        {/* Profile section with image and description */}
        <Profile />

        {/* Placeholder for future sections */}
        <div style={{ padding: '1rem' }}>
          <h1>Welcome to My Website</h1>
          <p>This is where my navigation bar, education, blog, and other sections will go.</p>
        </div>
      </div>
    ),
    (
      <div>
        {/* Show the Navbar and give it access to setActiveSection */}
        <Navbar setActiveSection={setActiveSection} />

        {/* Show the correct section based on which button was clicked */}
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'education' && <h2>Education Section (Coming Soon)</h2>}
        {activeSection === 'experience' && <h2>Experience Section (Coming Soon)</h2>}
        {activeSection === 'blog' && <h2>Blog Section (Coming Soon)</h2>}
      </div>
    )
  );
}

export default App;
