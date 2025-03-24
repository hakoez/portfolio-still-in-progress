import React from 'react';
import htmlLogo from '../assets/html.png';  
import reactLogo from '../assets/react.png';
import cmakeLogo from '../assets/cmake.png'; 
import cplusLogo from '../assets/cpp.png';
import vscodeLogo from '../assets/vscode.png';
import cssLogo from '../assets/css.png'; 
import qtLogo from '../assets/qt.webp'; 
import javascriptLogo from '../assets/javascript.png'; 
import postgreLogo from '../assets/postgre.png';
import ubuntuLogo from '../assets/ubuntu.png'; 
import pythonLogo from '../assets/python.png'; 
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Fähigkeiten, Tools und Technologien, die ich beherrsche</h2>
      <div className="skills-logos">
        <img src={cplusLogo} alt="C++" /> 
        <img src={cmakeLogo} alt="CMake" />
        <img src={qtLogo} alt="QT" />
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={javascriptLogo} alt="JS" />
        <img src={reactLogo} alt="React" />
        <img src={vscodeLogo} alt="VSCode" />
        <img src={pythonLogo} alt="Python" />
        <img src={postgreLogo} alt="SQL" />
        <img src={ubuntuLogo} alt="Linux" />
      </div>
    </section>
  );
}

export default Skills;
