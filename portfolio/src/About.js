import './about.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <h1 className="section-title">About Me</h1>

        <div className="about-content">
          <p className="about-intro">
            Hi, I'm a passionate Full-Stack Developer and Machine Learning enthusiast. 
            I love turning complex problems into elegant, scalable solutions. 
            Currently pursuing B.Tech in Data Science, I'm focused on building impactful 
            products using modern web technologies and AI.
          </p>

         {/* Skills Section */}
<div className="skills-section">
  <h2>Technical Skills</h2>

  <div className="skills-grid">

    <div className="skill-category">
      <h3>Languages</h3>
      <div className="skill-tags">
        <span>Java</span>
        <span>Python</span>
        <span>JavaScript</span>
        <span>C</span>
        <span>C++</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Frontend Development</h3>
      <div className="skill-tags">
        <span>React.js</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Tailwind CSS</span>
        <span>Bootstrap</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Backend Development</h3>
      <div className="skill-tags">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>Flask</span>
        <span>REST APIs</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Databases</h3>
      <div className="skill-tags">
        <span>MongoDB</span>
        <span>MySQL</span>
        <span>ChromaDB</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Machine Learning</h3>
      <div className="skill-tags">
        <span>TensorFlow</span>
        <span>Keras</span>
        <span>Scikit-Learn</span>
        <span>OpenCV</span>
        <span>YOLOv8</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Generative AI & LLMs</h3>
      <div className="skill-tags">
        <span>LangChain</span>
        <span>Ollama</span>
        <span>RAG Pipelines</span>
        <span>Vector Databases</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Tools & DevOps</h3>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Docker</span>
      </div>
    </div>

  </div>
</div>
          {/* Projects Section */}
          <div className="projects-section">
            <h2>Featured Projects</h2>
            
            <div className="project-card">
              <h3>FreeWork - Freelance Marketplace</h3>
              <p className="tech-stack">React.js • Node.js • MongoDB • Socket.io • Flask • Docker • Jenkins</p>
              <ul>
                <li>Built a full-stack freelance platform with real-time messaging and bidding system</li>
                <li>Implemented AI job recommendation and sentiment analysis</li>
                <li>Deployed using Docker and CI/CD with Jenkins</li>
              </ul>
              <a href="https://github.com/kuntella-surya/FreeWork" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>

            <div className="project-card">
              <h3>Smart Car Paint &amp; 3D Visualizer</h3>
              <p className="tech-stack">YOLOv8 • TripoSR • OpenCV • React.js • Node.js • MongoDB</p>
              <ul>
                <li>Trained YOLOv8 model achieving 92% mAP for car part detection</li>
                <li>Virtual repainting with realistic color transfer + 3D model generation</li>
                <li>Interactive 360° car visualization</li>
              </ul>
              <a href="https://github.com/kuntella-surya/carpaint" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>

            <div className="project-card">
              <h3>Agrimitra - AI Smart Farming Assistant</h3>
              <p className="tech-stack">React.js • Flask • TensorFlow • LangChain • Ollama • ChromaDB</p>
              <ul>
                <li>Multi-agent RAG system for crop recommendation, disease detection &amp; market insights</li>
                <li>Integrated weather, soil, and price forecasting APIs</li>
                <li>Built with LangGraph for intelligent decision support</li>
              </ul>
              <a href="https://github.com/kuntella-surya/Agrimitra" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="info-grid">
            <div className="info-card">
              <h3>Education</h3>
              <p><strong>Aditya University, Surampalem</strong></p>
              <p>B.Tech in Data Science (2024 – 2027)</p>
              <p><strong>Andhra polytechnic, kakinada</strong></p>
              <p>B.Tech in Data Science (2021 – 2024)</p>
            </div>

            <div className="info-card">
              <h3>Achievements</h3>
              <ul>
                <li>600+ DSA problems solved across LeetCode, GFG &amp; CodeChef</li>
                <li>1st Place in Coding Carnival DSA Competition (300+ participants)</li>
                <li>Coordinated Intelli Quiz technical event (500+ registrations)</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Certifications</h3>
              <ul>
                <li>HackerRank – SQL, Java</li>
                <li>LinkedIn Learning – C++ Foundations, React, Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;