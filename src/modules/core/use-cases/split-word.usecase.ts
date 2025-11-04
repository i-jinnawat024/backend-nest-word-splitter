import { Injectable, Logger } from '@nestjs/common'
import { SplitWordService } from '../services/splitWord.service'
import { IProducts } from 'src/modules/product/interfaces/product.interface'
import { CustomProductManualRepository } from '../repositories/custom-product-manual.repository'
import { splitDeviceModels } from 'src/common/shared/utils/split-model-by-slash.util'
import { toTitleCasePreserveNumbers } from 'src/common/shared/utils/normalize-device-model.util'
import { removeDuplicateBrand } from 'src/common/shared/utils/remove-duplicate-brand.util'
import { removeMultipleBrands } from 'src/common/shared/utils/remove-multiple-brands.util'
import { BRANDS } from '../constants/brands.constant'

@Injectable()
export class SplitWordUseCase {
  private readonly logger = new Logger(SplitWordUseCase.name)
  constructor(
    private splitWordService: SplitWordService,
    private customProductManualRepo: CustomProductManualRepository
  ) {}

  private normalizeDeviceModel(input: string): string {
    return toTitleCasePreserveNumbers(removeDuplicateBrand(removeMultipleBrands(input)))
  }

  private canonicalKey(name: string, opts?: { stripLeadingZeros?: boolean }): string {
    // 1) lowercase + trim
    let s = name.toLowerCase().trim()

    // 2) ตัดแบรนด์ต้นประโยค (อาจมีหลายคำติดกัน เช่น "redmi vivo y21t")
    const toks = s.split(/\s+/)
    while (toks.length && BRANDS.includes(toks[0] as any)) toks.shift()
    s = toks.join(' ')

    // 3) ลบตัวคั่นทั้งหมด (ช่องว่าง, -, _, /, ., (), +) -> รวมเลขกับตัวอักษรติดกัน
    s = s.replace(/[\s_\-./()+]+/g, '')

    // 4) ออปชัน: ตัดศูนย์นำหน้าหลังตัวอักษร (เช่น a05s -> a5s)
    if (opts?.stripLeadingZeros) {
      s = s.replace(/([a-z])0+(\d)/g, '$1$2')
    }

    return s
  }
  private async getCustomWord() {
    const rows = await this.customProductManualRepo.findAll()
    const map = new Map<string, string[]>()
    for (const r of rows) {
      if (!map.has(r.itemNumber)) {
        map.set(r.itemNumber, [])
      }
      map.get(r.itemNumber)!.push(r.customModel)
    }
    return Array.from(map, ([itemNumber, customModel]) => ({ itemNumber, customModel }))
  }
  async execute(data: IProducts[] | string) {
    const customWord = await this.getCustomWord()
    if (typeof data === 'string') return splitDeviceModels(data)
    return {
      result: data.map((c) => {
        const customModelOriginal = splitDeviceModels(c.dpltBrand)

        const norm =
          customWord
            .find((m) => m.itemNumber === c.itemNumber)
            ?.customModel.map((m) => this.normalizeDeviceModel(m)) ?? []

        // รวมสองแหล่ง (ให้ norm มาก่อนถ้าอยากให้สะกดตาม normalize ชนะ)
        const merged = [...norm, ...customModelOriginal]

        const seen = new Map<string, string>() // key -> original kept
        for (const name of merged) {
          const key = this.canonicalKey(name, { stripLeadingZeros: true }) // ปรับ true/false ตามนโยบาย
          if (!key) continue
          if (!seen.has(key)) seen.set(key, name) // เก็บรูปสะกดตัวแรกที่พบ
        }

        return {
          ...c,
          customModelOriginals: Array.from(seen.values()),
        }
      }),
    }
  }
}
