import { Outlet } from "@remix-run/react";

export default function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/product">Product</a>
      </nav>
      <Outlet /> {/* Ini akan merender halaman home/product */}
    </div>
  );
}
