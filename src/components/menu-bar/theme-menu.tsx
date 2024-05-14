import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "../theme-provider";
import { Check } from "lucide-react";

export default function ThemeMenu() {
  const { setTheme, theme } = useTheme();
  return (
    <MenubarMenu>
      <MenubarTrigger>Theme</MenubarTrigger>
      <MenubarContent>
        <MenubarItem
          onClick={() => setTheme("light")}
          className="flex justify-between items-center"
        >
          Light
          {theme === "light" && <Check className="w-4 h-4" />}
        </MenubarItem>
        <MenubarItem
          onClick={() => setTheme("dark")}
          className="flex justify-between items-center"
        >
          Dark
          {theme === "dark" && <Check className="w-4 h-4" />}
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem
          onClick={() => setTheme("system")}
          className="flex justify-between items-center"
        >
          System
          {theme === "system" && <Check className="w-4 h-4" />}
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
}
