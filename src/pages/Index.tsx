import { useState } from "react";

const Index = () => {
  const [title, setTitle] = useState("");
  const [poem, setPoem] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="w-full bg-transparent font-serif text-4xl md:text-5xl font-bold text-foreground placeholder:text-muted-foreground/40 outline-none mb-8 leading-tight"
        />
        <textarea
          value={poem}
          onChange={(e) => setPoem(e.target.value)}
          placeholder="Escreve aqui..."
          className="w-full bg-transparent font-serif text-lg md:text-xl text-foreground placeholder:text-muted-foreground/30 outline-none resize-none leading-relaxed min-h-[60vh]"
        />
      </div>
      <footer className="mt-auto pt-12 text-sm text-muted-foreground/50 font-sans">
        mvalente.pt
      </footer>
    </div>
  );
};

export default Index;
