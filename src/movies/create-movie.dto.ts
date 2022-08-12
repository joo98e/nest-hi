import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * @description DTO(Data Transfer Object)
 * @description I로 시작한다. IIIIIIIIIIIIII
 */
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString()
  @IsOptional()
  readonly desc: string;

  /**
   * @each 요소 1개씩 모두 검사
   */
  @IsString({ each: true })
  readonly genres: string[];
}
