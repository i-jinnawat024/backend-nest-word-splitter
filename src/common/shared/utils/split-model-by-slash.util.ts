export function splitDeviceModels(input: string): string[] {
  const parts = input
    .split('/')
    .map((p) => p.trim())
    .filter(Boolean)
  if (parts.length === 0) return []

  const first = parts[0]
  const tokens = first.split(/\s+/)

  // หา token แรกที่มีตัวเลข -> prefix = คำก่อนหน้า token นั้น
  const idxWithDigit = tokens.findIndex((t) => /\d/.test(t))
  const prefixTokens =
    idxWithDigit > 0
      ? tokens.slice(0, idxWithDigit)
      : tokens.length > 1
        ? tokens.slice(0, -1)
        : tokens.slice(0, 1)

  const prefix = prefixTokens.join(' ')

  const joinWithOverlap = (lhsTokens: string[], rhsTokens: string[]) => {
    const maxK = Math.min(lhsTokens.length, rhsTokens.length)
    for (let k = maxK; k >= 1; k--) {
      const lhsSuffix = lhsTokens.slice(-k).join(' ').toLowerCase()
      const rhsPrefix = rhsTokens.slice(0, k).join(' ').toLowerCase()
      if (lhsSuffix === rhsPrefix) {
        return lhsTokens.concat(rhsTokens.slice(k)).join(' ')
      }
    }
    return lhsTokens.concat(rhsTokens).join(' ')
  }

  const clean = (text: string) =>
    text
      .replace(/\bF\s*\+\s*[BG]\b/gi, '') // ลบ F+B, F+G (ไม่สนช่องว่าง)
      .replace(/\s{2,}/g, ' ') // เก็บ spacing ให้เรียบ
      .trim()

  return parts.map((part, i) => {
    if (i === 0) return clean(part)

    const partTokens = part.split(/\s+/)
    if (part.toLowerCase().startsWith(prefix.toLowerCase())) return clean(part)

    return clean(joinWithOverlap(prefixTokens, partTokens))
  })
}
