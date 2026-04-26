// ═══════════════════════════════════════
// Velixo Platform - Express Sunucusu
// ═══════════════════════════════════════
import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import { securityHeaders, corsMiddleware } from './middleware/security.js'
import { globalLimiter } from './middleware/rate-limit.js'
import { AppError } from './lib/errors.js'
import { prisma } from './lib/prisma.js'
import { licenseRouter } from './routes/license.js'

const app = express()
const PORT = parseInt(process.env.PORT ?? '3001', 10)

// ── Temel Middleware'ler ──
app.use(securityHeaders)
app.use(corsMiddleware)
app.use(compression())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(cookieParser())
app.use(globalLimiter)

// ── Sağlık Kontrolü ──
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// ══════════════════════════════════════
// ROUTE GRUPLARI (Adım 2+'da doldurulacak)
// ══════════════════════════════════════

// Auth rotaları
// app.use('/api/auth', authRoutes)
// Kullanıcı rotaları
// app.use('/api/users', userRoutes)
// Mağaza rotaları
// app.use('/api/store', storeRoutes)
// Forum rotaları
// app.use('/api/forum', forumRoutes)
// Ticket rotaları
// app.use('/api/tickets', ticketRoutes)
// Blog rotaları
// app.use('/api/blog', blogRoutes)
// Admin rotaları
// app.use('/api/admin', adminRoutes)
// Connect rotaları
// app.use('/api/connect', connectRoutes)
// Lisans rotaları
app.use('/api/license', licenseRouter)
// Webhook rotaları
// app.use('/api/webhooks', webhookRoutes)

// ── 404 Handler ──
app.use((_req, _res, next) => {
  next(AppError.notFound('İstenen kaynak bulunamadı'))
})

// ── Merkezi Hata Yakalayıcı ──
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        code: err.code,
      },
    })
    return
  }

  // Beklenmeyen hatalar
  console.error('[HATA]', err)
  res.status(500).json({
    success: false,
    error: {
      message: process.env.NODE_ENV === 'development' ? err.message : 'Sunucu hatası',
      code: 'INTERNAL_ERROR',
    },
  })
})

// ── Sunucuyu Başlat ──
async function bootstrap(): Promise<void> {
  try {
    // Prisma bağlantısını test et
    await prisma.$connect()
    console.log('[DB] PostgreSQL bağlantısı başarılı')

    app.listen(PORT, () => {
      console.log(`
═══════════════════════════════════════════
  🚀 Velixo Server çalışıyor
  📍 http://localhost:${PORT}
  🔧 Ortam: ${process.env.NODE_ENV ?? 'development'}
═══════════════════════════════════════════
      `)
    })
  } catch (err) {
    console.error('[FATAL] Sunucu başlatılamadı:', err)
    process.exit(1)
  }
}

bootstrap()

export default app
