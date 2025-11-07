import { useEffect, useMemo, useState } from 'react'
import AdminForm from '../components/AdminForm'
import { getDefaultContent, useContent } from '../context/ContentContext'
import type { SiteContent } from '../context/ContentContext'

const Admin = () => {
  const { content, updateContent, resetContent } = useContent()
  const [formValues, setFormValues] = useState<SiteContent>(content)

  useEffect(() => {
    setFormValues(content)
  }, [content])

  const isDirty = useMemo(() => {
    return JSON.stringify(formValues) !== JSON.stringify(content)
  }, [content, formValues])

  const handleChange = (next: SiteContent) => {
    setFormValues(next)
  }

  const handleSubmit = () => {
    updateContent(formValues)
  }

  const handleReset = () => {
    const defaults = getDefaultContent()
    resetContent()
    setFormValues(defaults)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6 pb-20">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Admin
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          Update the copy for every page. Changes save locally in your browser, so they persist after refreshes.
        </p>
      </header>

      <AdminForm
        values={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        isDirty={isDirty}
      />
    </div>
  )
}

export default Admin

