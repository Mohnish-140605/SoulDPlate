import GrandmaBio from "../components/GrandmaBio";
import GrandmaDishes from "../components/GrandmaDishes";
import LiveSessionsGallery from "../components/LiveSessionsGallery";

export default function GrandmaProfile() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <GrandmaBio />
      <GrandmaDishes />
      <LiveSessionsGallery />
    </div>
  );
}