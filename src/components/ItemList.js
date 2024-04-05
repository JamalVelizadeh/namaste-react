import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {data}
      <button
        onClick={() => {
          dispatch(addItem(data));
        }}
      >
        Add
      </button>
    </li>
  );
};

export default Itemlist;
