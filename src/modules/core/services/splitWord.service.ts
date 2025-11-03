import { Injectable } from '@nestjs/common'
import { IProducts } from 'src/modules/product/interfaces/product.interface'
import { splitDeviceModels } from 'src/common/shared/utils/split-model-by-slash.util'

@Injectable()
export class SplitWordService {
  async splitWord(data: string) {
    // return data.map((c) => splitDeviceModels(c.dpltBrand))
  }
}
