import { Actor } from "./Actor";
import { Genre } from "./enum";

const actor = new Actor("Random", "Name", 23);
actor.logActor();

const actorName = actor.askActor();
console.log(actorName);

const actorMovies = actor.askMovies();
console.log(actorMovies);

actor.addMovie({
  title: "Here is a movie title",
  year: new Date(),
  genre: Genre.Fantasy,
});
actor.addMovies([
  {
    title: "The Midnight Echo",
    year: new Date("2024-10-31"),
    genre: Genre.Horror,
  },
  {
    title: "Beyond the Event Horizon",
    year: new Date("2026-05-15"),
    genre: Genre.ScienceFiction,
  },
  {
    title: "The Last Dragon Smith",
    year: new Date("2023-12-20"),
    genre: Genre.Fantasy,
  },
  {
    title: "Static on the Wire",
    year: new Date("2025-02-11"),
    genre: Genre.Horror,
  },
]);

actor.editMovie(2, {
  title: "Random title",
  year: new Date("2025-02-11"),
  genre: Genre.Horror,
});
