/**
 * 강의에서는 일반 Javascript Object를 사용했지만 실제 Entities에는 Database의 Model을 만들어야 한다.
 */
export class Movie {
  id: number;
  title: string;
  desc?: string;
  year: number;
  genres: string[];
}
