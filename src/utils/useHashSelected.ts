import { useEffect, useMemo, useState } from 'react'

export const useHashSelected = (targetHash?: string) => {
  const [hash, setHash] = useState<string>()

  const updateHash = () => setHash(getHash())

  useEffect(() => {
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => {
      window.removeEventListener('hashchange', updateHash)
    }
  }, [])

  return useMemo(() => {
    if (!targetHash) {
      return false
    }

    const firstPart = hash?.split('__')[0]
    const result = '#' + targetHash === firstPart
    return result
  }, [hash, targetHash])
}

export const getHash = (): string => {
  const { hash } = window.location
  if (hash) {
    return hash
  }
  return ''
}
