import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schema/movie-schema';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
    constructor(@InjectModel(Movie.name) private readonly movieModel: Model<MovieDocument>) {}

    async getAllMovies(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {
      const createdMovie = new this.movieModel(createMovieDto);
      return createdMovie.save();
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true }).exec();
    }

    async delete(id: string): Promise<void> {
        const result = await this.movieModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Movie with ID ${id} not found`);
        }
    } 
}
