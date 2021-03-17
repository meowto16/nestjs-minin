import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

@Controller('products')
export class ProductsController {

  @Get()
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  getOne(@Param() params) {
    return 'getOne ' + params.id;
  }

  @Post()
  create(@Body() body) {

  }

  @Delete()
  remove() {

  }

  @Put()
  update() {

  }

}
