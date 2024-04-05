import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import ShimmerUI from "./ShimmerUI";
import Accordion from "./ItemList";
import Itemlist from "./ItemList";
import { useState } from "react";

const RestourantMenuPage = () => {
  const [accordion, setAccordion] = useState(true);
  const { resId } = useParams();
  const menu = useRestaurantsMenu(resId);

  if (menu === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info;
  //   json?.data?.cards[2]?.card?.card?.info
  const { itemCards } =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div
        className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg flex justify-between cursor-pointer"
        onClick={() => {
          setAccordion((prev) => !prev);
        }}
      >
        <span>Menu</span>
        <span>{accordion ? "⬇️" : "⬆️"}</span>
      </div>
      <ul>
        {itemCards?.map((each) => {
          return accordion ? (
            <Itemlist key={each.card.info.id} data={each?.card?.info?.name} />
          ) : null;
        })}
      </ul>
    </div>
  );
};
export default RestourantMenuPage;
