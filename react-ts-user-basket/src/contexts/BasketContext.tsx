import React, { createContext, useEffect, useState } from "react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
};

// context type
type BasketContextType = {
  userCart: ProductType[];
  shop: ProductType[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
};

// default context
const BasketContext = createContext({} as BasketContextType);

// props type
type BasketContextProviderType = {
  children: React.ReactNode;
};

// provider
function BasketContextProvider({
  children,
}: BasketContextProviderType): JSX.Element {
  const [userCart, setUserCart] = useState<ProductType[]>([]);
  const [shop, setShop] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data))
      .catch((error) => console.log(error.message));
  }, []);

  // add to basket
  const addProduct = (productID: number): void => {
    setUserCart((prevState) => {
      // check is product exist in basket
      const isProductExistInBasket = prevState.find(
        (product) => product.id === productID
      );

      if (isProductExistInBasket) {
        // update product count
        return prevState.map((product) => {
          if (product.id === productID) {
            return { ...product, count: product.count + 1 };
          }
          return product;
        });
      } else {
        // add new product
        const findMainProductFromShop = shop.find(
          (product) => product.id === productID
        ) as ProductType;
        return [...prevState, { ...findMainProductFromShop, count: 1 }];
      }
    });
  };

  // remove from basket
  const removeProduct = (productID: number): void => {
    setUserCart((prevState) =>
      prevState.filter((product) => product.id !== productID)
    );
  };

  // clear userBasket
  const removeAll = (): void => setUserCart([]);

  return (
    <BasketContext.Provider
      value={{ userCart, shop, addProduct, removeProduct, removeAll }}
    >
      {children}
    </BasketContext.Provider>
  );
}

// export modules
export { BasketContextProvider };
export default BasketContext;
