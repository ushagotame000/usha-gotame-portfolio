"use client"
import React, { useState } from "react";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);
};
  return (
    <div className="flex ">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder=" Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="phone"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
