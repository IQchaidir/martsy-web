import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "/app/tailwind.css",
  },
  { rel: "icon", href: "/assets/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Varela+Round&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-quicksand">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en">
      <head>
        <title>
          {isRouteErrorResponse(error) && error.status === 404
            ? "404 - Page Not Found"
            : "Error"}
        </title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              {isRouteErrorResponse(error) && error.status === 404
                ? "404 - Page Not Found"
                : isRouteErrorResponse(error)
                  ? `${error.status} ${error.statusText}`
                  : error instanceof Error
                    ? error.message
                    : "Unknown Error"}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Sorry, the page you&apos;re looking for could not be found.
            </p>
            <a href="/" className="mt-6 text-blue-600 hover:text-blue-800">
              Go back to the homepage
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
