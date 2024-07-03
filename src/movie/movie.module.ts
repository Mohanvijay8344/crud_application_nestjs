import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schema/movie-schema';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema, collection: 'Movies Api' }])
    ],
    providers: [MovieService],
    controllers: [MovieController]
})
export class MovieModule {}
