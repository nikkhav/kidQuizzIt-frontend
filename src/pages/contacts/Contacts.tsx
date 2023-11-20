import { useFormik } from "formik";
import { contactsValidation } from "../../validation/contactsValidation";
import axios from "../../axios";
import "./contacts.css";

let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};
const Contacts = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: contactsValidation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("contact", {
          name: values.firstName,
          surname: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
          read: 0,
        });
        if (response.data.code == 201) {
          alert("Your request has been sent successfully");
        }
        if (response.data.code != 201) {
          alert("Something went wrong...");
        }
        values.email = "";
        values.firstName = "";
        values.lastName = "";
        values.message = "";
        values.phone = "";
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <>
      <div className="container">
        <div className="contacts">
          <h2 className="contacts_title">Contact us</h2>
          <div className="contacts_hero">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName" className="name_label">
                <p className="font-main font-medium text-white text-xl mb-2">
                  First Name
                </p>
                <input
                  type="text"
                  className={errors.firstName ? "error_input" : ""}
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                  placeholder={
                    errors.firstName ? errors.firstName : "Enter first name..."
                  }
                />
              </label>
              <label htmlFor="lastName" className="surname_label">
                <p>Last Name</p>
                <input
                  type="text"
                  className={errors.lastName ? "error_input" : ""}
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                  placeholder={
                    errors.lastName ? errors.lastName : "Enter last name..."
                  }
                />
              </label>
              <label htmlFor="email" className="email_label">
                <p>Email address</p>
                <input
                  type="email"
                  name="email"
                  className={errors.email ? "error_input" : ""}
                  value={values.email}
                  onChange={handleChange}
                  placeholder={
                    errors.email ? errors.email : "Enter email address..."
                  }
                />
              </label>
              <label htmlFor="phone" className="phone_label">
                <p>Phone number</p>
                <input
                  type="phone"
                  name="phone"
                  className={errors.phone ? "error_input" : ""}
                  value={values.phone}
                  onChange={handleChange}
                  placeholder={
                    errors.phone ? errors.phone : "Enter phone number..."
                  }
                />
              </label>
              <label
                htmlFor="message"
                className={`message_label ${
                  errors.message ? "message_label_error" : ""
                }`}
              >
                <p>Message</p>
                <textarea
                  name="message"
                  className={errors.message ? "error_input" : ""}
                  value={values.message}
                  onChange={handleChange}
                  placeholder={
                    errors.message ? errors.message : "Enter message..."
                  }
                ></textarea>
              </label>
              <div className="submit_btn">
                <button>Send message</button>
              </div>
            </form>
            <div className="contacts_text">
              <h2>WE CAN HELP!</h2>
              <p>Our team of experts is on hand to answer your questions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
