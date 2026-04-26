// ═══════════════════════════════════════
// Velixo - MinIO / S3 İstemcisi
// ═══════════════════════════════════════
import { Client } from 'minio'

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT ?? 'localhost'
const MINIO_PORT = parseInt(process.env.MINIO_PORT ?? '9000', 10)
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY ?? ''
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY ?? ''
const MINIO_USE_SSL = process.env.MINIO_USE_SSL === 'true'
const MINIO_BUCKET = process.env.MINIO_BUCKET ?? 'velixo-uploads'

export const minioClient = new Client({
  endPoint: MINIO_ENDPOINT,
  port: MINIO_PORT,
  useSSL: MINIO_USE_SSL,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY,
})

// Bucket yoksa oluştur
export async function ensureBucket(): Promise<void> {
  try {
    const exists = await minioClient.bucketExists(MINIO_BUCKET)
    if (!exists) {
      await minioClient.makeBucket(MINIO_BUCKET)
      console.log(`[MinIO] '${MINIO_BUCKET}' bucket oluşturuldu`)
    }
  } catch (err) {
    console.error('[MinIO] Bucket kontrolü hatası:', err)
  }
}

// Dosya yükleme
export async function uploadFile(
  fileName: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  const objectName = `${Date.now()}-${fileName}`
  await minioClient.putObject(MINIO_BUCKET, objectName, buffer, buffer.length, {
    'Content-Type': contentType,
  })
  return `/${MINIO_BUCKET}/${objectName}`
}

// Dosya silme
export async function deleteFile(objectName: string): Promise<void> {
  try {
    await minioClient.removeObject(MINIO_BUCKET, objectName)
  } catch (err) {
    console.error('[MinIO] Dosya silme hatası:', err)
  }
}

// Pre-signed URL (geçici erişim)
export async function getPresignedUrl(objectName: string, expirySeconds: number = 3600): Promise<string> {
  return minioClient.presignedGetObject(MINIO_BUCKET, objectName, expirySeconds)
}
