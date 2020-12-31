import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly courseName: string;
  @IsString()
  readonly courseType: string;
  @IsString()
  readonly author: string;
  @IsString()
  readonly comments: string;

  /** the below IsString is for objects like [] 
  @IsString({each:true})*/
}
