import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import WithPromotedLabel from "./WithPromotedLabel";

const Body = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [searchText, setSearchText] = useState("");

  const PromotedCart = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    async function fetchData() {
      let resolve = await fetch("https://corsproxy.io/?" + RESTAURANTS_URL);
      let response = await resolve.json();

      setData(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilter(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Oflline</h1>;

  return data.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              let filtered = data.filter((text) => {
                return text?.info?.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setSearchText("");
              setFilter(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={() => {
              setData(data.filter((res) => res.info.avgRating > 4.5));
            }}
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filter.map((eachData) => {
          return (
            <Link to={"restaurants/" + eachData.info.id} key={eachData.info.id}>
              {eachData.info.avgRating >= 4.4 ? (
                <PromotedCart resData={eachData} />
              ) : (
                <RestaurantCard resData={eachData} />
              )}
              {/* <RestaurantCard resData={eachData} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
