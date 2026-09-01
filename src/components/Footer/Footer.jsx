import {
    FaGithub,
    FaLinkedin,
    FaHeart
} from "react-icons/fa";


import "./Footer.css";


const Footer = ()=>{


return (

<footer className="footer">


<div className="footer-container">


<div className="footer-logo">

<span>&lt;</span>
Dev
<span>/&gt;</span>

</div>



<p>

© 2026 Viet Dao.
All rights reserved.

</p>



<div className="footer-social">


<a>
<FaGithub/>
</a>


<a>
<FaLinkedin/>
</a>


</div>



<p className="made">

Made with 
<FaHeart/>
 using React

</p>


</div>


</footer>

)

}


export default Footer;
