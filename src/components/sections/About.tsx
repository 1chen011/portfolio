
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-8 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-navy/60">
            03 / About
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Beyond the code.
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-navy/80 md:text-2xl md:leading-10">
            {portfolio.about}
          </p>

          <div className="mt-10 grid gap-4 border-t border-pale-blue pt-8 sm:grid-cols-3">
            {["Frontend Engineering", "Mobile Development", "Product Thinking"].map(
              (skill) => (
                <p
                  key={skill}
                  className="text-sm font-medium text-navy/65"
                >
                  {skill}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
