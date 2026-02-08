"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-sm text-slate-600">Cargando sesión...</p>;
  }

  if (session?.user) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-sm text-slate-700">
          Sesión activa: {session.user.email} ({session.user.role})
        </p>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-fit rounded bg-slate-900 px-4 py-2 text-sm text-white"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="w-fit rounded bg-slate-900 px-4 py-2 text-sm text-white"
    >
      Iniciar sesión
    </button>
  );
}
