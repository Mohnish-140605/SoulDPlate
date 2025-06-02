const steps = [
  { icon: "🛒", label: "Order" },
  { icon: "📱", label: "Scan QR" },
  { icon: "🎤", label: "Hear the Story" },
];
export default function HowItWorks() {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="flex justify-center gap-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{step.icon}</div>
            <div className="font-semibold">{step.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}