import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schema/movie-schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Types } from 'mongoose';

@Controller('Movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    async getAllMovie() {
        return await this.movieService.getAllMovies();
    }

    @Post()
    async create(@Body() createMovieDto: CreateMovieDto) {
        return await this.movieService.create(createMovieDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ObjectId format');
        }
        return await this.movieService.update(id, updateMovieDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.movieService.delete(id);
    }
}
