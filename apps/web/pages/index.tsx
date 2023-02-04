import { Button } from "ui";
import { Layout } from "#/components/layout";

export default function Web() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center  gap-y-10">
        <h1 className="ext-4xl font-extrabold lg:text-5xl">Starter</h1>
        <a href="/api/users">[API] go to view Users</a>
        <div className="space-x-3">
          <Button>Boop</Button>
          <Button variant="destructive">Boop</Button>
          <Button variant="ghost">Boop</Button>
          <Button variant="link">Boop</Button>
          <Button variant="outline">Boop</Button>
          <Button variant="subtle">Boop</Button>
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
