import CollageHero from '../components/CollageHero'
import { useContent } from '../context/ContentContext'

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-5 w-5 text-slate-300"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    />
  </svg>
)

const Home = () => {
  const { content } = useContent()

  return (
    <div className="space-y-16 pb-20">
      <CollageHero
        title={content.projectName}
        description={content.whatIsProject}
      />

      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Sessions
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
                <p>3 avril : Avant le départ 14h – 17h</p>
                <p>10 avril : Durant la mobilité 14h – 17h</p>
                <p>17 avril : Et après? 14h – 17h</p>
                <div className="mt-4 flex items-center gap-2 text-slate-300">
                  <LocationIcon />
                  <a
                    href="https://www.google.com/maps?q=43.630889,3.870417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Salle I 107 (bâtiment Ionesco)
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/map-5-512.png" 
                  alt="Location Map" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Équipe
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-1 space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
                <p className="font-semibold">Notre équipe :</p>
                <p>
                  Nous sommes 12 étudiants en Master Négociations de projets internationaux. Tous concernés de prêt ou de loin par la question de l'interculturalité. Certains d'entre nous viennent d'autres continents, d'autres ont réalisés leur stage ou une mobilité Erasmus à l'étranger. Nous sommes heureux de pouvoir vous accompagner dans votre projet, alors n'hésitez pas, venez nous rencontrer durant nos sessions au mois d'Avril. Nous pourrons discuter, vous rassurer, vous aider et vous faire vivre un moment enrichissant autour d'ateliers autour de l'interculturalité!
                </p>
              </div>
              <div className="flex-shrink-0 flex items-end justify-center mt-10">
                <img 
                  src="/pngegg.png" 
                  alt="Team illustration" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Contact
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-1 space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
                <p>
                  <strong>Compte Instagram :</strong>{' '}
                  <a 
                    href="https://www.instagram.com/ateliersinterculturalite/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    @ateliersinterculturalite
                  </a>
                </p>
                <p>
                  N'hésitez pas à consulter notre compte Instagram pour plus d'informations sur le projet mais également pour tout autre info concernant la mobilité.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/ateliersinterculturalite.png" 
                  alt="QR Code Instagram @ateliersinterculturalite" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

