import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type SiteContent = {
  projectName: string
  whatIsProject: string
  whoIsDoingIt: string
  extraInfo: string
  detailParagraphs: [string, string, string]
}

type ContentContextValue = {
  content: SiteContent
  updateContent: (next: SiteContent) => void
  resetContent: () => void
}

const STORAGE_KEY = 'siteContent'

const defaultContent: SiteContent = {
  projectName: 'Project Nebula',
  whatIsProject:
    'Project Nebula is a modular platform for prototyping immersive data stories with real-time collaboration.',
  whoIsDoingIt:
    'A cross-functional trio of a product designer, a data storyteller, and a full-stack engineer are piloting the concept.',
  extraInfo:
    'This is an experimental build focused on rapid feedback. Expect weekly iterations and open design reviews.',
  detailParagraphs: [
    'The platform stitches together live dashboards, narrative copy, and spatial canvases to help teams communicate complex ideas faster.',
    'We are testing the concept with a cohort of five design-forward teams working across climate and mobility domains.',
    'Roadmap highlights include multiplayer editing, AI-assisted storyboarding, and publishing directly to the web.',
  ],
}

const ContentContext = createContext<ContentContextValue | undefined>(undefined)

const normalizeContent = (raw?: Partial<SiteContent>): SiteContent => {
  if (!raw) return defaultContent

  const detailParagraphs = Array.isArray(raw.detailParagraphs)
    ? ([
        raw.detailParagraphs[0] ?? defaultContent.detailParagraphs[0],
        raw.detailParagraphs[1] ?? defaultContent.detailParagraphs[1],
        raw.detailParagraphs[2] ?? defaultContent.detailParagraphs[2],
      ] satisfies SiteContent['detailParagraphs'])
    : defaultContent.detailParagraphs

  return {
    projectName: raw.projectName ?? defaultContent.projectName,
    whatIsProject: raw.whatIsProject ?? defaultContent.whatIsProject,
    whoIsDoingIt: raw.whoIsDoingIt ?? defaultContent.whoIsDoingIt,
    extraInfo: raw.extraInfo ?? defaultContent.extraInfo,
    detailParagraphs,
  }
}

const readStoredContent = (): SiteContent => {
  if (typeof window === 'undefined') return defaultContent

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return defaultContent
    const parsed = JSON.parse(stored) as Partial<SiteContent>
    return normalizeContent(parsed)
  } catch (error) {
    console.warn('Failed to read site content from localStorage', error)
    return defaultContent
  }
}

export const ContentProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [content, setContent] = useState<SiteContent>(() => readStoredContent())

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
    } catch (error) {
      console.warn('Failed to persist site content to localStorage', error)
    }
  }, [content])

  const updateContent = useCallback((next: SiteContent) => {
    setContent(normalizeContent(next))
  }, [])

  const resetContent = useCallback(() => {
    setContent(defaultContent)
  }, [])

  const value = useMemo<ContentContextValue>(
    () => ({
      content,
      updateContent,
      resetContent,
    }),
    [content, resetContent, updateContent],
  )

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }

  return context
}

export const getDefaultContent = () =>
  JSON.parse(JSON.stringify(defaultContent)) as SiteContent

