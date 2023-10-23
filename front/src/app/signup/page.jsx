"use client";
import { useEffect, useState } from "react";
import { RegisterForm } from "@/components/RegisterForm";
import { EditProfile } from "@/components/EditProfile";
import Image from "next/image";
import { WhiteArrowBack } from "@/components/WhiteArrowBack";
import { MateSpeakHeader } from "@/components/MateSpeakHeader";

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
  const [windowWidth, setWindowWidth] = useState(undefined);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  const handleClick = () => {
    setFormView(formView - 1);
  };

  return (
    <div>
      <header
        className={`w-full h-[60px] lg:h-20 bg-primary flex ${
          formView === 1 || windowWidth >= 1024
            ? "justify-center items-center"
            : "justify-start items-center px-4"
        }`}>
        {formView === 1 || windowWidth >= 1024 ? (
          <MateSpeakHeader />
        ) : (
          <>
            <WhiteArrowBack onClick={handleClick} />
            <h2 className="text-lg text-white font-medium">
              Completá tu perfil
            </h2>
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
