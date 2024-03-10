import React, { useState } from "react";
import SendMessage from '../assets/icons/send-icon.svg';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic can go here
      console.log("Form submitted successfully:", formData);
      // Reset form data
      setFormData({ name: "", email: "", message: "" });
    } else {
      // Display errors
      setErrors(errors);
    }
  };

  return (
    <div className="px-[30px] py-[30px] bg-blueSecond flex flex-col items-center justify-center rounded-[24px]">
      <h3 className="font-pop text-[25px] text-whiteColor mb-10">I’m interested in...</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-9 ">
        <div className="flex  flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-[200px] sm:w-[400px] h-[40px] outline-0 bg-blueSecond text-[20px] font-pop text-whiteColor border-b-2 focus:border-blueColor"
          />
          {errors.name && <span className=" text-red-600">{errors.name}</span>}
        </div>
        <div className="flex  flex-col">
   
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-[200px] h-[40px] sm:w-[400px] outline-0 bg-blueSecond text-[20px] font-pop text-whiteColor border-b-2 focus:border-blueColor"
          />
          {errors.email && <span className=" text-red-600">{errors.email}</span>}
        </div>
        <div className="flex  flex-col">
        
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-[200px] sm:w-[400px] h-[40px] outline-0 bg-blueSecond text-[20px] font-pop text-whiteColor border-b-2 focus:border-blueColor"
          />
          {errors.message && <span className=" text-red-600">{errors.message}</span>}
        </div>
        <div className="w-[190px] flex items-center bg-blueColor justify-center gap-2 p-2 rounded-[8px] ">
        <img src={SendMessage} alt="sendmessage" className="" />
        <button  type="submit" className="font-pop text-whiteColor cursor-pointer">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
