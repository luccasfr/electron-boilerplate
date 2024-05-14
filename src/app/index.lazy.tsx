import electronImage from "@/assets/electron.svg";
import reactImage from "@/assets/react.svg";
import tailwindcssImage from "@/assets/tailwindcss.svg";
import typescriptImage from "@/assets/typescript.svg";
import tanstackImage from "@/assets/tanstack.png";
import viteImage from "@/assets/vite.svg";
import shadcnuiImage from "@/assets/shadcnui.svg";
import Header from "@/components/header";
import VersionInfo from "@/components/version-info";
import { createLazyFileRoute } from "@tanstack/react-router";
import json from "../../package.json";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className="bg-background text-foreground flex flex-col gap-8 items-center 
                justify-between pb-8"
    >
      <Header />
      <VersionInfo>
        <VersionInfo.Item
          name="React"
          version={json.dependencies.react}
          img={reactImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Vite"
          version={json.devDependencies.vite}
          img={viteImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Electron"
          version={json.devDependencies.electron}
          img={electronImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="TailwindCSS"
          version={json.devDependencies.tailwindcss}
          img={tailwindcssImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Typescript"
          version={json.devDependencies.typescript}
          img={typescriptImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Tanstack Router Vite Plugin"
          version={json.devDependencies["@tanstack/router-vite-plugin"]}
          img={tanstackImage}
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="shadcn/ui"
          version={"latest"}
          img={shadcnuiImage}
        />
      </VersionInfo>
    </div>
  );
}
