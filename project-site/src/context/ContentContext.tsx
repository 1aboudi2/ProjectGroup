import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'

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
  projectName: "Atelier d'Interculturalité",
  whatIsProject:
    "Bienvenue sur le site du projet Atelier d'Interculturalité. Vous souhaitez réaliser une mobilité à l'étranger ? Préparer une année d'Erasmus, de stage ou même un voyage ? Vous voulez en apprendre davantage sur les différentes cultures et être accompagnés sur votre projet ? Les ateliers d'interculturalité sont faits pour vous !",
  whoIsDoingIt:
    "Nous sommes 12 étudiants en Master Négociations de projets internationaux. Tous concernés de prêt ou de loin par la question de l'interculturalité. Certains d'entre nous viennent d'autres continents, d'autres ont réalisés leur stage ou une mobilité Erasmus à l'étranger. Nous sommes heureux de pouvoir vous accompagner dans votre projet, alors n'hésitez pas, venez nous rencontrer durant nos sessions au mois d'Avril. Nous pourrons discuter, vous rassurer, vous aider et vous faire vivre un moment enrichissant autour d'ateliers autour de l'interculturalité !",
  extraInfo:
    "Sessions : 3 avril : Avant le départ (14h – 17h) | 10 avril : Durant la mobilité (14h – 17h) | 17 avril : Et après ? (14h – 17h) - Salle I 107 (bâtiment Ionesco). Compte Instagram : (avec une image et le nom) - N'hésitez pas à consulter notre compte Instagram pour plus d'informations sur le projet mais également pour tout autre info concernant la mobilité. Mail : ateliers.inter@outlook.fr - Si vous avez des questions n'hésitez pas !",
  detailParagraphs: [
    "3 avril : Avant le départ - 14h – 17h - Salle I 107 (bâtiment Ionesco)",
    "10 avril : Durant la mobilité - 14h – 17h - Salle I 107 (bâtiment Ionesco)",
    "17 avril : Et après ? - 14h – 17h - Salle I 107 (bâtiment Ionesco)",
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

const readStoredContent = (useLocalStorage: boolean): SiteContent => {
  if (typeof window === 'undefined') return defaultContent
  
  // Only read from localStorage if useLocalStorage is true
  if (!useLocalStorage) return defaultContent

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
  const location = useLocation()
  const useLocalStorage = location.pathname.startsWith('/localestorage')
  
  const [content, setContent] = useState<SiteContent>(() => 
    readStoredContent(useLocalStorage)
  )

  // Update content when route changes
  useEffect(() => {
    const newContent = readStoredContent(useLocalStorage)
    setContent(newContent)
  }, [useLocalStorage])

  // Only save to localStorage when on /localestorage routes
  useEffect(() => {
    if (useLocalStorage) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
      } catch (error) {
        console.warn('Failed to persist site content to localStorage', error)
      }
    }
  }, [content, useLocalStorage])

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

