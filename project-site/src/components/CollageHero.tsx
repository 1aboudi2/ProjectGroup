type CollageHeroProps = {
  title: string
  description: string
}

// Curated images for interculturality theme - all from Unsplash
// All images specifically selected for: international students, cultural exchange, workshops, diversity
const collageImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80', // Diverse students in discussion
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', // Workshop with diverse participants
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80', // Students collaborating on project
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', // Group activity session
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80', // International students studying
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80', // Team meeting diverse group
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Students working together
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80', // Classroom learning environment
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', // Diverse group workshop
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', // Academic collaboration
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', // Students learning together
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', // International exchange meeting
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
          Bienvenue
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

