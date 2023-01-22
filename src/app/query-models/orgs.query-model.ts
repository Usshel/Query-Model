export interface OrgsQueryModel {
  readonly name: string;
  readonly teams: {
    name: string;
    members: {
      avatarUrl: string;
    }[]
  }[];
}
