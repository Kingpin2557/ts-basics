import { Genre } from "./enum";

export interface Person {
  firstname: string;
  lastname: string;
  age?: number;
}

export interface Movie {
  id?: number;
  title: string;
  year: Date;
  genre: Genre;
}
