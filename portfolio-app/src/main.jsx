import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('no-transition');

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    document.documentElement.offsetHeight;

    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 300);
  }, [darkMode]);

  return (
    <StrictMode>
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);