export function removeMultipleBrands(input: string): string {
  const BRANDS = [
    'apple',
    'iphone',
    'ipad',
    'samsung',
    'oppo',
    'vivo',
    'realme',
    'xiaomi',
    'redmi',
    'huawei',
    'oneplus',
    'infinix',
    'tecno',
  ]

  const tokens = input.trim().split(/\s+/)
  if (tokens.length === 0) return input.trim()

  // ตรวจว่าแต่ละคำเป็น brand ไหม
  const brandTokens = tokens.filter((t) => BRANDS.includes(t.toLowerCase()))

  // ถ้ามีหลาย brand → เลือก brand สุดท้ายเป็นหลัก
  if (brandTokens.length > 1) {
    const mainBrand = brandTokens[brandTokens.length - 1].toLowerCase()
    const startIndex = tokens.findIndex((t) => t.toLowerCase() === mainBrand)
    return tokens.slice(startIndex).join(' ')
  }

  return input
}
