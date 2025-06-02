import { useState } from "react";

export default function CurrentLocationButton() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setError("");
      },
      () => setError("Unable to retrieve your location.")
    );
  };

  return (
    <div>
      <button
        onClick={handleGetLocation}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Get Current Location
      </button>
      {location && (
        <p className="mt-2 text-yellow-700">
          Latitude: {location.lat}, Longitude: {location.lng}
        </p>
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}