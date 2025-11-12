import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Admin from './pages/Admin'
import Details from './pages/Details'
import Home from './pages/Home'

const App = () => {
  const location = useLocation()
  const isLocalStorageRoute = location.pathname.startsWith('/localestorage')

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <TopBar />
      <main className="flex-1 pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/localestorage" element={<Home />} />
          <Route path="/localestorage/details" element={<Details />} />
          <Route path="/localestorage/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        {isLocalStorageRoute
          ? 'Le contenu est enregistré dans votre navigateur via localStorage.'
          : 'Contenu par défaut. Visitez /localestorage pour voir le contenu personnalisé.'}
      </footer>
    </div>
  )
}

export default App

