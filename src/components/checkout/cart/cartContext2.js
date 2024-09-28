// import React, { useState, createContext, useContext }  from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [uniqueCartProducts, setUniqueCartProducts] = useState([]);

//   return (
//     <CartContext.Provider value={{ cartProducts, setCartProducts, cartTotal, setCartTotal, uniqueCartProducts, setUniqueCartProducts }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error("Something wrong with the cart context. Check with the dogs.");
//   }

//   return context;
// }

// export default CartContext;