// ═══════════════════════════════════════
// Velixo - RBAC (Rol Tabanlı Erişim Kontrolü)
// ═══════════════════════════════════════
import type { Request, Response, NextFunction } from 'express'
import { AppError } from '../lib/errors.js'

// LeaderOS birebir izin listesi
export const PERMISSIONS = {
  // Yönetim Paneli
  ADMIN_VIEW: 'admin.view',
  STATS_VIEW: 'stats.view',
  USERS_MANAGE: 'users.manage',
  ROLES_MANAGE: 'roles.manage',
  SETTINGS_MANAGE: 'settings.manage',
  API_MANAGE: 'api.manage',
  MODULES_MANAGE: 'modules.manage',
  LOGS_VIEW: 'logs.view',
  UPDATE_MANAGE: 'update.manage',

  // Tema
  THEMES_MANAGE: 'themes.manage',

  // Mağaza
  STORE_CATEGORIES_MANAGE: 'store.categories.manage',
  STORE_PRODUCTS_MANAGE: 'store.products.manage',
  ORDERS_MANAGE: 'orders.manage',
  PAYMENTS_MANAGE: 'payments.manage',
  COUPONS_MANAGE: 'coupons.manage',
  GIFT_CODES_MANAGE: 'giftcodes.manage',

  // Forum
  FORUM_CATEGORIES_MANAGE: 'forum.categories.manage',
  FORUM_TOPICS_MANAGE: 'forum.topics.manage',
  FORUM_POSTS_MANAGE: 'forum.posts.manage',

  // Blog
  BLOG_POSTS_MANAGE: 'blog.posts.manage',
  BLOG_COMMENTS_MANAGE: 'blog.comments.manage',

  // Yardım
  HELP_CATEGORIES_MANAGE: 'help.categories.manage',
  HELP_ARTICLES_MANAGE: 'help.articles.manage',

  // CMS
  PAGES_MANAGE: 'pages.manage',
  SLIDER_MANAGE: 'slider.manage',
  ANNOUNCEMENTS_MANAGE: 'announcements.manage',
  DOWNLOADS_MANAGE: 'downloads.manage',
  GAMEMODES_MANAGE: 'gamemodes.manage',

  // Lider Tabloları & Oyun
  LEADERBOARDS_MANAGE: 'leaderboards.manage',
  WHEEL_MANAGE: 'wheel.manage',
  BAZAAR_MANAGE: 'bazaar.manage',
  VOTESITES_MANAGE: 'votesites.manage',

  // Topluluk
  SUGGESTIONS_MANAGE: 'suggestions.manage',
  GOALS_MANAGE: 'goals.manage',
  GAMENIGHTS_MANAGE: 'gamenights.manage',
  FORMS_MANAGE: 'forms.manage',
  APPLICATIONS_MANAGE: 'applications.manage',

  // Destek
  TICKET_CATEGORIES_MANAGE: 'tickets.categories.manage',
  TICKETS_MANAGE_ALL: 'tickets.manage.all',
  TICKETS_MANAGE_ASSIGNED: 'tickets.manage.assigned',
  CANNED_RESPONSES_MANAGE: 'tickets.canned.manage',
} as const

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS]

// İzin kontrolü middleware'i
export function requirePermission(...requiredPermissions: Permission[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw AppError.unauthorized()
      }

      const userPermissions = req.user.permissions ?? []

      // Süper admin her şeye erişebilir
      if (userPermissions.includes('*')) {
        next()
        return
      }

      const hasPermission = requiredPermissions.every(
        (perm) => userPermissions.includes(perm)
      )

      if (!hasPermission) {
        throw AppError.forbidden('Bu işlem için yetkiniz bulunmuyor')
      }

      next()
    } catch (err) {
      next(err)
    }
  }
}

// Sadece belirli roller için erişim
export function requireRole(...roleNames: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw AppError.unauthorized()
      }

      // Basit rol kontrolü — gerçekte DB'den kontrol edilmeli
      // Şimdilik permission bazlı devam ediyoruz
      const userPermissions = req.user.permissions ?? []
      if (userPermissions.includes('*')) {
        next()
        return
      }

      // roleNames kontrolü ileride genişletilecek
      if (roleNames.length > 0 && !req.user.roleId) {
        throw AppError.forbidden()
      }

      next()
    } catch (err) {
      next(err)
    }
  }
}
