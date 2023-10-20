"use client";
import { useState } from "react";
import { RegisterForm } from "@/components/RegisterForm";
import { EditProfile } from "@/components/EditProfile";
import Image from "next/image";
import LogoWhite from "../../assets/logos/LogoMateSpeakWhite.png";
import whiteArrowBack from "../../assets/icons/backwhite-arrow.png";

const initialRegisterUser = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
  nativelanguage: "",
  languagetolearn: "",
  level: "",
  username: "",
};

const SignupPage = () => {
  const [formView, setFormView] = useState(1);
  const [user, setUser] = useState(initialRegisterUser);

  const handleClick = () => {
    setFormView(formView - 1);
  };

  return (
    <div>
      <header
        className={`w-full h-[60px] bg-primary flex ${
          formView === 1
            ? "justify-center items-center"
            : "justify-start items-center px-4"
        }`}>
        {formView === 1 ? (
          <Image
            src={LogoWhite}
            alt="Logo Mate Speak"
            width={77}
          />
        ) : (
          <>
            <Image
              src={whiteArrowBack}
              alt="go back"
              className="object-contain"
              onClick={handleClick}
            />
            <h2 className="text-lg text-white font-medium">
              Completá tu perfil
            </h2>{" "}
          </>
        )}
      </header>
      <main className="mainContainer">
        {formView === 1 && (
          <RegisterForm
            formView={formView}
            setFormView={setFormView}
            user={user}
            setUser={setUser}
          />
        )}
        {formView === 2 && (
          <EditProfile
            user={user}
            setUser={setUser}
          />
        )}
      </main>
    </div>
  );
};

export default SignupPage;
