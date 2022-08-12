import { CreateMovieDto } from './create-movie.dto';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';

/**
 * Controller의 인수로 오는 것은 API의 Entry Point가 된다.
 */
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  /**
   * 전체 영화 리스트
   * @returns {Movie | Movie[]}
   */
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  /**
   * @description 영화 검색, condition
   * @param condition condition
   * @returns
   */
  @Get('search')
  search(@Query() condition: any) {
    return {
      ok: true,
      condition,
      message: 'searching...',
    };
  }

  /**
   * @param movieData
   * @param query
   * @returns
   */
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  /**
   * @description Nest js에서는 내가 무언가가 필요하다면, 데코레이터 Param을 통해서 요청해야 한다.
   * @param {number | string} id url에 있는 id이다.
   * @returns
   */
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  /**
   * @param movieId
   * @returns
   */
  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  /**
   * @param movieId
   * @returns
   */
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: any) {
    return this.moviesService.update(movieId, updateData);
  }
}
