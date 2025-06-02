export default function Checkout() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form className="flex flex-col gap-4">
        <input className="border rounded px-3 py-2" placeholder="Full Name" />
        <input className="border rounded px-3 py-2" placeholder="Address" />
        <input className="border rounded px-3 py-2" placeholder="Phone" />
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold mt-2">
          Pay Now
        </button>
      </form>
    </div>
  );
}