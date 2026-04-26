// ═══════════════════════════════════════
// Velixo - Frontend API İstemcisi
// ═══════════════════════════════════════

const API_BASE = '/api'

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    message: string
    code: string
  }
  meta?: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// Token yönetimi
let accessToken: string | null = null

export function setAccessToken(token: string | null): void {
  accessToken = token
  if (token) {
    localStorage.setItem('velixo_token', token)
  } else {
    localStorage.removeItem('velixo_token')
  }
}

export function getAccessToken(): string | null {
  if (!accessToken) {
    accessToken = localStorage.getItem('velixo_token')
  }
  return accessToken
}

// Fetch wrapper
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getAccessToken()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers ? Object.fromEntries(
      Object.entries(options.headers)
    ) : {}),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include',
    })

    const data: ApiResponse<T> = await response.json()

    if (!response.ok) {
      // Token expired — refresh dene
      if (response.status === 401 && token) {
        const refreshed = await refreshToken()
        if (refreshed) {
          return request<T>(endpoint, options)
        }
        // Refresh de başarısız — logout
        setAccessToken(null)
        window.location.href = '/login'
      }
      return data
    }

    return data
  } catch (err) {
    return {
      success: false,
      error: {
        message: err instanceof Error ? err.message : 'Bağlantı hatası',
        code: 'NETWORK_ERROR',
      },
    }
  }
}

// Token yenileme
async function refreshToken(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    })
    if (!res.ok) return false
    const data = await res.json()
    if (data.data?.accessToken) {
      setAccessToken(data.data.accessToken)
      return true
    }
    return false
  } catch {
    return false
  }
}

// HTTP metodları
export const api = {
  get: <T>(url: string) => request<T>(url, { method: 'GET' }),

  post: <T>(url: string, body?: unknown) =>
    request<T>(url, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(url: string, body?: unknown) =>
    request<T>(url, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T>(url: string, body?: unknown) =>
    request<T>(url, {
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(url: string) => request<T>(url, { method: 'DELETE' }),

  // Dosya yükleme
  upload: <T>(url: string, formData: FormData) =>
    request<T>(url, {
      method: 'POST',
      body: formData,
      headers: {}, // Content-Type otomatik ayarlanacak
    }),
}
