import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req, Res
} from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('products')
export class ProductsController {

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): String {
  //   res.status(201).end('Bye')
  //   return 'getAll'
  // }

  @Get()
  getAll(): String {
    return 'getAll'
  }

  @Get(':id')
  getOne(@Param() params) {
    return 'getOne ' + params.id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control','none')
  create(@Body() createProductDto: CreateProductDto) {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id
  }

}
