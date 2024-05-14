import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type VersionInfoProps = React.HTMLAttributes<HTMLDivElement>;

type VersionInfoItemProps = {
  name: string;
  version: string;
  img?: string;
  href: string;
};

function VersionInfoSeparator() {
  return <Separator className="w-full" />;
}

function VersionInfoItem({ name, version, img, href }: VersionInfoItemProps) {
  return (
    <div className="flex justify-between flex-wrap border-slate-700 text-sm">
      <a
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        href={href}
        target="_blank"
      >
        {img && <img src={img} alt="logo" className="w-5 h-5" />}
        <p className="">{name}</p>
      </a>
      <p className="font-mono">{version.replace(/[^A-Za-z\s:0-9.]+/, "")}</p>
    </div>
  );
}

export default function VersionInfo({
  children,
  className,
  ...props
}: VersionInfoProps) {
  return (
    <Card className={cn("w-1/2", className)} {...props}>
      <CardHeader>
        <CardTitle>Technologies</CardTitle>
        <CardDescription>
          The following technologies are used in this project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
}

VersionInfo.Item = VersionInfoItem;
VersionInfo.Separator = VersionInfoSeparator;
