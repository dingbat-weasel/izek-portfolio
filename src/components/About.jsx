import Header from "./Header";
import SectionLayout from "./SectionLayout";

import white_stair from "../assets/white_stair.jpg";

function About() {
  return (
    <SectionLayout>
      <Header name={"About"} />
      <div className="flex">
        <div className="self-center">
          <img
            src={white_stair}
            alt="exposed structure"
            className="hidden w-full basis-10 border border-zinc-600 sm:block"
            width={500}
          />
        </div>
        <div className="flex flex-col gap-4 px-4 py-8 text-lg text-zinc-900">
          <p>
            Full stack web developer with multidisciplinary experience. Curious
            about difficult problems and excited to create functional tools and
            interfaces that push boundaries and expectations.
          </p>
          <p>
            Born and raised in the Pacific Northwest. Lifelong learner with a
            background in academic philosophy. Currently studying computer
            science fundamentals and higher level web development paradigms. In
            my free time I enjoy spending time with people and animals I love,
            learning new things, and making art.
          </p>
          <p className="rounded border border-zinc-600 p-4">
            You can keep up to date with what I am making, reading, writing, and
            alltogether curious-about
            <a
              className="cursor-pointer font-semibold"
              href="https://izek.dev"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here
            </a>
            .
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}

export default About;
