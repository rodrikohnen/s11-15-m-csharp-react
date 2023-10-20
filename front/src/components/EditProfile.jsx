import { useForm } from "react-hook-form";
import Image from "next/image";
import backArrow from "../assets/icons/back-arrow.png";
import avatar from "../assets/icons/avatar.png";

export const EditProfile = ({ user, setUser, setFormView, formView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUser({
      ...user,
      country: data.country,
      nativeLanguage: data.nativeLanguage,
      languageToLearn: data.languageToLearn,
      level: data.level,
      username: data.username,
    });
    console.log(user);
  };

  console.log(user);
  const handleClick = () => {
    setFormView(formView - 1);
  };

  return (
    <>
      <section className="w-full">
        <header className="flex items-center justify-start gap-4 py-4 px-0 mx-0 w-full">
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
        <div className="w-full">
          <input
            placeholder="username"
            name="username"
            type="text"
            className="input"
            {...register("username", {
              required: {
                value: true,
                message: "Debes ingresar un username",
              },
            })}
          />
          {errors.username && (
            <p className="errormsj">{errors.username.message}</p>
          )}
        </div>

        <div className="w-full">
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
          {errors.country && (
            <p className="errormsj">{errors.country.message}</p>
          )}
        </div>

        <div className="w-full">
          <select
            {...register("nativeLanguage")}
            name="nativeLanguage"
            className="select">
            <option value="">Idioma nativo</option>
            <option value="english">Inglés</option>
            <option value="spanish">Español</option>
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
            <option value="">Me interesa</option>
            <option value="english">Inglés</option>
            <option value="spanish">Español</option>
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
            <option value="-">Nivel</option>
            <option value="begginer">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzado</option>
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
