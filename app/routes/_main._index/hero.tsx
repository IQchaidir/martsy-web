import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="flex items-center justify-between rounded-xl bg-secondary px-20">
      <div className="flex flex-col items-start space-y-10">
        <span className="text-7xl font-bold text-primaryText">
          Best Choices,
          <br /> Delivered Fast
        </span>
        <Button size={"lg"} className="rounded-full text-lg">
          Shop now
        </Button>
      </div>
      <img src="/hero-image.png" alt="hero-image" className="mt-5 h-96 w-96" />
    </section>
  );
}
