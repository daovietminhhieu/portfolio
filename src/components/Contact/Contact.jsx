import { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";


import emailjs from "@emailjs/browser";

import "./Contact.css";


const Contact = ()=>{


const form = useRef();


const [message,setMessage] = useState("");



const sendEmail = (e)=>{


e.preventDefault();



emailjs.sendForm(

"SERVICE_ID",

"TEMPLATE_ID",

form.current,

"PUBLIC_KEY"

)

.then(()=>{


setMessage(
"Message sent successfully!"
);


form.current.reset();


})

.catch(()=>{


setMessage(
"Something went wrong!"
);


});


}




return (

<section
id="contact"
className="contact"
>


<div className="container">


<div className="contact-title">


<p>
Contact
</p>


<h2>
Let's Work Together
</h2>


</div>




<div className="contact-wrapper">



<motion.div

className="contact-info"

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.7
}}

>


<h3>

Get In Touch

</h3>


<p>

Have a project idea?
Feel free to contact me.

</p>



<div className="social-links">


<a>
<FaGithub/>
</a>


<a>
<FaLinkedin/>
</a>


<a>
<FaEnvelope/>
</a>


</div>


</motion.div>





<motion.form


ref={form}


onSubmit={sendEmail}


className="contact-form"


initial={{
opacity:0,
x:80
}}


whileInView={{
opacity:1,
x:0
}}


transition={{
duration:.7
}}


>



<input

type="text"

name="user_name"

placeholder="Your Name"

required

/>




<input

type="email"

name="user_email"

placeholder="Your Email"

required

/>





<textarea

name="message"

placeholder="Your Message"

rows="6"

required

>




</textarea>




<button>

Send Message

</button>



<p className="status">

{message}

</p>


</motion.form>



</div>


</div>


</section>

)


}



export default Contact;
