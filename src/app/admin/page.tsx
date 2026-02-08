export default function AdminPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Panel ADMIN
      </h1>
      <p className="text-slate-600">
        Esta vista está protegida para usuarios con rol ADMIN.
      </p>
    </main>
  );
}
