import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(3).required("First name is required"),
  lastName: Yup.string().required("First name is required"),
  email: Yup.string().required("Email is Required").email(),
  password: Yup.string()
    .min(6)
    .minUppercase(1)
    .minNumbers(1)
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("confirm password is required"),
});

export default RegisterValidationSchema;
