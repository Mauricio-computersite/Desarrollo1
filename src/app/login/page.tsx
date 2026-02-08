"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Credenciales inválidas. Intenta de nuevo.");
      return;
    }

    if (result?.url) {
      window.location.href = result.url;
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          Iniciar sesión
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Accede con tu correo y contraseña asignados.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              className="rounded border border-slate-300 px-3 py-2 text-sm"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Contraseña
            <input
              className="rounded border border-slate-300 px-3 py-2 text-sm"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? "Validando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
