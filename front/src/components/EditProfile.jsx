import { useForm } from "react-hook-form";
import Image from "next/image";
import avatar from "../assets/icons/avatar.png";
import { HttpRequest } from "@/helpers/httpRequest";
import {
  API_URL,
  IDIOMA_URL,
  PAIS_URL,
  DATOS_URL,
  NIVEL_URL,
} from "@/libs/routes";
import { useState, useEffect } from "react";
import { useRegisterStore } from "@/context/registerStore";
import { useRouter } from "next/navigation";

export const EditProfile = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useRegisterStore((state) => state.user);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [nivel, setNivel] = useState([]);

  const req = HttpRequest();
  const urlIdiomas = `${API_URL}${IDIOMA_URL}`;
  const urlCountries = `${API_URL}${PAIS_URL}`;
  const urlNivel = `${API_URL}${NIVEL_URL}`;
  const urlDatos = `${API_URL}${DATOS_URL}`;

  useEffect(() => {
    req.get(urlIdiomas).then((res) => {
      if (!res.err) {
        setLanguages(res);
      } else {
        setLanguages(null);
      }
    });

    req.get(urlCountries).then((res) => {
      if (!res.err) {
        setCountries(res);
      } else {
        setCountries(null);
      }
    });

    req.get(urlNivel).then((res) => {
      if (!res.err) {
        setNivel(res);
      } else {
        setNivel(null);
      }
    });

    req.get(urlCountries).then((res) => {
      if (!res.err) {
        setCountries(res);
      } else {
        setCountries(null);
      }
    });

    console.log(user);
  }, [urlIdiomas]);

  const onSubmit = (data) => {
    const { nativeLanguage, country, level, languageToLearn } = data;

    console.log(data, user.idUsuario);

    const options = {
      headers: { "content-type": "application/json" },
      body: {
        nativo: nativeLanguage,
        idPais: country,
        idCalificacion: level,
        idInteres: languageToLearn,
        /* idUsuario: user.idUsuario, */
        telefono: "2131",
        avatarRoot: null,
        nombreAvatar: null,
        idCalificacion: 1,
        urlcertificado: null,
        nombrecertificado: null,
        certificado: null,
      },
    };
    req.post(urlDatos, options).then((response) => {
      console.log(response);
      router.push("/login");
    });
  };

  return (
    <>
      <section className="w-full">
        <article className="my-4 flex flex-col items-center lg:items-start">
          <h1 className="text-xl text-black font-extrabold text-left mb-2 lg:text-[26px]">
            Completá tu perfil
          </h1>
          <p className="text-center mb-4 lg:w-[256px] lg:text-left text-sm text-[#545454] font-light">
            Completa tu información para una mejor experiencia en la plataforma
          </p>
        </article>
      </section>
      <form
        className="flex flex-col w-full justify-start items-start gap-6 lg:justify-center lg:items-center lg:w-[328px] lg:mt-8"
        onSubmit={handleSubmit(onSubmit)}>
        <Image
          className="object-contain self-center"
          src={avatar}
          alt="avatar img"
        />
        <div className="w-full">
          <select
            {...register("country")}
            name="country"
            className="select">
            {countries && (
              <>
                <option value="">Yo soy de</option>
                {countries.map((country) => (
                  <option
                    value={Number(country.idPais)}
                    key={country.idPais}>
                    {country.pais}
                  </option>
                ))}
              </>
            )}
          </select>
          {errors.country && (
            <p className="errormsj">{errors.country.message}</p>
          )}
        </div>
        <div className="w-full">
          <select
            {...register("nativeLanguage")}
            name="nativeLanguage"
            className="select">
            {languages && (
              <>
                <option value="">Idioma Nativo</option>
                {languages.map((language) => (
                  <option
                    value={Number(language.idIdioma)}
                    key={language.idIdioma}>
                    {language.idiomas}
                  </option>
                ))}
              </>
            )}
          </select>
          {errors.nativeLanguage && (
            <p className="errormsj">{errors.nativeLanguage.message}</p>
          )}
        </div>

        <div className="w-full">
          <select
            {...register("languageToLearn")}
            name="languageToLearn"
            className="select">
            {languages && (
              <>
                <option value="">Me interesa</option>
                {languages.map((language) => (
                  <option
                    value={Number(language.idIdioma)}
                    key={language.idIdioma}>
                    {language.idiomas}
                  </option>
                ))}
              </>
            )}
          </select>
          {errors.languageToLearn && (
            <p className="errormsj">{errors.languageToLearn.message}</p>
          )}
        </div>
        <div className="w-full">
          <select
            {...register("level")}
            name="level"
            className="select">
            {nivel && (
              <>
                <option value="-">Nivel</option>
                {nivel.map((level) => (
                  <option
                    value={Number(level.idNivel)}
                    key={level.idNivel}>
                    {level.nivel}
                  </option>
                ))}
              </>
            )}
          </select>

          {errors.level && <p className="errormsj">{errors.level.message}</p>}
        </div>

        <input
          type="submit"
          value="Completar tu perfil"
          className="registerBtn"
        />
      </form>
    </>
  );
};
