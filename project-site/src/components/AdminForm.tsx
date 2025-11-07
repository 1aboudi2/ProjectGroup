import type { FormEvent } from 'react'
import type { SiteContent } from '../context/ContentContext'

type AdminFormProps = {
  values: SiteContent
  onChange: (next: SiteContent) => void
  onSubmit: () => void
  onReset: () => void
  isDirty: boolean
}

const labelStyles = 'text-sm font-medium text-slate-200'
const inputStyles =
  'w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'

const AdminForm = ({
  values,
  onChange,
  onSubmit,
  onReset,
  isDirty,
}: AdminFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }

  const handleFieldChange = (
    field: keyof Omit<SiteContent, 'detailParagraphs'>,
    value: string,
  ) => {
    onChange({
      ...values,
      [field]: value,
    })
  }

  const handleDetailChange = (index: number, value: string) => {
    const nextDetails = [...values.detailParagraphs] as SiteContent['detailParagraphs']
    nextDetails[index] = value
    onChange({
      ...values,
      detailParagraphs: nextDetails,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
        <div className="space-y-2">
          <label htmlFor="projectName" className={labelStyles}>
            Project name
          </label>
          <input
            id="projectName"
            name="projectName"
            value={values.projectName}
            onChange={(event) => handleFieldChange('projectName', event.target.value)}
            className={inputStyles}
            placeholder="Enter the project name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="whatIsProject" className={labelStyles}>
            What is the project?
          </label>
          <textarea
            id="whatIsProject"
            name="whatIsProject"
            value={values.whatIsProject}
            onChange={(event) => handleFieldChange('whatIsProject', event.target.value)}
            className={`${inputStyles} min-h-[120px]`}
            placeholder="Describe the project"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="whoIsDoingIt" className={labelStyles}>
            Who is doing it?
          </label>
          <textarea
            id="whoIsDoingIt"
            name="whoIsDoingIt"
            value={values.whoIsDoingIt}
            onChange={(event) => handleFieldChange('whoIsDoingIt', event.target.value)}
            className={`${inputStyles} min-h-[100px]`}
            placeholder="Introduce the team"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="extraInfo" className={labelStyles}>
            Extra info
          </label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            value={values.extraInfo}
            onChange={(event) => handleFieldChange('extraInfo', event.target.value)}
            className={`${inputStyles} min-h-[100px]`}
            placeholder="Add any additional notes"
          />
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
        <h2 className="text-lg font-semibold text-slate-100">Detail paragraphs</h2>
        {values.detailParagraphs.map((paragraph, index) => (
          <div className="space-y-2" key={`detail-${index}`}>
            <label htmlFor={`detail-${index}`} className={labelStyles}>
              Detail {index + 1}
            </label>
            <textarea
              id={`detail-${index}`}
              name={`detail-${index}`}
              value={paragraph}
              onChange={(event) => handleDetailChange(index, event.target.value)}
              className={`${inputStyles} min-h-[120px]`}
              placeholder={`Detail paragraph ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
        >
          Reset to defaults
        </button>
        <button
          type="submit"
          className="rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          disabled={!isDirty}
        >
          Save changes
        </button>
      </div>
    </form>
  )
}

export default AdminForm

