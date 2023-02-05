import "./globals.css";

export const metadata = {
  title: {
    default: "Monorepo Starter",
    template: "%s | MS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-mono-light text-mono-dark antialiased dark:bg-mono-dark dark:text-mono-light">
        {children}
      </body>
    </html>
  );
}
