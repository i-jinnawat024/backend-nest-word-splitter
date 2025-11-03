export function toTitleCasePreserveNumbers(input: string): string {
  return input
    .trim()
    .split(/\s+/)
    .map((word) => {
      // ถ้าเป็นตัวเลข + ตัวอักษร เช่น "5g" -> "5G"
      if (/^\d+[a-zA-Z]+$/.test(word)) {
        const numPart = word.match(/^\d+/)?.[0] ?? ''
        const textPart = word.slice(numPart.length).toUpperCase()
        return numPart + textPart
      }
      // ถ้าเป็นคำปกติ เช่น "realme" -> "Realme"
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}
