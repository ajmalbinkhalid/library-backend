/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: DatabaseService) {}

  create(data: {
    title: string;
    content?: string;
    published?: boolean;
    authorId?: number;
  }) {
    return this.prisma.book.create({ data });
  }

  findAll() {
    return this.prisma.book.findMany({
      include: { author: true },
    });
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  update(id: number, data: any) {
    return this.prisma.book.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id },
    });
  }
}
