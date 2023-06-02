import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-bgColor flex justify-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/91630e45-97f8-4389-88b1-ad5f20da5d02"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accentColor text-textColor1">
            Contact
          </p>
          <p className="text-textColor1 py-4">
            Submit the form below or shoot me an email at perk.isaac@gmail.com
          </p>
        </div>
        <input
          className="bg-textColor1 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-textColor1"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-textColor1 p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-accentColor hover:border-accentColor hover:text-highlightColor px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
