import { ShoppingCart } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import Hero from "./hero";

export default function Index() {
  return (
    <div className="wrapper flex flex-col gap-10 py-5">
      <Hero />

      {/* Featured categories */}
      <section className="text-primaryText flex flex-col space-y-5 text-4xl font-semibold">
        <span>Featured Categories</span>
        <div className="flex gap-7 overflow-x-auto">
          <Card className="text-primaryText bg-secondary text-xl">
            <CardContent className="flex flex-col items-center space-y-3 p-5">
              <img
                src="https://placehold.co/150?text=No%20Image"
                alt="image-category"
                className="h-30 w-auto object-cover"
              />
              <span>name</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Product */}
      <section className="text-primaryText flex flex-col space-y-5 text-4xl font-semibold">
        <span>Popular Products</span>
        <div className="grid grid-cols-5">
          <Card className="text-primaryText text-xl">
            <CardContent className="flex flex-col gap-4 p-8">
              <img
                src="https://placehold.co/150?text=No%20Image"
                alt="image-category"
                className="h-56 w-auto object-cover"
              />
              <span>name product</span>
              <div className="flex items-center justify-between">
                <span>Rp. 30000</span>
                <Button size={"sm"} variant={"secondary"}>
                  <ShoppingCart />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Product */}
      <section className="text-primaryText flex flex-col space-y-5 text-4xl font-semibold">
        <span>Recently added</span>
        <div className="grid grid-cols-5">
          <Card className="text-primaryText text-xl">
            <CardContent className="flex flex-col gap-4 p-8">
              <img
                src="https://placehold.co/150?text=No%20Image"
                alt="image-category"
                className="h-56 w-auto object-cover"
              />
              <span>name product</span>
              <div className="flex items-center justify-between">
                <span>Rp. 30000</span>
                <Button size={"sm"} variant={"secondary"}>
                  <ShoppingCart />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-primaryText w-full cursor-pointer rounded-sm bg-secondary py-1 text-center text-lg">
          See all products
        </div>
      </section>
    </div>
  );
}
