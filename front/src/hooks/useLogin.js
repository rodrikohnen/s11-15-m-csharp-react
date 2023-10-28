import { HttpRequest } from "@/helpers/httpRequest";
import { API_URL, USUARIOS_URL } from "@/libs/routes";
import { useAuthStore } from "@/context/authUser";
const useLogin = () => {
  const redirectLogin = (navigate) => {
    navigate("/home");
  };

  const handleLogin = async (data) => {
    console.log("data");
    const req = await HttpRequest();

    const url = `${API_URL}${USUARIOS_URL}`;
    const options = {
      headers: { "content-type": "application/json" },
      body: {
        correo: data.correo,
        contraseña: data.contraseña,
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
