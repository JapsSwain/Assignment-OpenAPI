import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [AnimeModule], // AnimeModule should be added here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
