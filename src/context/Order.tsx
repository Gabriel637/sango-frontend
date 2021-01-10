
import React, { createContext, useState, useContext } from "react";


interface Order {
  items: any,
  totalValue: number
}

interface OrderContextData {
  products: any,
  setProducts: any,
  totalPrice: number,
  setTotalPrice: any
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData);

const OrderProvider: React.FC<Order> = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  return (
    <OrderContext.Provider
      value={{
        products: items,
        setProducts: setItems,
        totalPrice: totalValue,
        setTotalPrice: setTotalValue
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
/* 
export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within a OrderProvider");
  const { order, setOrder } = context;
  return { order, setOrder };
} */

export default OrderProvider;