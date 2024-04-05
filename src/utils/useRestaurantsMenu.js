import { useEffect, useState } from "react";
import { FOOD_API } from "./constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(FOOD_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};
export default useRestaurantsMenu;
