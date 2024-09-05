import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css'; // CSS 파일을 동일하게 사용

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeToggleProps = useSpring({
    opacity: theme === 'dark' ? 1 : 0.5,
    config: { duration: 300 },
  });

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <header>
        <div className="header-bg"></div>
        <h1 className="greeting">Welcome to Lox_so's Portfolio</h1>
        <div className="scroll-down">
          <i className="fas fa-arrow-down"></i>
        </div>
      </header>

      <div className="container">
        <section className="content">
          <div className="section">
            <h2 className="section-title"><i className="fas fa-code"></i>Skills</h2>
            <div className="skills">
              <div className="skill"><i className="fab fa-html5"></i>HTML</div>
              <div className="skill"><i className="fab fa-css3-alt"></i>CSS</div>
              <div className="skill"><i className="fab fa-js-square"></i>JavaScript</div>
              <div className="skill"><i className="fab fa-python"></i>Python</div>
              <div className="skill"><i className="fab fa-react"></i>React</div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title"><i className="fas fa-project-diagram"></i>Projects</h2>
            <div className="projects">
              <div className="project">
                <i className="fas fa-laptop-code"></i>
                <h3>Project 1</h3>
                <p>Description of project 1.</p>
              </div>
              <div className="project">
                <i className="fas fa-laptop-code"></i>
                <h3>Project 2</h3>
                <p>Description of project 2.</p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title"><i className="fas fa-envelope"></i>Contact</h2>
            <form className="contact-form">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" rows="5" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 Lox_so. All Rights Reserved.</p>
        <p>Made with <i className="fas fa-heart"></i> and <i className="fas fa-code"></i> by Lox_so.</p>
      </footer>

      <animated.button className="theme-toggle" style={themeToggleProps} onClick={handleThemeToggle}>
        <i className={`fas fa-${theme === 'dark' ? 'moon' : 'sun'}`}></i>
      </animated.button>
    </div>
  );
};

export default App;
