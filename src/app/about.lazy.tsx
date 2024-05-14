import Title from "@/components/title";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="space-y-2 text-sm">
      <Title>About</Title>
      <p>
        Welcome to about page, this is a lazy loaded component, with file-based
        router, provided by{" "}
        <span className="font-mono bg-secondary text-secondary-foreground px-1">
          tanstack/react-router
        </span>
        .
      </p>
    </div>
  );
}
