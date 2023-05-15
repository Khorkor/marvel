import { IHeroDetail } from "@/components/HeroCard/interface";
import { CharacterListModel } from "@/model/Charatermodel";
import { createContext } from "react";

interface ApiContextProps {
  heroes: CharacterListModel["data"]["results"];
  pagination: number;
  totalHeroesSize: number;
  setPagination: (page: number) => void;
  isLoading: boolean;
  setCharacterId: (id: number) => void;
  characterId?: number;
  selectedHero?: IHeroDetail;
}

export const ApiContext = createContext<ApiContextProps>({
  heroes: [],
  pagination: 1,
  totalHeroesSize: 1,
  setPagination: () => {},
  isLoading: false,
  setCharacterId: () => {},
  characterId: undefined,
  selectedHero: undefined,
});
