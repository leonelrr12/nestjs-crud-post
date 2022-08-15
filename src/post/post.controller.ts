import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';

@ApiTags('App Finanservs')
@Controller('post')
export class PostController {

  constructor(private readonly postService: PostService) { }

  @Get()
  async getAll() {
    const posts = await this.postService.getAll();
    return { posts }
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const post = await this.postService.getById(id);
    return { post }
  }

  @Post()
  async create(@Body() dto: CreatePostDto) {
    const postNew = await this.postService.create(dto);
    return { message: 'Post created', postNew }
  }

  @Put(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditPostDto
  ) {
    const postUdt = await this.postService.edit(id, dto);
    return { message: 'Post Updated', postUdt }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const postDel = await this.postService.delete(id);
    return { message: 'Post Deleted', postDel }
  }
}
