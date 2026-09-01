import { useRef } from "react";

import {
    Points,
    PointMaterial
} from "@react-three/drei";


import { useFrame } from "@react-three/fiber";


import * as THREE from "three";



const Particles = ()=>{


const ref = useRef();



const particles = new Float32Array(
    1500 * 3
);



for(let i=0;i<1500*3;i++){

    particles[i]=(Math.random()-0.5)*20;

}



useFrame(()=>{


    ref.current.rotation.y +=0.0008;


    ref.current.rotation.x +=0.0003;


});



return (

<Points

ref={ref}

positions={particles}

stride={3}

>


<PointMaterial

transparent

color="#00e5ff"

size={0.03}

sizeAttenuation

depthWrite={false}

/>


</Points>

)


}


export default Particles;
