interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="relative mx-auto max-w-6xl" role="main">
      {children}
    </main>
  );
}
