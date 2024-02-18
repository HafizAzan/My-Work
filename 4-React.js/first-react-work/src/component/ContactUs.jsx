/** @format */

import React, { memo, useState } from "react";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const a = (e) => {
    e.preventDefault();
    console.log({ name, email });
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={a}>
      <label>
        Enter Your Name :
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <br />
      <label>
        Enter Your Email :
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <br />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default ContactUs;
