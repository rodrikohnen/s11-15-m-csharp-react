import { HttpRequest } from "@/helpers/httpRequest";
import { API_URL, AUTENTICACION_URL } from "@/libs/routes";
import { useAuthStore } from "@/context/authUser";
const useLogin = () => {
  const redirectLogin = (navigate) => {
    navigate("/home");
  };

  const handleLogin = async (data) => {
    console.log("data", data);
    const req = await HttpRequest();

    const url = `https://www.matespeakapi.somee.com/api/Autenticacion/validar`;
    const options = {
      body: {
        correo: data.correo,
        password: data.contraseña,
      },
    };
    req.post(url, options).then((res) => {
      console.log(res, "respuesta");
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Te deslogueaste correctamente");
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;
