export default function Sessions() {
  // Example sessions
  const sessions = [
    { dish: "Mango Pickle", grandma: "Savitri", date: "2025-06-10", time: "5:00 PM" },
    // Add more...
  ];
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Live Cooking Sessions</h2>
      <ul>
        {sessions.map((s, i) => (
          <li key={i} className="border-b py-3 flex justify-between items-center">
            <div>
              <div className="font-bold">{s.dish}</div>
              <div className="text-sm text-gray-500">by {s.grandma} Ji</div>
              <div className="text-xs">{s.date} at {s.time}</div>
            </div>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-full font-bold">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}