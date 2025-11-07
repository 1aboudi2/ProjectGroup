import { useState } from 'react'

export type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id ?? null)

  const handleToggle = (id: string) => {
    setOpenItem((current) => (current === id ? null : id))
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openItem
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-inner"
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-slate-100 transition-colors hover:bg-slate-800/70"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-xl text-slate-400">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`${item.id}-content`}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-slate-300 md:text-base">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion

