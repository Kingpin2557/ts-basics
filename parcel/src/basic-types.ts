export const basicTypes = {
  runDemos: () => {
    console.log("running the demos");

    const myName: string = "Lode";
    const isOpen: boolean = true;
    const myAge: number = 23;
    const list: number[] = [1, 2, 3];
    const tuple: [number, string, number] = [1, "2", 3];
    enum Job {
      WebDev,
      WebDesigner,
      PM,
    }

    const myProfession: Job = Job.WebDev;
    console.log(myProfession);

    const phone: any = "iPhone";
    const tablet: any = 3;

    let newName = "William";
    newName = "Shakespeare";

    let newNameTwo = newName;
    newNameTwo = "30";
  },
};
