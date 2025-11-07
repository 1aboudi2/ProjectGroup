import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Details', to: '/details' },
  { label: 'Admin', to: '/admin' },
]

const TopBar = () => {
  const {
    content: { projectName },
  } = useContent()

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-slate-100 md:text-xl">
          {projectName}
        </span>

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

