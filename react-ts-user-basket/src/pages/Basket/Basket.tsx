import { useContext } from "react";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import BasketContext from "../../contexts/BasketContext";
import "./Basket.css";
import swal from "sweetalert";

export default function Basket() {
  const { userCart, removeProduct, removeAll } = useContext(BasketContext);
  //
  const removeAllHandler = () => {
    swal({
      title: "are you shure to empty basket",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        removeAll();
      }
    });
  };
  // removeProductHandler
  const removeProductHandler = (productID: number) => {
    swal({
      title: "are you shure to delete product",
      icon: "error",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        removeProduct(productID);
      }
    });
  };
  return (
    <>
      {userCart.length ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={removeAllHandler}>
              Remove All Products <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {userCart.map(({ id, image, rating, title, price, count }) => (
              <div className="card" key={crypto.randomUUID()}>
                <img src={image} alt="" />
                <main>
                  <p>{title.slice(0, 13)}...</p>
                  <div className="card-details">
                    <div>
                      {/* rating */}
                      {Array.from({ length: 5 }, (_, index) => index + 1).map(
                        (item) => {
                          if (item <= Math.round(rating.rate)) {
                            return (
                              <AiFillStar
                                style={{ color: "orange" }}
                                key={item}
                              />
                            );
                          }
                          return (
                            <AiOutlineStar
                              style={{ color: "orange" }}
                              key={item}
                            />
                          );
                        }
                      )}
                    </div>
                    <p>{price}$</p>
                  </div>
                  <div className="product-count">
                    <p>count:{count}</p>
                  </div>
                  <button onClick={() => removeProductHandler(id)}>
                    Remove From Basket
                  </button>
                </main>
              </div>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
