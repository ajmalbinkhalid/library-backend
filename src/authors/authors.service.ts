import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: DatabaseService) {}

  create(data: { name: string; bio?: string }) {
    return this.prisma.author.create({ data });
  }

  findAll() {
    return this.prisma.author.findMany({
      include: { books: true },
    });
  }

  async findOne(id: number) {
    const author = await this.prisma.author.findUnique({
      where: { id },
      include: { books: true },
    });
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  update(id: number, data: { name?: string; bio?: string }) {
    return this.prisma.author.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.author.delete({
      where: { id },
    });
  }
}
