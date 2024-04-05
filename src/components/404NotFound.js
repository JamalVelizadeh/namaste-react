import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return <div>{error.data}</div>;
};
export default NotFound;
