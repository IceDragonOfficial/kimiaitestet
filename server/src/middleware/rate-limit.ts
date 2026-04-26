// ═══════════════════════════════════════
// Velixo - Rate Limiter Middleware
// ═══════════════════════════════════════
import rateLimit from 'express-rate-limit'

// Genel API limiti: 100 istek / dakika
export const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Çok fazla istek gönderildi. Lütfen biraz bekleyin.',
    code: 'TOO_MANY_REQUESTS',
  },
})

// Auth limiti: 5 istek / 15 dakika (brute force koruması)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Çok fazla giriş denemesi. 15 dakika bekleyin.',
    code: 'AUTH_RATE_LIMITED',
  },
})

// API Key limiti: 100 istek / dakika
export const apiKeyLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.headers['x-api-key']?.toString() ?? req.ip ?? 'unknown'
  },
  message: {
    error: 'API rate limit aşıldı.',
    code: 'API_RATE_LIMITED',
  },
})

// Webhook limiti: 30 istek / dakika
export const webhookLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Webhook rate limit aşıldı.',
    code: 'WEBHOOK_RATE_LIMITED',
  },
})
