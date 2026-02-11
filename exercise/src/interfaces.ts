import { Genre } from "./enum";

export interface Person {
  name: string;
  age?: number;
}

export interface Movie {
  title: string;
  year: Date;
  genre: Genre;
}
