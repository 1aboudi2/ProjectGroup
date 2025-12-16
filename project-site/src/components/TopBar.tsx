import { NavLink, Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Détails', to: '/details' },
]

const TopBar = () => {
  const {
    content: { projectName },
  } = useContent()

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/logo_AB.jpg" 
            alt="Atelier Interculturalité Logo" 
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-100 md:text-xl hidden sm:inline">
            {projectName}
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'transition-colors hover:text-slate-100',
                  isActive ? 'text-slate-100' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default TopBar

