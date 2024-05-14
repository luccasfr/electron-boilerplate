import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <div className="pt-16 px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
});
