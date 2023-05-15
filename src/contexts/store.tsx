import React, { useState, useEffect, FC, useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import { CharacterListModel } from "@/model/Charatermodel";
import md5 from "js-md5";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY;

const ts = Date.now();

const Store: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroes, setHeroes] = useState<CharacterListModel["data"]["results"]>(
    []
  );
  const [pagination, setPagination] = useState<number>(1);
  const [totalHeroesSize, setTotalHeroesSize] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [characterId, setCharacterId] = useState<number | undefined>();
  const [selectedHero, setSelectedHero] = useState();

  const hashList = `ts=${ts}&apikey=${publicKey}&limit=10&offset=${
    pagination * 10 - 10
  }&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;

  const hash = `ts=${ts}&apikey=${publicKey}&hash=${md5(
    `${ts}${privateKey}${publicKey}`
  )}`;

  useEffect(() => {
    axios
      .get<CharacterListModel>(`${API_URL}/characters?${hashList}`)
      .then((result) => {
        setHeroes(result.data.data.results);
        setTotalHeroesSize(result.data.data.total);
        setIsLoading(false);
      });
  }, [pagination]);

  useEffect(() => {
    if (characterId) {
      axios
        .get(`${API_URL}/characters/${characterId}?${hash}`)
        .then((results) => {
          setSelectedHero(results.data.data.results[0]);
        });
    }
  }, [characterId]);

  return (
    <ApiContext.Provider
      value={{
        heroes,
        pagination,
        totalHeroesSize,
        setPagination,
        isLoading,
        setCharacterId,
        characterId,
        selectedHero,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export default Store;
