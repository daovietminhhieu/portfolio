import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Scene from "../../canvas/Scene";
import "./Hero.css";
import { useEffect } from "react";
import { heroAnimation } from "../../utils/animation";

const Hero = () => {


    return (

        <section className="hero" id="home">


            <div className="hero-container">


                <motion.div

                    className="hero-content"

                    initial={{
                        opacity: 0,
                        x: -100
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 1
                    }}

                >


                    <p className="hello">
                        Hello, I'm
                    </p>


                    <h1>

                        HIEU

                    </h1>


                    <h2>

                        Fullstack Developer

                    </h2>


                    <p className="description">

                        I build end-to-end web applications — from
                        polished, interactive frontends to scalable
                        backends and databases.

                    </p>
                    <div className="buttons">
                        <a className="primary-btn" href="#projects">
                            View Projects
                        </a>
                        <a className="secondary-btn" href="https://www.cake.me/dao-minh-hieu-9c85e5">
                            See my CV
                        </a>


                    </div>



                    <div className="social">


                        <a>
                            <FaGithub />
                        </a>


                        <a>
                            <FaLinkedin />
                        </a>


                    </div>


                </motion.div>

                <div className="hero-visual">


                    <div className="canvas-container">

                        <Scene />

                    </div>


                    <div className="floating-card">

                        Fullstack Dev

                    </div>


                </div>




            </div>


        </section>

    )


}


export default Hero;
