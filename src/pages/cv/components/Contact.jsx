import { Button } from "react-scroll";
import Header from "./Header";
import SectionLayout from "../SectionLayout";

function Contact() {
  return (
    <SectionLayout>
      <Header name={"Contact"} />
      <div className="pb-24 sm:flex">
        <form
          method="POST"
          action="https://getform.io/f/91630e45-97f8-4389-88b1-ad5f20da5d02"
          className="mx-auto flex w-full max-w-[600px] flex-col py-8"
        >
          <input
            className="bg-textColor1 p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-textColor1 my-4 p-2"
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
          <button className="font-semi-bold mx-6 my-4 w-24 self-center  rounded-full border border-zinc-900 bg-zinc-700 px-4 py-3 text-lg text-zinc-200 hover:bg-zinc-800">
            Contact
          </button>
        </form>
        <ul className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-around gap-8 py-8 text-4xl font-semibold underline sm:text-5xl">
          {/* <li>Homepage</li> */}
          <li className="hover:cursor-pointer hover:text-zinc-600">
            <a
              href="https://github.com/dingbat-weasel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/isaac-perk/"
              target="_blank"
              rel="noreferrer"
              className="hover:cursor-pointer hover:text-zinc-600"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1h5Q-RioAace4Af-7hE4zYnttEzq0DiNBjUV_lZQS7c4/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:cursor-pointer hover:text-zinc-600"
            >
              Resume
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </SectionLayout>
  );
}

export default Contact;
