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
            What is the project?
          </h2>
          <p className="text-base leading-relaxed text-slate-200 md:text-lg">
            {content.whatIsProject}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Who is doing it?
          </h2>
          <p className="text-base leading-relaxed text-slate-200 md:text-lg">
            {content.whoIsDoingIt}
          </p>
        </section>

        <section className="space-y-3 md:col-span-2">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-400">
            Extra info
          </h2>
          <p className="text-base leading-relaxed text-slate-200 md:text-lg">
            {content.extraInfo}
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home

