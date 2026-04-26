// ═══════════════════════════════════════
// Velixo - AppError Sınıfı (Merkezi Hata Yönetimi)
// ═══════════════════════════════════════

export class AppError extends Error {
  public readonly statusCode: number
  public readonly code: string
  public readonly isOperational: boolean

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    isOperational: boolean = true
  ) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    this.isOperational = isOperational
    Object.setPrototypeOf(this, AppError.prototype)
  }

  // Fabrika metodları
  static badRequest(message: string, code?: string): AppError {
    return new AppError(message, 400, code ?? 'BAD_REQUEST')
  }

  static unauthorized(message?: string): AppError {
    return new AppError(message ?? 'Yetkisiz erişim', 401, 'UNAUTHORIZED')
  }

  static forbidden(message?: string): AppError {
    return new AppError(message ?? 'Bu işlem için yetkiniz yok', 403, 'FORBIDDEN')
  }

  static notFound(message?: string): AppError {
    return new AppError(message ?? 'Kaynak bulunamadı', 404, 'NOT_FOUND')
  }

  static conflict(message: string): AppError {
    return new AppError(message, 409, 'CONFLICT')
  }

  static tooMany(message?: string): AppError {
    return new AppError(message ?? 'Çok fazla istek', 429, 'TOO_MANY_REQUESTS')
  }

  static internal(message?: string): AppError {
    return new AppError(message ?? 'Sunucu hatası', 500, 'INTERNAL_ERROR', false)
  }
}
