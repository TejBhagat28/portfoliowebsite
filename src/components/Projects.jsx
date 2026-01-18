import { motion } from "framer-motion";
import "../styles/projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div className="projects-grid">
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ y: -6 }}
        >
          <div className="card-header">
            <h3>Virtual Banking System</h3>
            <span className="arrow">↗</span>
          </div>

          <p className="card-desc">
            A secure and scalable Java-based virtual banking system enabling seamless transactions, account management and financial services.
          </p>

          <div className="card-footer">
            <div className="tech-tags">
              <span>Java</span>
              <span>MySQL</span>
            </div>
            <span className="view">View Project</span>
          </div>
        </motion.a>

       
        <motion.a
          href="https://serene-care1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ y: -6 }}
        >
        <div className="card-header">
            <h3>Healthcare Appointment App</h3>
            <span className="arrow">↗</span>
          </div>

          <p className="card-desc">
           Developed a full-stack healthcare appointment booking web app using the MERN
stack, enabling users to search doctors by specialty, view profiles, and book appointments online.
          </p>

          <div className="card-footer">
            <div className="tech-tags">
              <span>React</span>
              <span>Express</span>
               <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <span className="view">View Project</span>
          </div>
       </motion.a>


         <motion.a
          href="https://booking-28-03-2005.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ y: -6 }}
        >
        <div className="card-header">
            <h3>Event Registration Portal</h3>
            <span className="arrow">↗</span>
          </div>

          <p className="card-desc">
          Built a full-stack web application for online event registration using the MERN stack. The
system allows users to view upcoming events and register with their personal details.</p>
          <div className="card-footer">
            <div className="tech-tags">
             <span>React</span>
              <span>Express</span>
               <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <span className="view">View Project</span>
        </div>
       </motion.a>



       <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ y: -6 }}
        >
        <div className="card-header">
            <h3>Quiz App</h3>
            <span className="arrow">↗</span>
          </div>

          <p className="card-desc">
          A dynamic quiz app built with Java and JSON, offering interactive questions and real-time scoring.
          </p>

          <div className="card-footer">
            <div className="tech-tags">
              <span>Java</span>
              <span>MySQL</span>
            </div>
            <span className="view">View Project</span>
        </div>
      </motion.a>






      </div>
    </section>
  );
};

export default Projects;
