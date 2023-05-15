import { useContext } from "react";
import HeroCard from "@/components/HeroCard";

import { Pagination } from "@/components/Pagination";
import { ApiContext } from "@/contexts/ApiContext";
import { IHeroCard } from "@/components/HeroCard/interface";

const Home = () => {
  const { heroes, isLoading } = useContext(ApiContext);

  return (
    <div className="container-bg-img">
      <div className="container">
        <div className="pt-2 text-center">
          <h1>Marvel Heroes</h1>
          <div className="cards-div">
            {isLoading ? (
              <div
                className="spinner-border loading-spinner"
                role="status"
              ></div>
            ) : (
              <div className="row">
                {heroes.map((hero: IHeroCard) => (
                  <div className="col-md-3 col-sm-6 col-xs-12 mt-1">
                    <HeroCard key={hero.id} {...hero} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="d-flex aligns-items-center justify-content-center mt-3">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
