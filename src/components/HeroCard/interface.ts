export interface IHeroCard {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IHeroDetail {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  series: {
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
  };
}
