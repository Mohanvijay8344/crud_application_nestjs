import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://Raj:Mohan8344@cluster0.ns9ghot.mongodb.net/Movies_CRUD_App?retryWrites=true&w=majority&appName=Cluster0"
    ),
    MovieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
