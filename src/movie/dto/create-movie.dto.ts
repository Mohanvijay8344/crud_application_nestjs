import { IsString } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsString()
    year: string;

    @IsString()
    director: string;

    @IsString()
    actors: string;

    @IsString()
    runtime: string;
}
