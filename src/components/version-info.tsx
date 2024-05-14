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
};

function VersionInfoSeparator() {
  return <Separator className="w-full" />;
}

function VersionInfoItem({ name, version, img }: VersionInfoItemProps) {
  return (
    <div className="flex justify-between flex-wrap border-slate-700">
      <div className="flex items-center gap-1 lg:gap-3 ">
        {img && <img src={img} alt="logo" className="w-4 h-4 lg:w-7 lg:h-7" />}
        <p className="lg:text-lg">{name}</p>
      </div>
      <p className="font-mono lg:text-xl">
        {version.replace(/[^A-Za-z\s:0-9.]+/, "")}
      </p>
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
        <CardTitle>Versões</CardTitle>
        <CardDescription>
          Confira as versões e tecnologias utilizadas no boilerplate.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
}

VersionInfo.Item = VersionInfoItem;
VersionInfo.Separator = VersionInfoSeparator;
