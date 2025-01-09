import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';

@Module({
  imports: [HttpModule], // Import HttpModule
  controllers: [AnimeController], // Ensure AnimeController is registered here
  providers: [AnimeService], // Register AnimeService
})
export class AnimeModule {}
