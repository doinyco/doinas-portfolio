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
    document.body.classList.add('dimmed');
  };

  const closeExperience = () => {
    setExperienceVisible(false);
    document.body.classList.remove('dimmed');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-content min-h-screen flex flex-col">
      <nav className="max-w-1xl mx-auto flex justify-center space-x-3 py-2 border-b-2 border-gray-300 rounded-3xl" style={{ width: '36.5%' }}>
        <div className="space-x-8">
          <button
            className={`text-sm font-semibold ${activeSection === 'about' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#77b5fe]`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={`text-sm font-semibold ${activeSection === 'contact' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#77b5fe]`}
            onClick={() => handleNavClick('contact')}
          >
            Contact Me
          </button>
          <button
            className={`text-sm font-semibold ${activeSection === 'projects' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#77b5fe]`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button
            className={`text-sm font-semibold ${activeSection === 'experience' ? 'text-[#80daeb]' : 'text-[#778899]'} hover:text-[#77b5fe]`}
            onClick={handleExperienceClick}
          >
            Experience
          </button>
        </div>
      </nav>
      <section id="toggle" className="absolute top-2 right-24 mt-2.5">
        <button
          className="w-12 h-11 text-xl border border-light-gray rounded-full shadow-md flex items-center justify-center"
          onClick={() => setDarkMode(prevMode => !prevMode)}
          style={{ fontSize: '1.6rem', color: darkMode ? 'inherit' : '#888' }}
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
          <h1 style={{ fontSize: '2.6rem' }} className="font-bold">Software Engineer</h1>
          <h2 style={{ fontSize: '1.0rem', maxWidth: '800px' }}>
            I am Doina, a software engineer based in the Seattle area, specializing in full-stack development and thriving on transforming ideas into functional, well-designed applications. 
            <span style={{ marginLeft: '5px' }}>
              Let's connect! <i className="fas fa-link"></i>
            </span>
          </h2>
          <div id="contact" className="mt-6 w-full">
            <ContactMe />
          </div>
        </div>
      </section>
      {isExperienceVisible && <Experience onClose={closeExperience} />}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;