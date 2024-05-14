import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TitleBar from "@/components/title-bar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <TitleBar />
      <Navbar />
      <div className="pt-16 px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
});
