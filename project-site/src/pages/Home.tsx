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
        <section className="space-y-3">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Qu'est-ce que le projet ?
          </h2>
          <p className="text-base leading-relaxed text-slate-200 md:text-lg">
            {content.whatIsProject}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Équipe
          </h2>
          <div className="space-y-3 text-base leading-relaxed text-slate-200 md:text-lg">
            <p className="font-semibold underline">Notre équipe :</p>
            <p>{content.whoIsDoingIt}</p>
          </div>
        </section>

        <section className="space-y-3 md:col-span-2">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Sessions
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-slate-200 md:text-lg">
            <p>
              <strong>3 avril : Avant le départ</strong> - 14h – 17h
            </p>
            <p>
              <strong>10 avril : Durant la mobilité</strong> - 14h – 17h
            </p>
            <p>
              <strong>17 avril : Et après ?</strong> - 14h – 17h
            </p>
            <p className="mt-4 text-slate-300">
              Salle I 107 (bâtiment Ionesco)
            </p>
          </div>
        </section>

        <section className="space-y-3 md:col-span-2">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Contact
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
            <p>Si vous avez des questions n'hésitez pas !</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

