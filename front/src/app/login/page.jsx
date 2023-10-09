import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
<<<<<<< HEAD
    <main className="flex-col">
      <div className="text-3xl flex justify-start flex-col mt-12 mb-16 ml-4">
=======
    <main className="text-center">
      <div className="text-3xl p-[2rem]">
>>>>>>> 21074f5e287ebf653370e6c008584f1abe85c68b
        <h1>Iniciar sesión</h1>
        <Link className="text-sm text-sky-500" href="/signup">
          ¿Aun no tienes cuenta?
        </Link>
      </div>
      <LoginForm />
    </main>
  );
}
