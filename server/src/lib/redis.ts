// ═══════════════════════════════════════
// Velixo - Redis İstemcisi
// ═══════════════════════════════════════
import Redis from 'ioredis'

const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379'

export const redis = new Redis(REDIS_URL, {
  maxRetriesPerRequest: 3,
  retryStrategy(times: number) {
    const delay = Math.min(times * 200, 5000)
    return delay
  },
  lazyConnect: true,
})

redis.on('connect', () => {
  console.log('[Redis] Bağlantı başarılı')
})

redis.on('error', (err: Error) => {
  console.error('[Redis] Bağlantı hatası:', err.message)
})

// Yardımcı fonksiyonlar
export async function cacheGet(key: string): Promise<string | null> {
  try {
    return await redis.get(key)
  } catch {
    return null
  }
}

export async function cacheSet(key: string, value: string, ttlSeconds: number = 60): Promise<void> {
  try {
    await redis.set(key, value, 'EX', ttlSeconds)
  } catch (err) {
    console.error('[Redis] Cache set hatası:', err)
  }
}

export async function cacheDel(key: string): Promise<void> {
  try {
    await redis.del(key)
  } catch (err) {
    console.error('[Redis] Cache delete hatası:', err)
  }
}
