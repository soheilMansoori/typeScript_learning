import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import BasketContext from "../../contexts/BasketContext";

export default function Header() {
  const { userCart } = useContext(BasketContext);
  return (
    <header>
      <Link className="logo" to="/">
        Sabzlearn Shop
      </Link>
      <Link to="/basket">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>{userCart.length}</span>
      </Link>
    </header>
  );
}
