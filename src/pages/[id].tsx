import { ApiContext } from "@/contexts/ApiContext";
import Link from "next/link";
import { useContext } from "react";

export default function Detail({ id }: { id: number }) {
  const { setCharacterId, selectedHero } = useContext(ApiContext);

  setCharacterId(id);

  return (
    <div className="container-bg-img">
      <div className="container">
        <div className="pt-2 text-center">
          <Link passHref legacyBehavior href="/">
            <a>Back to List</a>
          </Link>
          <div className="cards-div">
            <h1>{selectedHero?.name}</h1>
            <img
              src={
                selectedHero?.thumbnail.path +
                `/portrait_xlarge.${selectedHero?.thumbnail.extension}`
              }
              alt={selectedHero?.name}
              width={150}
              height={225}
            />
            {selectedHero?.description && (
              <p className="mt-1 px-5">{selectedHero?.description}</p>
            )}
            <h2>Series of Character</h2>
            {selectedHero?.series.items.map((item) => (
              <div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
