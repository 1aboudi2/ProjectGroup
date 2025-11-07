import Accordion from '../components/Accordion'
import { useContent } from '../context/ContentContext'

const Details = () => {
  const {
    content: { detailParagraphs },
  } = useContent()

  const accordionItems = detailParagraphs.map((paragraph, index) => ({
    id: `detail-${index}`,
    title: `Detail ${index + 1}`,
    content: paragraph,
  }))

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 pb-20">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Project Details
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          Tap any section to expand and dig deeper into the background, collaborators, and roadmap.
        </p>
      </header>

      <Accordion items={accordionItems} />
    </div>
  )
}

export default Details

