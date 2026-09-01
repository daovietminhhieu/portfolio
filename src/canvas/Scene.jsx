import {
    Canvas
} from "@react-three/fiber";


import {
    OrbitControls
} from "@react-three/drei";


import FloatingShape from "./FloatingShape";

import Lights from "./Lights";



const Scene = ()=>{


return (

<Canvas

camera={{
    position:[0,0,6],
    fov:45
}}

>


<Lights/>


<FloatingShape/>


<OrbitControls
enableZoom={false}
/>


</Canvas>

)


}


export default Scene;
