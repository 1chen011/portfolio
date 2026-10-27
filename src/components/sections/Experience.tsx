
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-8 border-y border-pale-blue bg-mist px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-navy/60">
          02 / Experience
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          Engineering real-world products.
        </h2>

        <div className="mt-14 space-y-6">
          {portfolio.experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="grid gap-8 rounded-xl border border-pale-blue bg-snow p-7 md:grid-cols-[1fr_2fr] md:p-10"
            >
              <div>
                <h3 className="text-xl font-semibold text-navy">
                  {job.role}
                </h3>
                <p className="mt-2 text-navy/65">{job.company}</p>
              </div>

              <div>
                <p className="leading-8 text-navy/75">
                  {job.description}
                </p>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-navy/70">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-pale-blue px-3 py-1.5 text-xs text-navy/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
