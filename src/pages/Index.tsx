import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EntryCard from "@/components/EntryCard";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sampleEntries = [
  {
    title: "A primeira entrada",
    excerpt: "Toda a viagem começa com um primeiro passo — e toda a escrita começa com uma primeira frase. Esta é a minha.",
    date: "10 Fev 2026",
    tag: "Reflexão",
  },
  {
    title: "Sobre começar tarde",
    excerpt: "Dizem que nunca é tarde para começar. Eu discordo — às vezes é exactamente tarde, e é isso que torna tudo mais bonito.",
    date: "8 Fev 2026",
    tag: "Pessoal",
  },
  {
    title: "Cadernos e canetas",
    excerpt: "Há qualquer coisa na textura do papel que o ecrã nunca vai substituir. Mas talvez um blog seja o compromisso perfeito.",
    date: "5 Fev 2026",
    tag: "Escrita",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section id="entradas" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2"
          >
            Entradas recentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            O que tenho andado a escrever.
          </motion.p>

          <div>
            {sampleEntries.map((entry, i) => (
              <EntryCard key={i} index={i} {...entry} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </div>
  );
};

export default Index;
