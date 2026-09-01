import { motion } from "framer-motion";
import "./Experience.css";


const experiences = [

    {
        year: "2025",
        role: "Fullstack Developer",
        company: "Ant-Tech Asia",
        desc:
            "Responsible for implementing, updating, and improving new features in an existing system. Developed features for posting new jobs, sending notifications, and sharing updates after users submit job applications. These features help users easily find new job opportunities and keep track of their current application status."
    },
    {
        year: "2026",
        role: "Fullstack Developer",
        company: "VisionFit",
        desc: "Responsible for implementing, updating, and improving new features in an existing system. Focused on developing and running 2D games on the platform to help clinics assess patients' vision."
    },
    {
        year: "2024",
        role: "Backend Developer",
        company: "Leibniz University",
        desc:
            "Developing client-server communication mechanisms for data exchange and real-time player status synchronization in a Blackjack game."
    }


];



const Experience = () => {


    return (

        <section
            id="experience"
            className="experience"
        >


            <div className="container">


                <div className="experience-title">

                    <p>
                        Experience
                    </p>

                    <h2>
                        My Journey
                    </h2>

                </div>



                <div className="timeline">


                    <div className="line"></div>


                    {
                        experiences.map((item, index) => (


                            <motion.div

                                className="timeline-item"

                                key={item.year}


                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -80 : 80
                                }}


                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}


                                transition={{
                                    duration: .7
                                }}


                            >


                                <div className="timeline-dot"></div>


                                <div className="timeline-card">


                                    <span>

                                        {item.year}

                                    </span>


                                    <h3>

                                        {item.role}

                                    </h3>


                                    <h4>

                                        {item.company}

                                    </h4>


                                    <p>

                                        {item.desc}

                                    </p>


                                </div>


                            </motion.div>


                        ))


                    }



                </div>


            </div>


        </section>

    )


}



export default Experience;
