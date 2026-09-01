import {
Canvas
} from "@react-three/fiber";


import Particles 
from "../canvas/Particles";


import "./Background.css";



const Background = ()=>{


return (

<div className="background">


<Canvas

camera={{
position:[0,0,5]
}}

>


<Particles/>


</Canvas>


</div>

)

}



export default Background;
