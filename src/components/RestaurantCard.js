import { useContext, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

export const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-blue-300 hover:bg-green-700 text-white">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{resData.info.name}</h3>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
