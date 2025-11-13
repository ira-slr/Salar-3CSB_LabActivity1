// This was written by: Correllene Ira N. Salar / 3CS-B

import React from 'react';

function Home() {
  return (
    <div className="home">
      <p>This is the homepage where you can find information about me, my projects, and how to contact me.</p>
      <div className="home-sections">
        <section>
          <h2>ABOUT ME</h2>
          <p>Learn more about my background, skills, and experience.</p>
        </section>
        <section>
          <h2>PROJECTS</h2>
          <p>Check out some of the projects I've worked on.</p>
        </section>
        <section>
          <h2>CONTACT</h2>
          <p>Get in touch with me for any inquiries or collaborations.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;