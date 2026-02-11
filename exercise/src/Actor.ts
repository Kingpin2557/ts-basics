import { Movie, Person } from "./interfaces";

export const Actor = class Actor implements Person {
  name: string;
  age?: number;
  private arrMovie: Movie[];

  constructor(name: string, age?: number, arrMovie: Movie[] = []) {
    this.name = name;
    this.age = age;
    this.arrMovie = arrMovie;
  }

  askName(): void {
    let output: string;

    output = `Hello, My name is ${this.name}`;

    if (this.age) {
      output += ` with age of ${this.age}`;
    }

    console.log(output);
  }

  addMovie(movie: Movie) {
    if (movie) {
      this.arrMovie.push(movie);
    }

    console.log(this.arrMovie);
  }

  addMovies(arrMovie: Movie[]) {
    if (arrMovie) {
      this.arrMovie.concat(arrMovie);
    }

    console.log(arrMovie);
  }
};
