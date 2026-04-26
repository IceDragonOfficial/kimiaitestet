import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { Monitor, Smartphone, ShoppingCart, X, ChevronDown, Gamepad2, Palette } from 'lucide-react'

const THEMES = [
  { id: 'default', name: 'Flat (Default)', price: 'Ücretsiz' },
  { id: 'lester', name: 'Lester', price: '1,499₺' },
  { id: 'hyterra', name: 'Hyterra', price: '999₺' },
  { id: 'gale', name: 'Gale', price: '749₺' },
]

const GAMES = [
  { id: 'minecraft', name: 'Minecraft' },
  { id: 'fivem', name: 'FiveM' },
  { id: 'rust', name: 'Rust' },
  { id: 'csgo', name: 'CS:GO / CS2' },
]

export default function DemoLayout() {
  const navigate = useNavigate()
  const { themeId = 'default', gameId = 'minecraft' } = useParams()
  
  const [isMobileView, setIsMobileView] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [isGameOpen, setIsGameOpen] = useState(false)

  const activeTheme = THEMES.find(t => t.id === themeId) || THEMES[0]
  const activeGame = GAMES.find(g => g.id === gameId) || GAMES[0]

  const handleThemeChange = (id: string) => {
    setIsThemeOpen(false)
    navigate(`/demo/${id}/${gameId}`)
  }

  const handleGameChange = (id: string) => {
    setIsGameOpen(false)
    navigate(`/demo/${themeId}/${id}`)
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-sans">
      {/* Velixo Demo Toolbar */}
      <div className="h-16 bg-[#111] border-b border-white/10 flex items-center justify-between px-4 sm:px-6 shrink-0 z-[100] relative shadow-2xl">
        
        {/* Left: Brand & Close */}
        <div className="flex items-center gap-6">
          <Link to="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors tooltip-trigger" title="Siteye Dön">
            <X className="w-4 h-4 text-white" />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold tracking-tight flex items-center gap-2">
              <span className="text-blue-500">Velixo</span> Demo Modu
            </h1>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-2 sm:gap-4 absolute left-1/2 -translate-x-1/2">
          {/* Theme Selector */}
          <div className="relative">
            <button 
              onClick={() => { setIsThemeOpen(!isThemeOpen); setIsGameOpen(false); }}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            >
              <Palette className="w-4 h-4 text-gray-400" />
              <span className="hidden sm:inline">Tema:</span> {activeTheme.name}
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
            </button>
            {isThemeOpen && (
              <div className="absolute top-full mt-2 left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                {THEMES.map(t => (
                  <button 
                    key={t.id}
                    onClick={() => handleThemeChange(t.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${t.id === themeId ? 'bg-blue-500/10 text-blue-400 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {t.name}
                    <span className="text-xs opacity-50 font-normal">{t.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Game Selector */}
          <div className="relative">
            <button 
              onClick={() => { setIsGameOpen(!isGameOpen); setIsThemeOpen(false); }}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            >
              <Gamepad2 className="w-4 h-4 text-gray-400" />
              <span className="hidden sm:inline">Oyun:</span> {activeGame.name}
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isGameOpen ? 'rotate-180' : ''}`} />
            </button>
            {isGameOpen && (
              <div className="absolute top-full mt-2 left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                {GAMES.map(g => (
                  <button 
                    key={g.id}
                    onClick={() => handleGameChange(g.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${g.id === gameId ? 'bg-blue-500/10 text-blue-400 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-lg">
            <button 
              onClick={() => setIsMobileView(false)} 
              className={`p-1.5 rounded-md transition-colors ${!isMobileView ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              title="Masaüstü Görünümü"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsMobileView(true)} 
              className={`p-1.5 rounded-md transition-colors ${isMobileView ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              title="Mobil Görünüm"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Temayı Satın Al</span>
          </button>
        </div>
      </div>

      {/* Demo Content Area */}
      <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        <div className={`transition-all duration-500 ease-in-out w-full h-full ${isMobileView ? 'max-w-[400px] h-[800px] border-x border-white/10 shadow-2xl relative my-auto rounded-3xl overflow-hidden ring-8 ring-[#111]' : ''}`}>
          
          {/* This is where the actual game template renders */}
          <div className="w-full h-full overflow-y-auto bg-black scrollbar-hide">
             <Outlet context={{ theme: activeTheme, game: activeGame }} />
          </div>

        </div>
      </div>
    </div>
  )
}
