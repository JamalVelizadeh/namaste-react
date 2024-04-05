import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <ul key={"Camal"}>
      {data.map((eachFood, index) => {
        return (
          <>
            <li key={index}>
              {index + 1}
              {eachFood}
              <button
                onClick={() => {
                  dispatch(removeItem());
                }}
              >
                Remove
              </button>
            </li>
          </>
        );
      })}
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Remove all
      </button>
    </ul>
  );
};
export default Cart;
