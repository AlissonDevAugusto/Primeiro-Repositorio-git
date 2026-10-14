import { useContext, createContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  
  const putProductInCart = (product) => {
    /* colocar no carrinho */
    const cartIndex = cartProducts.findIndex((pdt) => pdt.id === product.id);
    
    let newProductsInCart = [];
    if (cartIndex >= 0) {
      newProductsInCart = cartProducts;

      newProductsInCart[cartIndex].quantity =
        newProductsInCart[cartIndex].quantity + 1;

      setCartProducts(newProductsInCart);
    } else {
      product.quantity = 1;
      newProductsInCart = [...cartProducts, product];
      setCartProducts(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  };

  const updateLocalStorage = (product) => {
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(product));
  };

  const clearCart = () => {
    /* finalizou a compra, limpar */
    setCartProducts([]);

    updateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    /* deleta o produto */
    const newCart = cartProducts.filter((pdt) => pdt.id !== productId);
    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const increaseProduct = (productId) => {
    /* adiciona a quantidade */
    const newCart = cartProducts.map((pdt) => {
      return pdt.id === productId
        ? { ...pdt, quantity: pdt.quantity + 1 }
        : pdt;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseProduct = (productId) => {
    /* diminuir a quantidade */
    const cartIndex = cartProducts.findIndex((pdt) => pdt.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((pdt) => {
        return pdt.id === productId
          ? { ...pdt, quantity: pdt.quantity - 1 }
          : pdt;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem('devburguer:cartInfo');

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  /* validaçao do contexto */
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context');
  }
  return context;
};
