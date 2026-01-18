import { motion } from "framer-motion";
import "../styles/about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <p className="about-text">
        My journey in software development started with curiosity, I have honed my skills in the following :
      </p>

      <div className="about-grid">
        <motion.div className="about-card" whileHover={{ scale: 1.03 }}>
          <h3>Frontend</h3>
          <div className="btn-group">
            <button>React</button>
            <button>JavaScript</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>SCSS</button>
          </div>
        </motion.div>

        
        <motion.div className="about-card" whileHover={{ scale: 1.03 }}>
          <h3>Backend</h3>
          <div className="btn-group">
            <button>Node.js</button>
            <button>Express</button>
            <button>MongoDB</button>
            <button>MySQL</button>
          </div>
        </motion.div>

      
        <motion.div className="about-card" whileHover={{ scale: 1.03 }}>
          <h3>Languages</h3>
          <div className="btn-group">
            <button>Java</button>
            <button>Python</button>
            <button>C</button>
            <button>JavaScript</button>
          </div>
        </motion.div>

    
        <motion.div className="about-card" whileHover={{ scale: 1.03 }}>
          <h3>Tools</h3>
          <div className="btn-group">
            <button>PyCharm</button>
            <button>GitHub</button>
            <button>VS Code</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
