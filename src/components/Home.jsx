import { motion } from "framer-motion";
import profilePic from "../assets/img.jpeg";
import "../styles/home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={profilePic}
          alt="Tej Bhagat"
          className="profile-img"
        />

        <h1>
          Hi, I'm <span>Tej Bhagat</span>
        </h1>

        <p>
          An Aspiring Software Engineer passionate about building innovative solutions and scalable, user-focused applications using modern web
           technologies.
        </p>

        <motion.a
          href="#contact"
          className="cta"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
