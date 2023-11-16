import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useFormik, Formik, Form, Field } from "formik";
import { contactsValidation } from "../validation/contactsValidation";
import axios from "../axios";

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
    <Wrapper>
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full flex-col items-center justify-center mb-20">
          <h2 className="items-center flex-col text-center text-black font-main font-bold text-5xl sm:text-7xl md:text-7xl lg:text-7xl">
            Contact us
            <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
          </h2>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:items-start lg:justify-start items-center mt-6 mb-16">
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-3/5 lg:mr-3 flex justify-start flex-wrap items-start bg-darkGreen p-5 rounded-3xl"
          >
            <label htmlFor="firstName" className="w-full md:w-1/2 md:pr-3 ">
              <p className="font-main font-medium text-white text-xl mb-2">
                First Name
              </p>
              <input
                type="text"
                className={
                  errors.firstName
                    ? "w-full border-2 border-error h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-error placeholder:text-error"
                    : "w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow placeholder:text-gray"
                }
                value={values.firstName}
                name="firstName"
                onChange={handleChange}
                placeholder={
                  errors.firstName ? errors.firstName : "Enter first name..."
                }
              />
            </label>
            <label
              htmlFor="lastName"
              className="w-full md:w-1/2 md:pl-3 mt-7 md:mt-0 mb-3"
            >
              <p className="font-main font-medium text-white text-xl mb-2">
                Last Name
              </p>
              <input
                type="text"
                className={
                  errors.lastName
                    ? "w-full border-2 border-error h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-error placeholder:text-error"
                    : "w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow placeholder:text-gray"
                }
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder={
                  errors.lastName ? errors.lastName : "Enter last name..."
                }
              />
            </label>
            <label
              htmlFor="email"
              className="w-full md:w-1/2 md:pr-3 mt-5 mb-3"
            >
              <p className="font-main font-medium text-white text-xl mb-2">
                Email address
              </p>
              <input
                type="email"
                name="email"
                className={
                  errors.email
                    ? "w-full border-2 border-error h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-error placeholder:text-error"
                    : "w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow placeholder:text-gray"
                }
                value={values.email}
                onChange={handleChange}
                placeholder={
                  errors.email ? errors.email : "Enter email address..."
                }
              />
            </label>
            <label
              htmlFor="phone"
              className="w-full md:w-1/2 md:pl-3 mt-5 mb-3"
            >
              <p className="font-main font-medium text-white text-xl mb-2">
                Phone number
              </p>
              <input
                type="phone"
                name="phone"
                className={
                  errors.phone
                    ? "w-full border-2 border-error h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-error placeholder:text-error"
                    : "w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow placeholder:text-gray"
                }
                value={values.phone}
                onChange={handleChange}
                placeholder={
                  errors.phone ? errors.phone : "Enter phone number..."
                }
              />
            </label>
            <label htmlFor="message" className="w-full my-7">
              <p className="font-main font-medium text-white text-xl mb-2">
                Message
              </p>
              <textarea
                name="message"
                className={
                  errors.message
                    ? "w-full h-32 p-4  border-2 border-error rounded-lg font-main font-normal text-black text-lg focus:outline-none focus:border-error placeholder:text-error"
                    : "w-full h-32 p-4  border-2 border-white rounded-lg font-main font-normal text-black text-lg focus:outline-none focus:border-yellow placeholder:text-gray"
                }
                value={values.message}
                onChange={handleChange}
                placeholder={
                  errors.message ? errors.message : "Enter message..."
                }
              ></textarea>
            </label>
            <div className="w-full flex items-center justify-center mt-0 mb-3">
              <button className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 font-main font-medium text-white text-lg transition-all duration-300 hover:bg-white hover:text-darkGreen">
                Send message
              </button>
            </div>
          </form>
          <div className="w-full lg:w-2/5 flex-col lg:pl-3 items-center justify-center text-center mb-10">
            <h2 className="font-main font-medium text-center text-3xl lg:text-5xl text-black mb-2 lg:mb-5 flex justify-center items-center">
              WE CAN HELP!
            </h2>
            <p className="font-main font-normal text-center text-xl lg:text-2xl text-black flex justify-center items-center">
              Our team of experts is on hand to answer your questions
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contacts;
