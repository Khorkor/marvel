import { IHeroCard } from "@/components/HeroCard/interface";

export interface CharacterListModel {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<IHeroCard>;
  };
}
