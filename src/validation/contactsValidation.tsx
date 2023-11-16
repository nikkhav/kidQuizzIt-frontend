import * as Yup from "yup";

export const contactsValidation = Yup.object({
  firstName: Yup.string().min(3).required("Please enter First name"),
  lastName: Yup.string().min(3).required("Please enter Last name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter Email"),
  phone: Yup.number().required("Please enter phone number"),
  message: Yup.string()
    .min(50, "minimum 50 symbols")
    .required("Please enter message"),
});
