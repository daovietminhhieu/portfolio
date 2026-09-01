import { useEffect, useState } from "react";

import "./ScrollProgress.css";


const ScrollProgress = ()=>{


const [scroll,setScroll]=useState(0);



useEffect(()=>{


const handleScroll=()=>{


const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


const progress =
(window.scrollY / height)*100;


setScroll(progress);


}



window.addEventListener(
"scroll",
handleScroll
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}



},[]);



return (

<div

className="progress"

style={{
width:`${scroll}%`
}}

>


</div>

)

}


export default ScrollProgress;
