import Header from "./Header";
import SectionLayout from "../SectionLayout";

function Socials() {
  return (
    <SectionLayout>
      <Header>Socials</Header>
      <ul className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-8 py-8 text-4xl font-semibold underline sm:text-5xl">
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
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1h5Q-RioAace4Af-7hE4zYnttEzq0DiNBjUV_lZQS7c4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </SectionLayout>
  );
}

export default Socials;
