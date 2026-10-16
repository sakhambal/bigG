import { useState, useRef, useEffect } from "react";
import { Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const nav_links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },    
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu (hamburger)


  const menuRef = useRef(null); // mobile menu panel


  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickedOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ){
        setMenuOpen(false)

      }
    }

    document.addEventListener("mousedown", handleClickedOutside)

    return() => {
      document.removeEventListener("mousedown", handleClickedOutside)
    }


  }, [])





  return (
    <div>
      <header className="flex fixed justify-center items-center w-full h-16 z-100 bg-2">
        <div className="flex justify-between items-center mx-4 w-full h-14 rounded-lg max-w-7xl ">
          <Link to="/" className="flex gap-2 items-center shrink-0">

            <span className="font-fraunces uppercase text-1 font-normal text-2xl">
              Joy Design Studio
            </span>
          </Link>
          <div className="hidden [@media(min-width:1000px)]:flex w-fit gap-2 items-center justify-between">
          <nav className="flex items-center gap-1">
            {nav_links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-8 font-inter py-1 rounded-md transition-colors text-1 hover:text-3"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to={"/contact"}
            className="hidden [@media(min-width:1000px)]:flex py-1 font-normal font-inter w-36 justify-center text-1 hover:text-2 items-center rounded-md  transition-colors"
          >
            Contact Us
          </Link>
          </div>
          <button
            className="[@media(min-width:1000px)]:hidden cursor-pointer transition delay-400"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={32} color="#351F11" />
            ) : (
              <Menu size={32} color="#351F11" />
            )}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          ref={menuRef}
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",  
              }}
            className="
      fixed z-100 [@media(min-width:1000px)]:hidden  h-screen
       top-10 w-screen overflow-hidden max-w-5xl px-4 bg-2"
          >
            <div className="w-screen h-screen items-center rounded-2xl flex flex-col
             p-4 text-primary justify-center gap-18">
            {nav_links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => {
                  setMenuOpen(false)
                }}
                className="text-1 w-full font-inter
                text-center hover:text-3 transition-colors"
              >
                {l.label}
              </Link>
            ))}

           

            <Link
              to={"/contact"}
              onClick={() => {
                setMenuOpen(false);
                
              }}
              className="flex justify-center items-center py-1 
              w-full rounded-md transition-colors font-inter
               text-1 hover:text-3"
            >
              Contact Us
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;