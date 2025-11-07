type CollageHeroProps = {
  title: string
  description: string
}

const collageImages = [
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517638851339-4aa32003c11a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=600&q=80',
]

const CollageHero = ({ title, description }: CollageHeroProps) => {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px] md:grid-cols-6 md:grid-rows-2">
        {collageImages.map((src, index) => (
          <div
            key={src}
            className="h-full w-full border border-slate-900/40 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden
          >
            <span className="sr-only">Collage image {index + 1}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-collage-overlay" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
          Welcome
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-slate-200/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}

export default CollageHero

