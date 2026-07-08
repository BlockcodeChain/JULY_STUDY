import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
const App = () => {
  return (
   <div className="min-h-screen bg-[#0B1120]">
   <Navbar/>
   <Home/>
   <Project/>
   <About/>
   <Contact/>


   </div>
  )
}

export default App