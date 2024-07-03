import { IsString, IsOptional } from 'class-validator';

export class UpdateMovieDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    year?: string;

    @IsString()
    @IsOptional()
    director?: string;

    @IsString()
    @IsOptional()
    actors?: string;

    @IsString()
    @IsOptional()
    runtime?: string;
}
