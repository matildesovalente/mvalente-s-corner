const Footer = () => (
  <footer className="border-t border-border py-10 mt-20">
    <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-serif text-lg font-bold text-primary">mv.</span>
      <span>© {new Date().getFullYear()} mvalente.pt</span>
    </div>
  </footer>
);

export default Footer;
