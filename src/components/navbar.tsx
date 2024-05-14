import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <div className="fixed w-full flex justify-between items-center border-b px-4 py-2 bg-background/80 backdrop-blur">
      <div className="flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
}
