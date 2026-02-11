import { Person } from "./interfaces";

export const Actor = class Actor implements Person {
  name: string;
  age?: number;

  constructor(name: string) {
    this.name = name;
  }
};
