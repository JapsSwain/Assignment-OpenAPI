// anime.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  // SEARCH SESSION  http://localhost:3000/anime/search?query=Naruto
  @Get('search')
  async searchAnime(@Query('query') query: string) {
    return this.animeService.searchAnime(query);
  }
}
