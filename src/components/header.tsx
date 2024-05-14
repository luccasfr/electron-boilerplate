import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Title from "./title";

type HeaderLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target"
>;

function HeaderLink({ className, ...props }: HeaderLinkProps) {
  return (
    <a
      className={cn(
        "underline underline-offset-2 dark:hover:opacity-80 hover:opacity-60 transition-opacity",
        className
      )}
      target="_blank"
      {...props}
    />
  );
}

export default function Header() {
  return (
    <div className="text-center space-y-2">
      <Title>Electron App Boilerplate</Title>
      <h2 className="text-sm font-normal flex gap-2 items-center">
        <HeaderLink href="https://vitejs.dev/">Vite</HeaderLink>
        <HeaderLink href="https://react.dev/">React</HeaderLink>
        <HeaderLink href="https://tailwindcss.com/">TailwindCSS</HeaderLink>
        <HeaderLink href="https://www.typescriptlang.org/">
          Typescript
        </HeaderLink>
        <HeaderLink href="https://ui.shadcn.com/">shadcn/ui</HeaderLink>
        <HeaderLink href="https://tanstack.com/router/latest">
          TanStack Router
        </HeaderLink>
      </h2>
    </div>
  );
}
