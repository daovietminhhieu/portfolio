import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (

        <header className="navbar">

            <div className="nav-container">

                <div className="logo">
                    <span>&lt;</span>
                    Dev
                    <span>/&gt;</span>
                </div>


                <nav className={open ? "nav-links active" : "nav-links"}>

                    <a href="#home">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                </nav>


                <button 
                    className="menu-btn"
                    onClick={()=>setOpen(!open)}
                >

                    {
                        open 
                        ? <FiX/>
                        : <FiMenu/>
                    }

                </button>


            </div>

        </header>

    )

}


export default Navbar;
