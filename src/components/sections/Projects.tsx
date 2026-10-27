
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-8 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-navy/60">
            01 / Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Projects with purpose.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-navy/65">
            From productivity tools to native mobile experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolio.projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-pale-blue bg-white"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-mist p-8">
                <div className="flex h-full w-full max-w-sm flex-col rounded-lg border border-pale-blue bg-snow p-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-navy/50">
                      {project.number} / PROJECT
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-sky" />
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    <span className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                      {project.name}
                    </span>
                  </div>

                  <div className="h-1.5 w-20 rounded-full bg-sky/60" />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-navy/55">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs text-navy/70">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-navy">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-16 leading-7 text-navy/65">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-pale-blue px-3 py-1.5 text-xs text-navy/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex font-medium text-navy underline decoration-sky underline-offset-4 hover:decoration-2"
                  >
                    View Project ↗
                  </a>
                ) : (
                  <p className="mt-7 text-sm text-navy/50">
                    Project details coming soon
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
