"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import RegisterForm from "./_components/RegisterForm";
YupPassword(Yup);

const Register = () => {
  return (
    <div className="flex min-h-svh w-full flex-col bg-muted items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
