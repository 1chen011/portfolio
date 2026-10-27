
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col overflow-hidden bg-navy text-snow"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-sky/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24 md:px-10 md:py-32">
        <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-sky sm:text-sm">
          {portfolio.role}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
          Building thoughtful
          <span className="block text-sky">
            digital experiences.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
          {portfolio.introduction}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-sky px-6 font-medium text-navy transition-colors hover:bg-white"
          >
            Explore My Work
            <span aria-hidden="true" className="ml-3">
              ↗
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 font-medium text-snow transition-colors hover:border-white hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 font-mono text-[10px] uppercase tracking-widest text-white/50 md:px-10">
        <span>Web / Mobile / Product</span>
        <a href="#work" className="hover:text-white">
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}
