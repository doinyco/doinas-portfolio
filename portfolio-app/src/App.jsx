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
    <div className="app-content min-h-screen flex flex-col">
      <nav className="w-2/4 max-w-2xl mx-auto flex justify-center space-x-4 py-2 border-b-2 border-gray-300 rounded-3xl">
        <div className="space-x-8">
          <button
            className={`text-lg font-semibold ${activeSection === 'about' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#808080]`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'contact' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#696969]`}
            onClick={() => handleNavClick('contact')}
          >
            Contact Me
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'projects' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#696969]`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button
            className={`text-lg font-semibold ${activeSection === 'experience' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#696969]`}
            onClick={handleExperienceClick}
          >
            Experience
          </button>
        </div>
      </nav>
      <section id="toggle" className="absolute top-2 right-24 mt-2.5">
        <button
          className="text-4xl border border-light-gray p-2 rounded-md shadow-md"
          onClick={() => setDarkMode(prevMode => !prevMode)}
        >
          {darkMode ? '☽' : '☼'}
        </button>
      </section>
      <section id="about" className="flex flex-col items-center my-12">
        <div className="flex flex-col items-start">
          <img 
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <h1 className="text-4xl font-bold">Software Engineer</h1>
          <h2 style={{ fontSize: '1.2rem', color: '#696969' }}>I am Doina, a software engineer based in Seattle area.</h2>
          <div id="contact" className="mt-6 w-full">
            <ContactMe />
          </div>
        </div>
      </section>
      {isExperienceVisible && <Experience onClose={() => setExperienceVisible(false)} />}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;

