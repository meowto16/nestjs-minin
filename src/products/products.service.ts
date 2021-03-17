import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductsService {
  private products = []

  getAll() {
    return this.products
  }

  getById(id: string) {
    return this.products.find(p => p.id === id)
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString()
    })
  }

  update(productDto: UpdateProductDto, id: string) {
    const idx = this.products.findIndex(p => p.id === id)
    if (idx !== -1) this.products[idx] = {
      ...this.products[idx],
      ...productDto
    }
  }

  delete(id: string) {
    const idx = this.products.findIndex(p => p.id === id)
    this.products.splice(idx, 1)
  }
}
