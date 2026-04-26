// Route güncellemeleri
import { Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Public (Ziyaretçi) Sayfaları
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))
import CookieConsent from './components/layout/CookieConsent'

// Satış Platformu Ek Sayfaları
const FeaturesPage = lazy(() => import('./pages/sales/FeaturesPage'))
const ThemesPage = lazy(() => import('./pages/sales/ThemesPage'))
const LicenseCheckPage = lazy(() => import('./pages/sales/LicenseCheckPage'))
const LegalPage = lazy(() => import('./pages/sales/LegalPage'))
const ContactPage = lazy(() => import('./pages/sales/ContactPage'))
const MinecraftLandingPage = lazy(() => import('./pages/sales/games/MinecraftLandingPage'))
const PricingPage = lazy(() => import('./pages/sales/PricingPage'))
const GamesPage = lazy(() => import('./pages/sales/GamesPage'))
const AIPage = lazy(() => import('./pages/sales/AIPage'))
const HelpPage = lazy(() => import('./pages/sales/HelpPage'))
// Diğer public sayfalar...

// Client (Müşteri) Paneli Sayfaları
const ClientLayout = lazy(() => import('./pages/client/ClientLayout'))
const SetupWizard = lazy(() => import('./pages/install/InstallWizard'))

// Admin Paneli
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const ClientDashboard = lazy(() => import('./pages/client/Dashboard'))
const ClientLicenses = lazy(() => import('./pages/client/Licenses'))
const ClientBilling = lazy(() => import('./pages/client/Billing'))
const ClientTickets = lazy(() => import('./pages/client/Tickets'))
const ClientAI = lazy(() => import('./pages/client/AIPage'))
const ClientThemes = lazy(() => import('./pages/client/Themes'))
const ClientCoupons = lazy(() => import('./pages/client/Coupons'))
const ClientWallet = lazy(() => import('./pages/client/Wallet'))
const ClientSettings = lazy(() => import('./pages/client/Settings'))
const ClientEmail = lazy(() => import('./pages/client/Email'))
const ClientPassword = lazy(() => import('./pages/client/Password'))

// Demo Sistemi Sayfaları
const DemoLayout = lazy(() => import('./pages/demo/DemoLayout'))
const LesterTheme = lazy(() => import('./pages/demo/themes/LesterTheme'))
const FlatTheme = lazy(() => import('./pages/demo/themes/FlatTheme'))
const HyterraTheme = lazy(() => import('./pages/demo/themes/HyterraTheme'))
const GaleTheme = lazy(() => import('./pages/demo/themes/GaleTheme'))

// Kurulum Sihirbazı (CMS Web Installer)
const InstallWizard = lazy(() => import('./pages/install/InstallWizard'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* ── Public Rotalar ── */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Satış Platformu Ekstra Sayfaları */}
        <Route path="/ozellikler" element={<><Navbar /><FeaturesPage /><Footer /></>} />
        <Route path="/fiyatlandirma" element={<><Navbar /><PricingPage /><Footer /></>} />
        <Route path="/oyunlar" element={<><Navbar /><GamesPage /><Footer /></>} />
        <Route path="/ai" element={<><Navbar /><AIPage /><Footer /></>} />
        <Route path="/yardim" element={<><Navbar /><HelpPage /><Footer /></>} />
        <Route path="/themes" element={<><Navbar /><ThemesPage /><Footer /></>} />
        <Route path="/lisans-kontrol" element={<><Navbar /><LicenseCheckPage /><Footer /></>} />
        <Route path="/iletisim" element={<><Navbar /><ContactPage /><Footer /></>} />
        <Route path="/legal/:slug" element={<><Navbar /><LegalPage /><Footer /></>} />
        <Route path="/minecraft" element={<><Navbar /><MinecraftLandingPage /><Footer /></>} />
        
        {/* ── Müşteri Paneli Rotaları ── */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="licenses" element={<ClientLicenses />} />
          <Route path="billing" element={<ClientBilling />} />
          <Route path="tickets" element={<ClientTickets />} />
          <Route path="ai" element={<ClientAI />} />
          <Route path="themes" element={<ClientThemes />} />
          <Route path="coupons" element={<ClientCoupons />} />
          <Route path="wallet" element={<ClientWallet />} />
          <Route path="settings" element={<ClientSettings />} />
          <Route path="email" element={<ClientEmail />} />
          <Route path="password" element={<ClientPassword />} />
        </Route>

        {/* ── Tema Demo Motoru ── */}
        <Route path="/demo" element={<DemoLayout />}>
          <Route index element={<FlatTheme />} />
          <Route path="flat/minecraft" element={<FlatTheme />} />
          <Route path="default/minecraft" element={<FlatTheme />} />
          <Route path="lester/minecraft" element={<LesterTheme />} />
          <Route path="hyterra/minecraft" element={<HyterraTheme />} />
          <Route path="gale/minecraft" element={<GaleTheme />} />
          
          {/* Theme Specific Login/Register Demos */}
          <Route path="lester/login" element={<LesterTheme page="login" />} />
          <Route path="lester/register" element={<LesterTheme page="register" />} />
          <Route path="lester/profile" element={<LesterTheme page="profile" />} />
          <Route path="flat/login" element={<FlatTheme page="login" />} />
          <Route path="flat/register" element={<FlatTheme page="register" />} />
          <Route path="default/login" element={<FlatTheme page="login" />} />
          <Route path="default/register" element={<FlatTheme page="register" />} />
          <Route path="hyterra/login" element={<HyterraTheme page="login" />} />
          <Route path="hyterra/register" element={<HyterraTheme page="register" />} />
          <Route path="gale/login" element={<GaleTheme page="login" />} />
          <Route path="gale/register" element={<GaleTheme page="register" />} />

          {/* Fallback to Lester for unknown combinations for now */}
          <Route path=":themeId/:gameId" element={<LesterTheme />} />
        </Route>

        {/* ── Kurulum Sihirbazı ── */}
        <Route path="/install" element={<SetupWizard />} />

        {/* ── CMS Yönetim Paneli Rotaları ── */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* Gelecekte eklenecek admin alt rotaları */}
          <Route path="users" element={<div className="p-8">Kullanıcı Yönetimi Yapım Aşamasında</div>} />
          <Route path="store" element={<div className="p-8">Mağaza Yönetimi Yapım Aşamasında</div>} />
          <Route path="tickets" element={<div className="p-8">Destek Talepleri Yapım Aşamasında</div>} />
        </Route>
      </Routes>
      <CookieConsent />
    </Suspense>
  )
}
