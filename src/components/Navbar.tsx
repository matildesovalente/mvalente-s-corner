import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold text-primary tracking-tight">
          mv.
        </a>
        <ul className="flex items-center gap-8 text-sm font-sans font-medium">
          <li>
            <a href="#entradas" className="text-muted-foreground hover:text-foreground transition-colors">
              Entradas
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
