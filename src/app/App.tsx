import electronImage from "@/assets/electron.svg";
import reactImage from "@/assets/react.svg";
import tailwindcssImage from "@/assets/tailwindcss.svg";
import typescriptImage from "@/assets/typescript.svg";
import viteImage from "@/assets/vite.svg";
import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import VersionInfo from "@/components/version-info";
import json from "../../package.json";

function App() {
  return (
    <div
      className="h-screen bg-background text-foreground flex flex-col gap-8 items-center 
                justify-between py-4"
    >
      <ModeToggle className="fixed right-6 top-6" />
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
