import React, { useState, createContext, useContext }  from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, cartTotal, setCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;

// export const Cart = () => {
//   const { cartProducts, cartTotal } = useCart();

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <ul>
//         {cartProducts.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: {cartTotal}</h3>
//     </div>
//   );
// }
