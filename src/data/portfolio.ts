export const portfolio = {
  role: "Software Engineer · Web & Mobile",

  headline: "Building thoughtful digital experiences.",

  introduction:
    "I build intuitive web and mobile applications, turning complex workflows into practical, reliable products.",

  about:
    "I'm a software developer who cares about both how software works and how people experience it. I enjoy building thoughtful interfaces, solving real-world problems, and continuously improving the products I work on.",

  projects: [
    {
      id: "planora",
      number: "01",
      name: "Planora",
      category: "Web Application",
      tagline: "Plan your work. Focus on what matters.",
      description:
        "A productivity workspace that brings task planning and focused work together, helping users move from organizing tasks to actually getting them done.",
      highlights: [
        "Organize tasks in a structured workspace",
        "Connect focus sessions to specific tasks",
        "Track focused work alongside task progress",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      status: "In Development",
      href: "https://github.com/1chen011/planora",
    },
    {
      id: "wallet",
      number: "02",
      name: "Wallet iOS",
      category: "Native iOS Application",
      tagline: "Everyday expenses, without the friction.",
      description:
        "A native expense-tracking app built around a simple idea: recording a transaction should be quick, clear, and easy to repeat.",
      highlights: [
        "Streamlined transaction entry",
        "Local data persistence with SwiftData",
        "Customizable expense categories",
      ],
      technologies: ["Swift", "SwiftUI", "SwiftData"],
      status: "In Development",
      href: "https://github.com/1chen011/wallet-ios",
    },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Newprint",
      period: "2026 — Present",
      description:
        "Building and maintaining production web and mobile applications for internal operations and customer-facing e-commerce experiences.",
      technologies: ["Flutter", "Dart", "TypeScript", "React", "REST APIs"],
      products: [
        {
          number: "01",
          name: "Mobile ERP",
          category: "Internal Operations · iOS & Android",
          description:
            "Developed a cross-platform employee attendance application with time records, correction requests, administrative reporting, and notifications.",
          highlights: [
            "Employee attendance and correction workflows",
            "Administrative reporting and workforce insights",
            "Push notifications and app release workflows",
          ],
        },
        {
          number: "02",
          name: "Customer E-commerce App",
          category: "Customer Experience · Flutter",
          description:
            "Building a mobile ordering experience for customizable print products, from product configuration and artwork upload to checkout.",
          highlights: [
            "Product configuration and order workflows",
            "Asynchronous artwork processing and previews",
            "Shopping cart and checkout integration",
          ],
        },
        {
          number: "03",
          name: "Admin Panel",
          category: "Business Tools · Flutter Web",
          description:
            "Developing web-based administrative interfaces to support business operations and internal workflows.",
          highlights: [
            "Internal management interfaces",
            "Data-driven tables and workflows",
            "Responsive administrative UI",
          ],
        },
      ],
    },
  ],
};
