
export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="page">
      <h1>{title}</h1>
      {children}
    </main>
  );
}
