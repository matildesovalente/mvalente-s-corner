import { motion } from "framer-motion";
import heroImage from "@/assets/hero-blog.jpg";

const Hero = () => (
  <section className="relative min-h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Caderno aberto com caneta sobre mesa de madeira"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4"
      >
        Blog pessoal
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4"
      >
        Matilde Valente
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
      >
        Pensamentos, reflexões e histórias — um espaço para escrever sem pressa.
      </motion.p>
    </div>
  </section>
);

export default Hero;
