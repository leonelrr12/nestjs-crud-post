import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async getAll() {
    return await this.postRepository.find();
  }

  async getById(id: number) {
    const post = await this.postRepository.findOneBy({id});
    if(!post) throw new NotFoundException()
    return post
  }

  async create(dto: CreatePostDto) {
    const post = this.postRepository.create(dto as any);
    return await this.postRepository.save(post);
  }

  async edit(id: number, dto: EditPostDto) {
    const post = await this.getById(id);
    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }

  async delete(id: number) {
    return this.postRepository.delete(id);
  }
}
