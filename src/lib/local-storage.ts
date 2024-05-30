function getItem(key: string) {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || ''
  }
  return null
}

function setItem({ key, value }: { key: string; value: any }) {
  localStorage.setItem(key, value)
}

function removeItem({ key }: { key: string }) {
  localStorage.removeItem(key)
}

export { getItem, setItem, removeItem }
