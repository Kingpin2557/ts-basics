import { Actor } from "./Actor";
import { Genre } from "./enum";

const actor = new Actor("Lode", 23);
actor.askName();
// actor.addMovie({
//   title: "Here is a movie title",
//   year: new Date(),
//   genre: Genre.Fantasy,
// });

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
  {
    title: "Nebula Drifter",
    year: new Date("2022-08-14"),
    genre: Genre.ScienceFiction,
  },
]);
