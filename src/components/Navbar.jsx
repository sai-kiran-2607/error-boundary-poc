import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex gap-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/posts" className="hover:text-blue-400">Posts</Link>
    </nav>
  );
}
