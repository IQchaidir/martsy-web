import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="auth-container">
      <h1>Welcome to Auth</h1>
      <Outlet />
    </div>
  );
}
