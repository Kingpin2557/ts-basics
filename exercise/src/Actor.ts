import { Movie, Person } from "./interfaces";

export const Actor = class Actor implements Person {
  firstname: string;
  lastname: string;
  age?: number;
  private arrMovie: Movie[];

  constructor(
    firstname: string,
    lastname: string,
    age?: number,
    arrMovie: Movie[] = [],
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.arrMovie = arrMovie;
  }

  private createIds(offset = 0): number {
    return this.arrMovie.length + offset + 1;
  }

  askActor(): Person {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
    };
  }
  askMovies(): { arrMovies: Movie[] } {
    return {
      arrMovies: this.arrMovie,
    };
  }
  editMovie(id: number, movie: Movie): void {
    this.arrMovie = this.arrMovie.map((item) => {
      if (item.id === id) {
        return { ...movie, id };
      }
      return item;
    });

    console.log("Updated Array:", this.arrMovie);
  }
  addMovie(movie: Movie): void {
    if (movie) {
      this.arrMovie.push({
        id: this.createIds(),
        ...movie,
      });
    }
  }
  addMovies(arrMovie: Movie[]): void {
    if (arrMovie) {
      const preparedMovies = arrMovie.map((movie, index) => {
        return {
          id: this.createIds(index),
          ...movie,
        };
      });
      this.arrMovie.push(...preparedMovies);
    }
  }
  logActor(): void {
    console.log("Full Actor Object:", this);
  }
};
