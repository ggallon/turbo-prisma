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

export default function Web() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center  gap-y-10">
        <h1 className="ext-4xl font-extrabold lg:text-5xl">Starter</h1>
        <a href="/api/users">[API] go to view Users</a>
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
        <ul className="space-x-3">
          <li>Monorepo</li>
          <li>PNPM</li>
          <li>TURBO</li>
          <li>Nextjs</li>
          <li>Prisam</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </Layout>
  );
}
