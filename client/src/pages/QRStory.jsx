export default function QRStory() {
  return (
    <div className="max-w-xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Grandma's Story</h2>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/your_video_id"
        title="Grandma's Story"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="mt-4">Enjoy the story and recipe details!</p>
    </div>
  );
}