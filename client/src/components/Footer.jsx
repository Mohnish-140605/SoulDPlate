export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-center py-4">
      <p className="text-yellow-700">
        © {new Date().getFullYear()} SoulDPlate. All rights reserved.
      </p>
    </footer>
  );
}