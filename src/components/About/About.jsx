import { motion } from "framer-motion";
import "./About.css";


const About = () => {


    return (

        <section
            id="about"
            className="about"
        >


            <div className="about-container">


                <motion.div

                    className="about-image"

                    initial={{
                        opacity: 0,
                        x: -100
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >


                    <div className="avatar-box">

                        <div className="avatar">

                            VD

                        </div>

                    </div>


                </motion.div>



                <motion.div

                    className="about-content"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >


                    <p className="section-title">

                        About Me

                    </p>


                    <h2>

                        From Frontend to Backend

                    </h2>


                    <p>

                        I am a fullstack developer passionate about building
                        complete, production-ready web applications.

                        I work across the entire stack — React &amp; Three.js
                        on the frontend, Node.js &amp; Spring Boot on the backend,
                        and MongoDB &amp; MySQL for data storage.

                    </p>


                    <div className="about-info">


                        <div>

                            <h3>2+</h3>

                            <span>
                                Years Experience
                            </span>

                        </div>



                        <div>

                            <h3>3</h3>

                            <span>
                                main Projects
                            </span>

                        </div>



                        <div>

                            <h3>10+</h3>

                            <span>
                                Technologies
                            </span>

                        </div>


                    </div>


                </motion.div>


            </div>


        </section>

    )


}


export default About;
