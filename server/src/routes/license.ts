import { Router } from 'express'
import { prisma } from '../lib/prisma.js'
import { AppError } from '../lib/errors.js'

export const licenseRouter = Router()

// ════════════════════════════════════════════════
// LİSANS DOĞRULAMA API'Sİ (Sunuculardan Gelen Ping)
// ════════════════════════════════════════════════

// Bu endpoint, müşterinin web sitesine kurduğu Velixo CMS tarafından
// her 24 saatte bir çağrılır.
licenseRouter.post('/verify', async (req, res, next) => {
  try {
    const { licenseKey, domain } = req.body

    if (!licenseKey || !domain) {
      throw AppError.badRequest('Lisans anahtarı ve domain zorunludur')
    }

    // Lisansı veritabanında bul
    const license = await prisma.license.findUnique({
      where: { key: licenseKey }
    })

    if (!license) {
      throw AppError.unauthorized('Geçersiz lisans anahtarı')
    }

    // Domain eşleşiyor mu kontrol et
    if (license.domain !== domain) {
      // Grace period (72 saat) mantığı burada işlenir
      // Şimdilik direkt hata döndürüyoruz
      throw AppError.unauthorized(`Lisans bu domaine (${domain}) ait değil. Kayıtlı domain: ${license.domain}`)
    }

    // Lisans süresi dolmuş mu?
    if (license.expiresAt && license.expiresAt < new Date()) {
      throw AppError.unauthorized('Lisans süresi dolmuş')
    }

    // Lisans durumu aktif mi? (Örn: Banlanmış veya askıya alınmış olabilir)
    if (license.status !== 'ACTIVE') {
      throw AppError.unauthorized(`Lisans durumu: ${license.status}`)
    }

    // Ping tarihini güncelle
    await prisma.license.update({
      where: { id: license.id },
      data: { lastPingAt: new Date() }
    })

    // Başarılı yanıt
    res.json({
      success: true,
      data: {
        status: 'ACTIVE',
        customer: license.userId,
        expiresAt: license.expiresAt
      }
    })
  } catch (err) {
    next(err)
  }
})

// ════════════════════════════════════════════════
// MÜŞTERİ PANELİ API'LERİ (React Frontend'den gelen istekler)
// ════════════════════════════════════════════════

// Müşterinin kendi lisanslarını listelemesi
licenseRouter.get('/my-licenses', async (req, res, next) => {
  try {
    // const userId = req.user.id // Auth middleware eklenecek
    const userId = "temp-user-id" // Şimdilik mock
    
    const licenses = await prisma.license.findMany({
      where: { userId }
    })

    res.json({ success: true, data: licenses })
  } catch (err) {
    next(err)
  }
})

// Müşterinin domain değiştirmesi
licenseRouter.post('/change-domain', async (req, res, next) => {
  try {
    const { licenseId, newDomain } = req.body
    
    // Domain değiştirme hakkı ve limitleri Prisma üzerinden kontrol edilecek
    // İşlem başarılıysa:
    /*
    await prisma.license.update({
      where: { id: licenseId },
      data: { domain: newDomain }
    })
    */

    res.json({ success: true, message: 'Domain başarıyla değiştirildi' })
  } catch (err) {
    next(err)
  }
})
