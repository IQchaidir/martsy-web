import { Outlet } from "@remix-run/react";

import Footer from "./footer";
import Header from "./header";

export default function LayoutMain() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
