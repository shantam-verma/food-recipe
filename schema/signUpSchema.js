import * as yup from "yup";

const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;

const SignUpValidationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .matches(
      passwordRegex,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
});
export default SignUpValidationSchema;
