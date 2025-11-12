import CollageHero from '../components/CollageHero'
import { useContent } from '../context/ContentContext'

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5 text-blue-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
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
            <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
              <p>3 avril : Avant le départ 14h – 17h</p>
              <p>10 avril : Durant la mobilité 14h – 17h</p>
              <p>17 avril : Et après ? 14h – 17h</p>
              <div className="mt-4 flex items-center gap-2 text-slate-300">
                <LocationIcon />
                <p>Salle I 107 (bâtiment Ionesco)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Équipe
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
              <p className="font-semibold underline">Notre équipe :</p>
              <p>
                Nous sommes 12 étudiants en Master Négociations de projets internationaux. Tous concernés de prêt ou de loin par la question de l'interculturalité. Certains d'entre nous viennent d'autres continents, d'autres ont réalisés leur stage ou une mobilité Erasmus à l'étranger. Nous sommes heureux de pouvoir vous accompagner dans votre projet, alors n'hésitez pas, venez nous rencontrer durant nos sessions au mois d'Avril. Nous pourrons discuter, vous rassurer, vous aider et vous faire vivre un moment enrichissant autour d'ateliers autour de l'interculturalité !
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Contact / Instagram / Mail
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
              <p>
                <strong>Compte Instagram :</strong> (avec une image et le nom)
              </p>
              <p>
                N'hésitez pas à consulter notre compte Instagram pour plus d'informations sur le projet mais également pour tout autre info concernant la mobilité.
              </p>
              <p>
                <strong>Mail :</strong>{' '}
                <a
                  href="mailto:ateliers.inter@outlook.fr"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  ateliers.inter@outlook.fr
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

