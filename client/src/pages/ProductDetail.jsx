import DishStory from "../components/DishStory";
import OrderSection from "../components/OrderSection";
import QRCodePreview from "../components/QRCodePreview";
import LiveSessionButton from "../components/LiveSessionButton";

export default function ProductDetail() {
  // You would fetch product data by ID here
  return (
    <div className="max-w-3xl mx-auto py-8">
      <DishStory />
      <QRCodePreview />
      <OrderSection />
      <LiveSessionButton />
    </div>
  );
}