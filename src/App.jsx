import ScrollProgress 
from "./components/ScrollProgress/ScrollProgress";

import Footer 
from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Background from "./components/Background";
import Cursor from "./components/Cursor";



function App(){


return(

<>
  <Background />
  <ScrollProgress/>
  <Navbar/>
  <main>
  <Hero/>
  <About/>
  <Skills/>
  <Experience/>
  <Projects/>
  <Contact/>
  </main>
  <Footer/>
  <Cursor/>
</>


)


}

export default App;
