import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/NavBar";

export default function Login() {
  return (
    <main className="flex-col">
      <NavBar/>
      <div className='text-3xl flex justify-start flex-col mt-8 mb-12 ml-4'>
          <h1>Iniciar sesión</h1>
          <a className="text-sm text-sky-500">
            ¿Aun no tienes cuenta?
          </a>
        </div>
      <LoginForm />
    </main>
  );
}
