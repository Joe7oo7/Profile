import React, { useState } from "react";
import { useForm,} from "react-hook-form";
import emailjs from "emailjs-com";
import "./Contactpage.css";

const Contactpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage,setSuccessMessage]=useState("");

  // email js section starts...
  const onSubmit = (data) => {
    emailjs
      .send("Jose7o7", "Jose7oo7", data, "mR6LGHCOuWNaOyPv9")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your email  has been sent successfully");
        
        reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setSuccessMessage("Failed to send email.please try again.")
      });
  };
  // email js section ...ends

  return (
    <div className="container-form">
      <h3 className="text-center text-decoration-underline text-light">
        Mail Me
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="from_name">Name</label>

          <input
            id="from_name"
            name="from_name"
            className="form-control"
            placeholder="Enter your Name"
          
            {...register("from_name", { required: "Name is required" })}
          />

          {errors.from_name && (
            <p className="text-danger">{errors.from_name.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="from_email">Email</label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            className="form-control"
            placeholder="Enter your Email"
            {...register("from_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.from_email && (
            <p className="text-danger">{errors.from_email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            className="form-control"
            placeholder="Enter your Subject"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p className="text-danger">{errors.subject.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder="Enter Your Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-danger">{errors.message.message}</p>
          )}
        </div>
        <div className="btns">

        <button type="submit" className="btn btn-primary">
          Send
        </button>
        <div className="ack "> {
          successMessage &&( <div className="">{successMessage}</div>
          )}</div>
       
          </div>
      </form>
    </div>
  );
};

export default Contactpage;
