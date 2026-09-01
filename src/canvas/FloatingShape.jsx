import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const FloatingShape = ()=>{


    const mesh = useRef();


    useFrame((state)=>{


        const t = state.clock.getElapsedTime();


        mesh.current.rotation.x =
        t * 0.3;


        mesh.current.rotation.y =
        t * 0.5;


        mesh.current.position.y =
        Math.sin(t)*0.3;


    });



    return (

        <mesh ref={mesh}>


            <icosahedronGeometry
                args={[1.5,1]}
            />


            <meshStandardMaterial

                color="#915eff"

                metalness={0.8}

                roughness={0.2}

            />


        </mesh>

    )

}


export default FloatingShape;
