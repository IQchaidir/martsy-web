import { Form, Link } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <header>
      <div className="wrapper sticky top-0 flex items-center justify-between border-b-2 py-6 shadow-md">
        <Link to={"/"}>
          <img
            src="/public/assets/logo.png"
            alt="logo"
            className="h-auto w-44"
          />
        </Link>
        <Form
          method="get"
          action="/product/"
          className="relative ml-16 mr-8 flex-1"
        >
          <input
            type="text"
            name="q"
            className="w-full rounded-sm border-2 border-primary bg-transparent py-3 pl-3 pr-28 outline-none"
          />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            Search
          </Button>
        </Form>

        <nav>
          <ul className="flex items-center gap-5">
            <li className="relative p-2">
              <ShoppingCart className="h-8 w-8" />
              <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                3
              </span>
            </li>
            <li>
              <Button asChild>
                <Link to={"/login"}>Login</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link to={"/register"}>Register</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
