import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.png";
import project5 from "./images/project5.png";
import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa";

import "./Project.css";


const projects = [

    {
        title: "Nomad - Tattoo Booking System",
        image: project2,
        desc:
            "A tattoo appointment booking website and landing page.",
        tech: [
            "Html",
            "Tailwind Css"
        ],
        github: "https://github.com/hieuhp132/tatto/tree/main",
        demo: "https://tatto-a9vw.onrender.com/#community"
    },{
        title: "Multiple template designs projects",
        image: project5,
        desc:
            ".",
        tech: [
        ],
        demo: "http://103.75.184.235:5175/"
    },
    {
        title: "Ant-Tech Asia - Headhunting System",
        image: project1,
        desc:
            "A CRM system designed for freelance recruiters and headhunters.",
        tech: [
            "React",
            "Html", "Css",
            "Node.js",
            "MongoDB",
            "ThreeJS"
        ],
        github: "",
        demo: "https://headhunter.ant-tech.asia/"
    },

    {
        title: "Vision Test Web App",
        image: project3,
        desc: "A web application for visual acuity testing, pulling data from a 2D game engine.",
        tech: [
            "Html",
            "Tailwind Css",
            "React", "Java", "Spring Boot", "Maven", "Mysql"
        ],
        github: ["https://github.com/truongnguyendac002/Lazyeyes-frontend-dev", "https://github.com/truongnguyendac002/Lazyeyes-backend-dev"],
        demo: "https://green-forest-0cdd31b00.7.azurestaticapps.net/"
    },

    {
        title: "Gold Trading & Analytics System",
        image: project4, // Replace with actual image if available
        desc: "A comprehensive system for gold trading and analytics. Provides workers that help users manage their accounts risk while trading.",
        tech: [
            "React",
            "Node.js",
            "PostgreSql",
            "Docker", "Prisma", "Typescript"
        ],
        github: "https://github.com/hieuhp132/trading-system",
        demo: "http://103.75.184.235:5173/"
    },

];


const Projects = () => {
    return (
        <section
            id="projects"
            className="projects"
        >
            <div className="container">
                <div className="projects-title">
                    <p>
                        My Work
                    </p>

                    <h2>
                        Featured Projects
                    </h2>
                </div>
                <div className="projects-grid">
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={project.title}

                                initial={{
                                    opacity: 0,
                                    y: 60
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: .6,
                                    delay: index * .1
                                }}
                            >
                                <Tilt
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    scale={1.05}
                                    glareEnable={true}
                                    glareMaxOpacity={0.2}
                                    className="tilt-card"
                                >
                                    <div className="project-card">
                                        <div className="project-image">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                            />
                                        </div>
                                        <div className="project-content">
                                            <h3>
                                                {project.title}
                                            </h3>
                                            <p>
                                                {project.desc}
                                            </p>
                                            <div className="tags">
                                                {
                                                    project.tech.map(item => (

                                                        <span key={item}>
                                                            {item}
                                                        </span>

                                                    ))
                                                }


                                            </div>



                                            <div className="project-links">


                                                {Array.isArray(project.github) ? (
                                                    <>
                                                        <a href={project.github[0]} target="_blank" rel="noreferrer">
                                                            <FaGithub />
                                                            Frontend
                                                        </a>
                                                        <a href={project.github[1]} target="_blank" rel="noreferrer">
                                                            <FaGithub />
                                                            Backend
                                                        </a>
                                                    </>
                                                ) : (
                                                    <a href={project.github} target="_blank" rel="noreferrer">
                                                        <FaGithub />
                                                        Github
                                                    </a>
                                                )}


                                                <a href={project.demo} target="_blank" rel="noreferrer">

                                                    <FaExternalLinkAlt />

                                                    Demo

                                                </a>


                                            </div>



                                        </div>


                                    </div>


                                </Tilt>


                            </motion.div>


                        ))


                    }



                </div>


            </div>


        </section>

    )


}



export default Projects;
