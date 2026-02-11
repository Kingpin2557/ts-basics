export const functions = {
  runDemos: () => {
    const sayWord = (
      word = "Hello",
      ...otherStuff: [string, number]
    ): string => {
      console.log(word, otherStuff);
      return word;
    };

    sayWord("dit is een test", "test", 2);
  },
};
