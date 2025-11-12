import CollageHero from '../components/CollageHero'
import { useContent } from '../context/ContentContext'

const Home = () => {
  const { content } = useContent()

  return (
    <div className="space-y-16 pb-20">
      <CollageHero
        title={content.projectName}
        description={content.whatIsProject}
      />

      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <section className="space-y-3 md:col-span-2">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Sessions
          </h2>
          <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
            <p>3 avril : Avant le départ 14h – 17h</p>
            <p>10 avril : Durant la mobilité 14h – 17h</p>
            <p>17 avril : Et après ? 14h – 17h</p>
            <p className="mt-4 text-slate-300">
              Salle I 107 (bâtiment Ionesco)
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Équipe
          </h2>
          <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
            <p className="font-semibold underline">Notre équipe :</p>
            <p>
              Nous sommes 12 étudiants en Master Négociations de projets internationaux. Tous concernés de prêt ou de loin par la question de l'interculturalité. Certains d'entre nous viennent d'autres continents, d'autres ont réalisés leur stage ou une mobilité Erasmus à l'étranger. Nous sommes heureux de pouvoir vous accompagner dans votre projet, alors n'hésitez pas, venez nous rencontrer durant nos sessions au mois d'Avril. Nous pourrons discuter, vous rassurer, vous aider et vous faire vivre un moment enrichissant autour d'ateliers autour de l'interculturalité !
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Contact / Instagram / Mail
          </h2>
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
        </section>
      </div>
    </div>
  )
}

export default Home

