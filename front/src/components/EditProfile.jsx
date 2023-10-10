import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { minLength, object, string, maxLength } from "valibot";
import Image from "next/image";
import backArrow from "../assets/icons/back-arrow.png";
import avatar from "../assets/icons/avatar.png";

const profileSchema = object({
  country: string([minLength(2, "Por favor ingresa tu ciudad")]),
  nativelanguage: string([minLength(2, "Elije un idioma del listado")]),
  languagetolearn: string([minLength(2, "Elije un idioma del listado")]),
  level: string([minLength(2, "Debes seleccionar un nivel del listado")]),
  username: string([
    minLength(1, "Tu username debe tener un mínimo de 1 caracteres"),
    maxLength(10, "Tu username debe tener un máximo de 10 caracteres"),
  ]),
});

export const EditProfile = ({ user, setUser, setFormView, formView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: valibotResolver(profileSchema) });

  const onSubmit = (data) => {
    setUser({
      ...user,
      country: data.country,
      nativelanguage: data.nativelanguage,
      languagetolearn: data.languagetolearn,
      level: data.level,
      username: data.username,
    });
    console.log(user);
  };

  const handleClick = () => {
    setFormView(formView - 1);
  };

  return (
    <>
      <section className="w-full">
        <header className="flex items-center justify-start gap-4 py-4">
          <Image
            src={backArrow}
            alt="go back"
            className="object-contain"
            onClick={handleClick}
          />
          <h2 className="text-black-400 text-xl">Completá tu perfil</h2>
        </header>
        <article className="my-4 flex flex-col items-center">
          <p className="text-center mb-4">
            Completa tu información para una mejor experiencia en la plataforma
          </p>
          <Image
            className="object-contain"
            src={avatar}
            alt="avatar img"
          />
        </article>
      </section>
      <form
        className="flex flex-col w-full justify-start items-start gap-6"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username"
          name="username"
          type="text"
          className="input"
          {...register("username")}
        />
        {errors.username && (
          <p className="errormsj">{errors.username.message}</p>
        )}
        <select
          {...register("country")}
          name="country"
          className="select">
          <option value="">Yo soy de</option>
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
          <option value="venezuela">Venezuela</option>
          <option value="chile">Chile</option>
        </select>
        {errors.country && <p className="errormsj">{errors.country.message}</p>}
        <select
          {...register("nativelanguage")}
          name="nativelanguage"
          className="select">
          <option value="">Idioma nativo</option>
          <option value="english">Inglés</option>
          <option value="spanish">Español</option>
        </select>
        {errors.nativelanguage && (
          <p className="errormsj">{errors.nativelanguage.message}</p>
        )}
        <select
          {...register("languagetolearn")}
          name="languagetolearn"
          className="select">
          <option value="">Me interesa</option>
          <option value="english">Inglés</option>
          <option value="spanish">Español</option>
        </select>
        {errors.languagetolearn && (
          <p className="errormsj">{errors.languagetolearn.message}</p>
        )}
        <select
          {...register("level")}
          name="level"
          className="select">
          <option value="-">Nivel</option>
          <option value="begginer">Principiante</option>
          <option value="intermediate">Intermedio</option>
          <option value="advanced">Avanzado</option>
        </select>
        {errors.level && <p className="errormsj">{errors.level.message}</p>}
        <input
          type="submit"
          value="Completar tu perfil"
          className="registerBtn"
        />
      </form>
    </>
  );
};
