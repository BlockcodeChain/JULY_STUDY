import {Link} from "react-scroll"
const Navbar = () => {
  const navlink=[
   { name: "HOME", to: "home" },
   { name: "PROJECT", to: "project" },
   { name: "ABOUT", to: "about" },
   { name: "CONTACT", to: "contact" },

  
  ]
  return (

  <nav className="fixed top-10 border  border-white shadow-sm flex items-center justify-between left-1/2 -translate-x-1/2 bg-white/20 shadow-black/10 h-16 backdrop-blur-lg z-50 px-4 sm:px-6 lg:px-8 max-w-7xl  rounded-2xl text-white w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">


 {/* logo */}
  
    <span className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent animate-pulse">
  ISHI
</span>
       <ul className="flex items-center justify-between gap-3 md:gap-6 lg:gap-8">
        {navlink.map((item)=>(
           <Link smooth={true} activeClass="text-cyan-500" duration={500}  key={item.name}    spy={true}  to={item.to} >
            <li className="cursor-pointer relative after:absolute after:-bottom-1 after:w-0 after:left-0 hover:after:w-full after:h-0.5 font-medium after:bg-cyan-400
            after:transition-all after:content-['']
             after:duration-300">
             {item.name} 
            </li>
           
           
           </Link>
        ))}
       </ul>
  </nav>
  )
}

export default Navbar