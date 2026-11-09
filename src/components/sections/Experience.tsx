
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-8 border-y border-pale-blue bg-[#F7FAFD] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#327DD7]">
            02 / Professional Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Building products for the real world.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-navy/65">
            From internal business tools to customer-facing mobile
            applications, I work on products that support real
            workflows and everyday users.
          </p>
        </div>

        <div className="space-y-16">
          {portfolio.experience.map((job) => (
            <article key={`${job.company}-${job.role}`}>
              <div className="grid gap-8 border-t border-[#C8DCEB] pt-8 md:grid-cols-[1fr_2fr] md:gap-12">
                <div>
                  <p className="mb-3 font-mono text-xs tracking-wider text-[#327DD7]">
                    {job.period}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-navy">
                    {job.role}
                  </h3>

                  <p className="mt-2 text-lg text-navy/65">
                    {job.company}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-lg leading-8 text-navy/75">
                    {job.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#E7F0F9] px-3 py-1.5 text-xs font-medium text-[#426282]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <div className="mb-6 flex items-center gap-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-navy/45">
                    Selected Product Work
                  </p>
                  <div className="h-px flex-1 bg-[#D5E3EF]" />
                </div>

                <div className="divide-y divide-[#D5E3EF]">
                  {job.products.map((product) => (
                    <div
                      key={product.number}
                      className="group grid gap-6 py-9 md:grid-cols-[70px_1fr_1.4fr] md:gap-10"
                    >
                      <span className="font-mono text-sm text-[#327DD7]">
                        {product.number}
                      </span>

                      <div>
                        <h4 className="text-2xl font-semibold tracking-tight text-navy transition-colors group-hover:text-[#327DD7]">
                          {product.name}
                        </h4>

                        <p className="mt-2 text-sm text-navy/50">
                          {product.category}
                        </p>
                      </div>

                      <div>
                        <p className="leading-7 text-navy/70">
                          {product.description}
                        </p>

                        <ul className="mt-5 space-y-2">
                          {product.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm leading-6 text-navy/65"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#327DD7]"
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
