import { HttpRequest } from "@/helpers/httpRequest";
import { API_URL, AUTENTICACION_URL } from "@/libs/routes";
import { useAuthStore } from "@/context/authUser";
const handleLogin = async (data) => {
  console.log("data", data.correo);
  const req = await HttpRequest();
  const { isLogin } = useAuthStore();

  const url = `${API_URL}${AUTENTICACION_URL}`;
  const options = {
    headers: { "content-type": "application/json" },

    body: {
      correo: data.correo,
      password: data.contraseña,
    },
  };
  req.post(url, options).then((res) => {
    console.log(res);
  });
};

export default handleLogin;
