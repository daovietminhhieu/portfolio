import { motion } from "framer-motion";

import {
    FaReact,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaNodeJs,
    FaGitAlt,
    FaJava,
    FaDocker
} from "react-icons/fa";


import {
    SiThreedotjs,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
    SiSpringboot,
    SiMysql
} from "react-icons/si";


import "./Skills.css";



const skills = [

{
    name:"React",
    icon:<FaReact/>
},

{
    name:"JavaScript",
    icon:<FaJs/>
},

{
    name:"HTML5",
    icon:<FaHtml5/>
},

{
    name:"CSS3",
    icon:<FaCss3Alt/>
},

{
    name:"Three.js",
    icon:<SiThreedotjs/>
},

{
    name:"Next.js",
    icon:<SiNextdotjs/>
},

{
    name:"Node.js",
    icon:<FaNodeJs/>
},

{
    name:"MongoDB",
    icon:<SiMongodb/>
},

{
    name:"Git",
    icon:<FaGitAlt/>
},

{
    name:"Tailwind",
    icon:<SiTailwindcss/>
},

{
    name:"Java",
    icon:<FaJava/>
},

{
    name:"Spring Boot",
    icon:<SiSpringboot/>
},

{
    name:"MySQL",
    icon:<SiMysql/>
},

{
    name:"Docker",
    icon:<FaDocker/>
}

];



const Skills = ()=>{


return (

<section 
id="skills"
className="skills"
>


<div className="container">


<div className="skills-title">


<p>
My Skills
</p>


<h2>
Full Stack Technologies
</h2>


</div>




<div className="skills-grid">


{
skills.map((skill,index)=>(


<motion.div

key={skill.name}

className="skill-card"


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.5,
delay:index*0.05
}}



whileHover={{
scale:1.08,
rotateY:10
}}


>


<div className="skill-icon">

{skill.icon}

</div>


<h3>

{skill.name}

</h3>


</motion.div>


))

}



</div>


</div>


</section>

)


}



export default Skills;
