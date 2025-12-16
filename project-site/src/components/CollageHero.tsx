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
    <div className="mx-auto max-w-6xl">
      {/* Welcome section - Bienvenue at top, text on left, square logo on right */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Collage background */}
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
        
        {/* Content on top */}
        <div className="relative z-10">
          {/* Bienvenue at the top center - bigger */}
          <div className="pt-6 md:pt-8 text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/10 px-6 py-2 text-sm md:text-base uppercase tracking-[0.3em] text-slate-200">
              Bienvenue
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 p-6 md:p-12">
            {/* Text content on the left - title at top left, description below */}
            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {title}
              </h1>
              <p className="text-lg text-white md:text-xl leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-6">
                {description}
              </p>
            </div>
            
            {/* Square logo on the right */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/logo_AB.jpg" 
                alt="Atelier Interculturalité Logo" 
                className="w-56 h-56 md:w-80 md:h-80 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollageHero

