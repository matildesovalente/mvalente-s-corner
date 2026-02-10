import { motion } from "framer-motion";

interface EntryCardProps {
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
  index: number;
}

const EntryCard = ({ title, excerpt, date, tag, index }: EntryCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group py-8 border-b border-border last:border-b-0 cursor-pointer"
  >
    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground font-sans">
      <time>{date}</time>
      {tag && (
        <>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-primary font-medium">{tag}</span>
        </>
      )}
    </div>
    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed max-w-2xl">
      {excerpt}
    </p>
  </motion.article>
);

export default EntryCard;
