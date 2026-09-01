const Lights = () => {

    return (
        <>
            <ambientLight intensity={1}/>

            <directionalLight
                position={[5,5,5]}
                intensity={2}
            />

            <pointLight
                position={[-5,-5,-5]}
                color="#00e5ff"
                intensity={2}
            />
        </>
    )
}

export default Lights;
