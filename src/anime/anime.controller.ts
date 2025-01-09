// anime.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  // Route to search anime by query (e.g. "Naruto")
  @Get('search')
  async searchAnime(@Query('query') query: string) {
    return this.animeService.searchAnime(query);
  }
}
