import { motion } from "framer-motion";

const About = () => (
  <section id="sobre" className="py-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Sobre
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Olá, sou a Matilde. Este é o meu cantinho na internet onde partilho o que me vai na cabeça — desde reflexões sobre o dia-a-dia até histórias que precisam de ser contadas.
          </p>
          <p>
            Acredito que escrever é uma forma de pensar em voz alta, e este blog é exatamente isso: um espaço sem pressa, sem filtros, e com toda a honestidade que consigo reunir.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
