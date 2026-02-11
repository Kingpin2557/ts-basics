export const Team = class Team {
  public teamName: string;

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  score(test?: string): string {
    console.log(`made a goal ${test}`);
    return "made a goal";
  }
};
