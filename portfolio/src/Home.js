import './home.css';
import profilePic from './wmremove-transformed.png';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Left Side */}
        <div className="left-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">KUNTELLA BHANU SURYA VEERA SANKAR</h1>
          
          <p className="description">
            Hi, I'm a Full-Stack Developer and Machine Learning enthusiast passionate about 
            building modern web applications and AI-powered solutions. I enjoy transforming 
            ideas into scalable, user-friendly products using technologies such as Java, 
            JavaScript, React.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        {/* Center Image */}
        <div className="image-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>

        {/* Right Text */}
        <div className="right-text">
         <h2 className="title">
  Full-Stack Developer & Machine Learning Engineer specialized in Deep Learning, Computer Vision, RAG, and Agentic AI
</h2>
        </div>


        {/* Resume Button */}
        <a href="/K_B_S_V_SHANAR_RESUME.pdf" download className="resume-btn">
  RESUME ↗
</a>
      </div>
    {/* Contact Section */}
<div className="contact-section">
  <h3>Let's Connect</h3>

  <div className="contact-grid">

    <a
      href="tel:+916304971288"
      className="contact-card"
    >
      <FaPhone className="contact-icon" />
      <div>
        <h4>Phone</h4>
        <p>+91 6304971288</p>
      </div>
    </a>

    <a
      href="mailto:kuntellashanker2005@gmail.com"
      className="contact-card"
    >
      <FaEnvelope className="contact-icon" />
      <div>
        <h4>Email</h4>
        <p>kuntellashanker2005@gmail.com</p>
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in/suryakuntella/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <FaLinkedin className="contact-icon" />
      <div>
        <h4>LinkedIn</h4>
        <p>suryakuntella</p>
      </div>
    </a>

    <a
      href="https://github.com/kuntella-surya"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <FaGithub className="contact-icon" />
      <div>
        <h4>GitHub</h4>
        <p>kuntella-surya</p>
      </div>
    </a>

    <a
      href="https://leetcode.com/u/surya0112/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <SiLeetcode className="contact-icon" />
      <div>
        <h4>LeetCode</h4>
        <p>Competitive Programming</p>
      </div>
    </a>

  </div>
</div>
    </section>
  );
}

export default Home;