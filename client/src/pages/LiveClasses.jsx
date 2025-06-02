import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const grandmaVideos = [
  "https://www.youtube.com/embed/GAtaTEcP_W8",
];

const randomVideo = grandmaVideos[Math.floor(Math.random() * grandmaVideos.length)];

export default function LiveClasses() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('/api/live-sessions')
      .then(res => {
        setSessions(res.data || []);
        setLoading(false);
      })
      .catch(err => {
        setMsg('Could not load live sessions.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-400 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6" style={{ fontFamily: "'Pacifico', cursive" }}>
        Live Cooking Classes with Grandma
      </h1>
      <div className="w-full max-w-2xl aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border-4 border-yellow-300 bg-black">
        <iframe
          width="100%"
          height="100%"
          src={randomVideo}
          title="Grandma Cooking Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <Link
        to="/book-live-class"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow transition"
      >
        Book a Live Session with Our Grannys
      </Link>
      <div className="max-w-5xl mx-auto py-8 px-4 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-700">Upcoming Live Cooking Sessions</h2>
        {loading ? (
          <div className="flex justify-center items-center h-32">Loading...</div>
        ) : msg ? (
          <div className="text-center text-red-600">{msg}</div>
        ) : sessions.length === 0 ? (
          <div className="text-center text-gray-500">No live sessions scheduled yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map(session => (
              <div
                key={session._id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center"
              >
                <img
                  src={`https://source.unsplash.com/400x250/?cooking,grandma,food&sig=${session._id}`}
                  alt="Live Cooking"
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <div className="font-semibold text-lg text-yellow-800 mb-2">{session.title}</div>
                <div className="text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {new Date(session.date).toLocaleString()}
                </div>
                <a
                  href={session.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200"
                >
                  Join Live Session
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
