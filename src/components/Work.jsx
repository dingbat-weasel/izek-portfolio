import Header from "./Header";
import ProjectCard from "./ProjectCard";
import SectionLayout from "./SectionLayout";

function Work() {
  const projects = [
    {
      title: "Fast React Pizza Co.",
      img: "./assets/project_images/fast_react_pizza_co.JPG",
      p1: "Online ordering platform for small pizza shop. Features dynamic menu fetched from an API, stateful shopping cart, and ordering form complete with geolocation.",
      p2: "Utilizes more advanced React techniques including data fetching with React Router, Redux Toolkit, and Thunks.",
      liveLink: "https://fast-react-pizza-izek.vercel.app/",
      repoLink: "https://github.com/dingbat-weasel/fast-react-pizza",
    },
    {
      title: "Monostich",
      img: "./assets/project_images/monostich.JPG",
      p1: "Full stack social media site. Users create poems using a feature that emulates fridge magnet poetry. Can share  to their page and view pages of other users.",
      p2: "Utilizes the React and MUI component library on the frontend, GraphQL, Express, and MongoDB on the backend.",
      liveLink: "https://monostich-132ed184814a.herokuapp.com/",
      repoLink: "https://github.com/dingbat-weasel/monostich",
    },
    // {
    //   title: "",
    //   img: "",
    //   p1: "",
    //   p2: "",
    //   liveLink: "",
    //   repoLink: "",
    // },
  ];

  return (
    <SectionLayout>
      <Header name={"Work"} />
      <div className="divide-y divide-zinc-400">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              title={project.title}
              img={project.img}
              key={project.title}
              p1={project.p1}
              p2={project.p2}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
      </div>
    </SectionLayout>
  );
}

export default Work;
