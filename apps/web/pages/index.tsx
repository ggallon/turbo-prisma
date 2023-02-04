import { Button } from "ui";
import { Layout } from "#/components/layout";

const VARIANTS = [
  { variant: "default" },
  { variant: "negative" },
  { variant: "ghost" },
  { variant: "link" },
  { variant: "outline" },
  { variant: "subtle" },
];

const LOGOS = [
  { alt: "Turborepo", file: "turborepo-icon-light-background.svg" },
  { alt: "Pnpm", file: "pnpm-icon-light-background.svg" },
  { alt: "Next.js", file: "nextjs-icon-light-background.svg" },
  { alt: "Tailwind CSS", file: "tailwindcss-icon.svg" },
  { alt: "Prisma", file: "prisma-icon-light-background.svg" },
  { alt: "PlanetScale", file: "planetscale-icon-light-background.svg" },
];

export default function Web() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-10">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold lg:text-5xl">
            Monorepo Starter
          </h1>
          <div className="flex flex-row justify-center items-center gap-x-5 mt-5">
            {LOGOS.map((logo, id) => (
              <div key={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${logo.file}`}
                  alt={logo.alt}
                  className={logo.alt === "Tailwind CSS" ? " w-7" : "h-6"}
                />
              </div>
            ))}
          </div>
        </div>
        <a href="/api/users">
          <span className="font-bold">[API]</span> go to view Users
        </a>
        <div className="space-x-3">
          {VARIANTS.map((version: any) => (
            <Button
              key={`version-${version.variant}`}
              variant={version.variant}
              className="capitalize"
            >
              {version.variant}
            </Button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
