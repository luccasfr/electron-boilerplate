import { cn } from "@/lib/utils";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export default function Title({ className, ...props }: TitleProps) {
  return (
    <h1
      className={cn("text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}
