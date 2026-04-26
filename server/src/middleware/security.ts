// ═══════════════════════════════════════
// Velixo - Güvenlik Middleware (Helmet + CORS + CSP)
// ═══════════════════════════════════════
import helmet from 'helmet'
import cors from 'cors'
import type { RequestHandler } from 'express'

const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:3000'

// Helmet güvenlik başlıkları (ISO 27001 + OWASP)
export const securityHeaders: RequestHandler = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
})

// CORS yapılandırması
export const corsMiddleware: RequestHandler = cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
  maxAge: 86400,
})
