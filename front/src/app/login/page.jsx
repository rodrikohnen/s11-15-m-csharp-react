import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="text-center">
      <div className="text-3xl p-[2rem]">
        <h1>Iniciar sesión</h1>
        <Link className="text-sm text-sky-500" href="/signup">
          ¿Aun no tienes cuenta?
        </Link>
      </div>
      <LoginForm />
    </main>
  );
}
