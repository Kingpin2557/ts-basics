import { Team } from "./team";
import { Job, Types } from "./enum";
import { Person } from "./interfaces";

export const basicTypes = {
  runDemos: () => {
    console.log("running the demos");

    const myName: string = "Lode";
    const isOpen: boolean = true;
    const myAge: number = 23;
    const list: number[] = [1, 2, 3];
    const tuple: [number, string, number] = [1, "2", 3];

    const myProfession: Job = Job.WebDev;
    console.log(myProfession);

    const phone: any = "iPhone";
    const tablet: any = 3;

    let newName = "William";
    newName = "Shakespeare";

    let newNameTwo = newName;
    newNameTwo = "30";

    let myOtherName: string | number | boolean = "string";
    myOtherName = 6;
    myOtherName = true;

    let myOtherNewName = myOtherName;
    myOtherNewName = true;

    let dog: string = "Sammy";
    dog = "Lucie";

    const sayName = (person: Person): Person => {
      const { name, age } = person;
      const out = `Your name is ${name} and age is ${age}`;
      console.log(out);
      return person;
    };

    sayName({
      name: "Tim",
    });

    interface OtherPerson extends Person {
      description: string;
    }

    interface OtherPerson {
      isHungry: boolean;
      doSomething: (name: string) => void;
    }
    const otherPerson: OtherPerson = {
      description: "my desc",
      name: "Lode",
      isHungry: true,
      doSomething: (name: string) => {
        console.log("test");
      },
    };

    //types

    type Hungry = boolean;
    type Greeting = (name: string) => void;

    type NewPerson = {
      name: string;
      age: number;
      isHungry: boolean;
    };

    type Hero = {
      isAHero: boolean;
    };

    type HeroPerson = NewPerson | Hero;

    const heroPerson: HeroPerson = {
      isAHero: true,
      name: "test",
      age: 15,
    };

    const redDevils = new Team("Red Devils");
    console.log(redDevils.teamName);
    redDevils.score();

    console.log(Types.Quiz);

    const createContent = (type: Types) => {
      if (type === Types.Video) {
        console.log("Create a video");
      }
    };

    createContent(Types.Video);

    const outputInput = <TEST>(name: TEST): TEST => {
      console.log(name);
      return name;
    };

    type Animal = string;
    outputInput<Animal>("lion");
  },
};
