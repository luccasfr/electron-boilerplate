import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ThemeMenu from "./theme-menu";

type MenuBarProps = { className?: string };

export default function MenuBar({ className }: MenuBarProps) {
  const handleQuit = () => {
    window.api.quit();
  };

  return (
    <Menubar className={className}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={handleQuit}>Quit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <ThemeMenu />
    </Menubar>
  );
}
