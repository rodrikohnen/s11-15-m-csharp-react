"use client";
import { useState } from "react";
import { RegisterForm } from "@/components/RegisterForm";
import { EditProfile } from "@/components/EditProfile";

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

  return (
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
          formView={formView}
          setFormView={setFormView}
        />
      )}
    </main>
  );
};

export default SignupPage;
