import electronImage from "@/assets/electron.svg";
import reactImage from "@/assets/react.svg";
import tailwindcssImage from "@/assets/tailwindcss.svg";
import typescriptImage from "@/assets/typescript.svg";
import viteImage from "@/assets/vite.svg";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import VersionInfo from "@/components/version-info";
import json from "../../package.json";

function App() {
  return (
    <div
      className="h-screen bg-background text-foreground flex flex-col gap-8 items-center 
                justify-between py-2"
    >
      <ModeToggle className="fixed right-6 top-6" />
      <div className="text-center space-y-2">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
          Electron App
        </h1>
        <h2 className="text-sm lg:text-lg font-normal flex gap-1 items-center">
          <p>Vite</p>
          <Separator orientation="vertical" />
          <p>React</p>
          <Separator orientation="vertical" />
          <p>TailwindCSS</p>
          <Separator orientation="vertical" />
          <p>Typescript</p>
          <Separator orientation="vertical" />
          <p>shadcn/ui</p>
          <Separator orientation="vertical" />
        </h2>
      </div>
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
      </VersionInfo>
      <div>
        <p className="text-sm text-foreground/60">
          made by <span className="text-foreground/100">Lucas Ferreira</span>
        </p>
      </div>
    </div>
  );
}

export default App;
