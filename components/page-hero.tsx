type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-teal-200/60 bg-gradient-to-r from-teal-950 to-teal-700 px-4 py-20 md:px-6">
      <div className="absolute -top-20 left-0 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -bottom-20 right-5 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-2xl text-teal-50 md:text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}
