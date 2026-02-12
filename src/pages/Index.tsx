import lantern from "@/assets/lantern.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl space-y-6">
        <div className="font-serif text-lg md:text-xl text-foreground leading-relaxed space-y-4">
          <p>How much sorrow can I take?</p>
          <p>Blackbird on my shoulder</p>
          <p>And what difference does it make</p>
          <p>When this love is over?</p>
        </div>
        <img
          src={lantern}
          alt="Lanterna no céu noturno"
          className="w-full rounded-lg mt-8"
        />
      </div>
      <footer className="mt-auto pt-12 text-sm text-muted-foreground/50 font-sans">
        mvalente.pt
      </footer>
    </div>
  );
};

export default Index;
