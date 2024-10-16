import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home/Home";

type RoutesType = {
  path: string;
  element: JSX.Element;
};

const routes: RoutesType[] = [
  { path: "/", element: <Home /> },
  { path: "/basket", element: <Basket /> },
];

export default routes;
