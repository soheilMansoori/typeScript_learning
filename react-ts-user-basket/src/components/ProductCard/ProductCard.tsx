import { useContext, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import swal from "sweetalert";
import BasketContext, { ProductType } from "../../contexts/BasketContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  title,
  id,
  image,
  price,
  rating,
}: ProductType): JSX.Element {
  const { addProduct } = useContext(BasketContext);
  const navigate = useNavigate();

  const addToBasketHandler = (productID: number) => {
    addProduct(productID);
    swal({
      icon: "success",
      title: "product add to basket success",
      buttons: ["open-basket", "close"],
    }).then((result) => {
      if (!result) {
        navigate("/basket");
      }
    });
  };

  return (
    <div className="card">
      <img src={image} />
      <main>
        <p>{title.slice(0, 13)}...</p>
        <div className="card-details">
          <div>
            {/* rating */}
            {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => {
              if (item <= Math.round(rating.rate)) {
                return <AiFillStar style={{ color: "orange" }} key={item} />;
              }
              return <AiOutlineStar style={{ color: "orange" }} key={item} />;
            })}
          </div>
          <p>{price}$</p>
        </div>
        <button onClick={() => addToBasketHandler(id)}>Add to Basket</button>
      </main>
    </div>
  );
}
