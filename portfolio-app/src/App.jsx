import React, { useState } from 'react';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import profileImage from './assets/me21.jpg';

function App({ darkMode, setDarkMode }) {
  const [isExperienceVisible, setExperienceVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleExperienceClick = () => {
    setExperienceVisible(true);
    setActiveSection('experience');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <nav className="w-2/4 flex justify-center w-full max-w-4xl space-x-4 py-4 border-b border-gray-300 mx-auto">
        <div className="space-x-8">
          <button
            className={`text-lg font-semibold ${activeSection === 'about' ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'contact' ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`}
            onClick={() => handleNavClick('contact')}
          >
            Contact Me
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'projects' ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'experience' ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`}
            onClick={handleExperienceClick}
          >
            Experience
          </button>
        </div>
      </nav>
      <section id="toggle" className="absolute top-2 right-12">
        <button
          className="text-4xl border border-light-gray p-2 rounded-md shadow-md"
          onClick={() => setDarkMode(prevMode => !prevMode)}
        >
          {darkMode ? '☽' : '☼'}
        </button>
      </section>
      <section id="about" className="flex justify-start items-start my-3 ml-8">
        <div className="flex flex-col items-start app-content">
          <img 
            src={profileImage}
            alt="doina" 
            className="w-24 h-24 rounded-full shadow-lg" 
          />
          <h1 className="text-4xl font-bold">Software Engineer</h1>
          <h2 className="text-2xl">I am Doina, a software engineer based in Seattle area.</h2>
          <div className="mt-6">
            <ContactMe />
          </div>
        </div>
      </section>
      {isExperienceVisible && <Experience onClose={() => setExperienceVisible(false)} />}
    </div>
  );
}

export default App;