// ═══════════════════════════════════════
// Velixo - JWT Kimlik Doğrulama Middleware
// ═══════════════════════════════════════
import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError } from '../lib/errors.js'

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET ?? 'fallback_secret'

// Token payload tipi
export interface TokenPayload {
  userId: string
  username: string
  roleId: string | null
  permissions: string[]
}

// Request'e kullanıcı bilgisi ekleme
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload
    }
  }
}

// Access token oluşturma
export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
  })
}

// Refresh token oluşturma
export function generateRefreshToken(userId: string): string {
  const secret = process.env.JWT_REFRESH_SECRET ?? 'fallback_refresh'
  return jwt.sign({ userId }, secret, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
  })
}

// Token doğrulama middleware'i
export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw AppError.unauthorized('Token bulunamadı')
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
      throw AppError.unauthorized('Geçersiz token formatı')
    }

    const decoded = jwt.verify(token, JWT_ACCESS_SECRET)
    if (typeof decoded === 'string') {
      throw AppError.unauthorized('Geçersiz token')
    }

    req.user = decoded as TokenPayload
    next()
  } catch (err) {
    if (err instanceof AppError) {
      next(err)
      return
    }
    if (err instanceof jwt.TokenExpiredError) {
      next(AppError.unauthorized('Token süresi dolmuş'))
      return
    }
    next(AppError.unauthorized('Geçersiz token'))
  }
}

// Opsiyonel auth (giriş yapmamış kullanıcılar da geçebilir)
export function optionalAuth(req: Request, _res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      next()
      return
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
      next()
      return
    }

    const decoded = jwt.verify(token, JWT_ACCESS_SECRET)
    if (typeof decoded !== 'string') {
      req.user = decoded as TokenPayload
    }
    next()
  } catch {
    next()
  }
}
