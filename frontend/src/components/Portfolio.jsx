import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/paint.png';
import project3 from '../assets/project4.png';
import project4 from '../assets/Calendar.png';
import project5 from '../assets/editor.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.png';
import project11 from '../assets/project11.png';
import './Portfolio.css';

function Portfolio() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (id) => {
    if (openProject === id) {
      setOpenProject(null);
    } else {
      setOpenProject(id);
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>Meine Projekte</h2>
      <div className="project-boxes">

        {/* Project 1 */}
        <div className={`project-box ${openProject === 1 ? 'open' : ''}`} onClick={() => toggleProject(1)}>
          {openProject === 1 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project1} alt="Project 1" />
          <p className="project-title">delosgb.com</p>
          {openProject === 1 && (
            <div className="project-details">
              <p>Eine Website, die die An- und Verkaufspreise von Spielwährungen für mehr als 10 verschiedene Anbieter in drei verschiedenen Spielen miteinander vergleicht. 
                Der Server verwendet die HttpLib Bibliothek für Netzwerkkommunikation und CMake für den Build-Prozess. 
                Zusätzlich sind CSV-Datenintegration, Besucherzähler und ein Python-Scraper zur Datenaktualisierung implementiert. 
                Alle Daten werden als JSON-Endpunkte bereitgestellt und HTTPS mit Let’s Encrypt Zertifikaten abgesichert.</p>
              
              <a href="https://delosgb.com" target="_blank" className="project-detail">delosgb.com</a><br></br>
              <a href="https://github.com/hakoez/webserver-delosgb.com" target="_blank">GitHub/Repository</a>
            </div>
            
          )}
        </div>

        {/* Project 2 */}
        <div className={`project-box ${openProject === 2 ? 'open' : ''}`} onClick={() => toggleProject(2)}>
          {openProject === 2 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project2} alt="Project 2" />
          <p className="project-title">ImGui Paint</p>
          {openProject === 2 && (
            <div className="project-details">
              <p>Ein einfaches Malprogramm, entwickelt mit C++ und ImGui. 
                Es ermöglicht dem Benutzer, frei auf einer Leinwand zu zeichnen,
                 verschiedene Farben auszuwählen und grundlegende Zeichenfunktionen zu nutzen.</p>
              <a href="https://github.com/hakoez/paint" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 3 */}
        <div className={`project-box ${openProject === 3 ? 'open' : ''}`} onClick={() => toggleProject(3)}>
          {openProject === 3 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project3} alt="portfolio website" />
          <p className="project-title">Meine Portfolio-Seite</p>
          {openProject === 3 && (
            <div className="project-details">
              <p>Das Projekt besteht aus einem React-Frontend (Vite-basiert) und einem Node.js-Express-Backend.
                 Das Frontend zeigt Portfolio-Projekte übersichtlich an, 
                 das Backend dient zur Bereitstellung der statischen Dateien und ist für eine einfache Migration auf Linux-Server vorbereitet.</p>
              <a href="https://github.com/hakoez/portfolio" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 4 */}
        <div className={`project-box ${openProject === 4 ? 'open' : ''}`} onClick={() => toggleProject(4)}>
          {openProject === 4 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project4} alt="Project 4" />
          <p className="project-title">Kalender </p>
          {openProject === 4 && (
            <div className="project-details">
              <p>Ein Kalender-Tool, entwickelt in C++ mit ImGui. 
                Es zeigt Monate und Tage an und ermöglicht zusätzlich das Speichern von Meetings zu bestimmten Daten. Der Build-Prozess erfolgt über CMake.</p>
              <a href="https://github.com/hakoez/calendar" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 5 */}
        <div className={`project-box ${openProject === 5 ? 'open' : ''}`} onClick={() => toggleProject(5)}>
          {openProject === 5 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project5} alt="Project 5" />
          <p className="project-title">Editor</p>
          {openProject === 5 && (
            <div className="project-details">
              <p>Ein einfacher Texteditor, entwickelt in C++ unter Verwendung von ImGui.
                Der Editor bietet grundlegende Funktionen zum Schreiben.Der Build-Prozess erfolgt mit CMake, und das Projekt nutzt zusätzlich vcpkg für die Paketverwaltung.</p>
              <a href="https://github.com/hakoez/editor" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 6 */}
        <div className={`project-box ${openProject === 6 ? 'open' : ''}`} onClick={() => toggleProject(6)}>
          {openProject === 6 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project6} alt="Project 6" />
          <p className="project-title">coming QT projekt</p>
          {openProject === 6 && (
            <div className="project-details">
              <p>Project 6 Details...</p>
              <a href="https://github.com/your-repo6" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 7 */}
        <div className={`project-box ${openProject === 7 ? 'open' : ''}`} onClick={() => toggleProject(7)}>
          {openProject === 7 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project7} alt="Project 7" />
          <p className="project-title">coming QT projekt</p>
          {openProject === 7 && (
            <div className="project-details">
              <p>Project 7 Details...</p>
              <a href="https://github.com/your-repo7" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 8 */}
        <div className={`project-box ${openProject === 8 ? 'open' : ''}`} onClick={() => toggleProject(8)}>
          {openProject === 8 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project8} alt="Project 8" />
          <p className="project-title">coming QT projekt</p>
          {openProject === 8 && (
            <div className="project-details">
              <p>Project 8 Details...</p>
              <a href="https://github.com/your-repo8" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 9 */}
        <div className={`project-box ${openProject === 9 ? 'open' : ''}`} onClick={() => toggleProject(9)}>
          {openProject === 9 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project9} alt="Project 9" />
          <p className="project-title">coming QT projekt</p>
          {openProject === 9 && (
            <div className="project-details">
              <p>Project 9 Details...</p>
              <a href="https://github.com/your-repo9" target="_blank">GitHub</a>
            </div>
          )}
        </div>

        {/* Project 10 */}
        <div className={`project-box ${openProject === 10 ? 'open' : ''}`} onClick={() => toggleProject(10)}>
          {openProject === 10 && (
            <span className="close-btn" onClick={(e) => { e.stopPropagation(); setOpenProject(null); }}>-</span>
          )}
          <img src={project10} alt="Project 10" />
          <p className="project-title">coming QT projekt</p>
          {openProject === 10 && (
            <div className="project-details">
              <p>Project 10 Details...</p>
              <a href="https://github.com/your-repo10" target="_blank">GitHub</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
