import Link from "next/link";

import { AuthButtons } from "./components/AuthButtons";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-16">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Proyecto base
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Plataforma de gestión de clientes y pólizas
        </h1>
        <p className="text-lg text-slate-600">
          Esta aplicación se encuentra en fase de configuración inicial con Next.js,
          TypeScript y Tailwind CSS.
        </p>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Acceso rápido</h2>
        <p className="mt-2 text-sm text-slate-600">
          Usa el login para probar los accesos por rol (ADMIN y TECH).
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <AuthButtons />
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-blue-600 underline" href="/admin">
              Vista Admin
            </Link>
            <Link className="text-blue-600 underline" href="/tech">
              Vista Tech
            </Link>
          </div>
        </div>
      </section>
      <section className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">Siguientes módulos</h2>
        <ul className="space-y-2 text-slate-600">
          <li>• Gestión de clientes y contactos.</li>
          <li>• Pólizas mensuales y cuentas de cobro.</li>
          <li>• Registro de pagos y reportes de cartera.</li>
        </ul>
      </section>
    </main>
  );
}
