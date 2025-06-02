export default function CartItem({ name, price, qty }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>{name} x {qty}</div>
      <div>{price * qty} ₹</div>
    </div>
  );
}