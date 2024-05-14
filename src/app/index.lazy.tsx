import electronImage from "@/assets/electron.svg";
import reactImage from "@/assets/react.svg";
import shadcnuiImage from "@/assets/shadcnui.svg";
import tailwindcssImage from "@/assets/tailwindcss.svg";
import tanstackImage from "@/assets/tanstack.png";
import typescriptImage from "@/assets/typescript.svg";
import viteImage from "@/assets/vite.svg";
import Title from "@/components/title";
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
      <Title>Electron App Boilerplate</Title>
      <VersionInfo>
        <VersionInfo.Item
          name="Vite"
          version={json.devDependencies.vite}
          img={viteImage}
          href="https://vitejs.dev/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="React"
          version={json.dependencies.react}
          img={reactImage}
          href="https://react.dev/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="TailwindCSS"
          version={json.devDependencies.tailwindcss}
          img={tailwindcssImage}
          href="https://tailwindcss.com/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Electron"
          version={json.devDependencies.electron}
          img={electronImage}
          href="https://www.electronforge.io/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Typescript"
          version={json.devDependencies.typescript}
          img={typescriptImage}
          href="https://www.typescriptlang.org/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="shadcn/ui"
          version={"latest"}
          img={shadcnuiImage}
          href="https://ui.shadcn.com/"
        />
        <VersionInfo.Separator />
        <VersionInfo.Item
          name="Tanstack Router Vite Plugin"
          version={json.devDependencies["@tanstack/router-vite-plugin"]}
          img={tanstackImage}
          href="https://tanstack.com/router/latest"
        />
      </VersionInfo>
    </div>
  );
}
