import { ReactNode } from 'react';

interface CartProps {
  children: ReactNode;
}

function Cart({ children }: CartProps) {
  return (
    <>
      <h1>Cart</h1>
      {children}
    </>
  );
}

export default Cart;
