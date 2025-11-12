import Accordion from '../components/Accordion'
import { useContent } from '../context/ContentContext'

const Details = () => {
  const {
    content: { detailParagraphs },
  } = useContent()

  const sessionTitles = [
    '3 avril : Avant le départ',
    '10 avril : Durant la mobilité',
    '17 avril : Et après ?',
  ]

  const accordionItems = detailParagraphs.map((paragraph, index) => ({
    id: `detail-${index}`,
    title: sessionTitles[index] || `Session ${index + 1}`,
    content: paragraph,
  }))

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 pb-20">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Sessions
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          Cliquez sur une section pour développer et découvrir les détails de chaque session.
        </p>
      </header>

      <Accordion items={accordionItems} />
    </div>
  )
}

export default Details

