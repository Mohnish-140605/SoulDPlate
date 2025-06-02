import React, { useState } from "react";
import axios from "axios";

export default function RecommendationForm() {
  const [food, setFood] = useState("");
  const [type, setType] = useState("pickle");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecommend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    let prompt = "";
    if (type === "pickle") {
      prompt = `Suggest a pickle that would go well with ${food}. Give a short reason.`;
    } else {
      prompt = `Suggest a masala that would be suitable for making ${food}. Give a short reason.`;
    }
    try {
      const res = await axios.post("/api/ai/recommend", { input: prompt });
      setResult(
        res.data[0]?.generated_text ||
        res.data.generated_text ||
        JSON.stringify(res.data)
      );
    } catch (err) {
      setResult("Sorry, could not get a recommendation.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-yellow-700">Get Food Recommendations</h2>
      <form onSubmit={handleRecommend} className="flex flex-col gap-4">
        <label>
          What food do you like?
          <input
            type="text"
            className="border rounded px-3 py-2 w-full mt-1"
            value={food}
            onChange={e => setFood(e.target.value)}
            required
            placeholder="e.g. Biryani, Dosa, Rice"
          />
        </label>
        <label>
          What do you want a recommendation for?
          <select
            className="border rounded px-3 py-2 w-full mt-1"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="pickle">Pickle</option>
            <option value="masala">Masala</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-full shadow transition"
          disabled={loading}
        >
          {loading ? "Getting Recommendation..." : "Get Recommendation"}
        </button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <strong>Recommendation:</strong>
          <div className="mt-2">{result}</div>
        </div>
      )}
    </div>
  );
}