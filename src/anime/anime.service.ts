import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AnimeService {
  constructor(private readonly httpService: HttpService) {}

  // Fetch top anime
  async fetchTopAnime(): Promise<any> {
    const url = `https://api.jikan.moe/v4/top/anime`;

    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching top anime: ${error.message}`);
    }
  }

  // Search for anime
  async searchAnime(query: string): Promise<any> {
    const url = `https://api.jikan.moe/v4/anime`;

    try {
      const response = await lastValueFrom(
        this.httpService.get(url, { params: { q: query } }),
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error searching for anime: ${error.message}`);
    }
  }
}
