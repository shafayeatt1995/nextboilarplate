export function setItem(key: string, value: string): void {
  localStorage.setItem(key, value)
}
export function getItem(key: string, defaultValue = '') {
  const item = localStorage.getItem(key)
  return item ?? defaultValue
}

export function removeItem(key: string) {
  localStorage.removeItem(key)
}

export function getQuery(url: string): Record<string, string> {
  const urlObj = new URL(url)
  const params = new URLSearchParams(urlObj.search)
  const queryObject: Record<string, string> = {}

  for (const [key, value] of Array.from(params.entries())) {
    queryObject[key] = value
  }

  return queryObject
}
