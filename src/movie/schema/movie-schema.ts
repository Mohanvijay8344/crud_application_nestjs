import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({ collection: 'Movies Api' })
export class Movie {
    @Prop()
    title: string;

    @Prop()
    year: string;

    @Prop()
    director: string;

    @Prop()
    actors: string;

    @Prop()
    runtime: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie).set('versionKey', false);
