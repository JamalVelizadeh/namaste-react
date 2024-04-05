import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../foogLogo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState(false);
  //? if no dependecy array => useEffect is called on every render
  //? if  dependecy is empty => useEffect is called on initial render(just once)
  //? if  dependecy is [btn] => useEffect is called every time btn is updated
  // useEffect(() => {
  //   console.log(2);
  // }, []);

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="flex justify-between align-middle shadow-lg bg-orange-600">
      <div className="flex">
        <img src={Logo} className="w-24  h-24" />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <Link to={"/"}>Online Status:{onlineStatus ? "🟢" : "🔴"}</Link>
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/ContactUs"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setBtn((prev) => !prev);
            }}
          >
            {btn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
