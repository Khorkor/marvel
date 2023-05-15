import Link from "next/link";
import { IHeroCard } from "./interface";

const HeroCard = (props: IHeroCard) => {
  return (
    <div className="p-1 rounded card h-100">
      <Link passHref legacyBehavior href={`/${props.id}`}>
        <a className="flex-column text-center">
          <img
            src={
              props.thumbnail.path +
              `/portrait_xlarge.${props.thumbnail.extension}`
            }
            alt={props.name}
            width={150}
            height={225}
          />
          <div className="mt-1">{props.name}</div>
        </a>
      </Link>
    </div>
  );
};

export default HeroCard;
