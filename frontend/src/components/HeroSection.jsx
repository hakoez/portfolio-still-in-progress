import React from 'react';
import './HeroSection.css';
import profilePic from '../assets/profile.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="bio">
        <h1>Junior Softwareentwickler</h1>
          <p>Hallo!
            Ich bin Hakan.

            Schon immer war Technik meine Leidenschaft und mein Traum war es,
            in der IT-Welt Fuß zu fassen. Im Juli 2024 habe ich mein Studium der Management Informationssysteme an der Marmara Universität erfolgreich abgeschlossen.
            Ursprünglich begann ich mein Studium im Bereich International Business Management an der Dokuz Eylül Universität,
            doch nach zwei Jahren entschied ich mich bewusst für einen Neuanfang weil ich spürte, dass mein Herz für die Informatik schlägt.
            Im September 2024 bin ich schließlich in meine Geburtsheimat Deutschland zurückgekehrt,
            um hier meinen Lebensmittelpunkt aufzubauen und mir eine Zukunft als Softwareentwickler aufzubauen.
            Seit Oktober vertiefe ich mein Wissen in der C++ Programmierung und Web-Entwicklung, und arbeite an eigenen Projekten,
            die meine Leidenschaft und meinen Lernfortschritt widerspiegeln. 
            </p>
      </div>
      <div className="image">
        <img src={profilePic} alt="Hakan Özdemir" />
      </div>
    </section>
  );
}

export default HeroSection;
