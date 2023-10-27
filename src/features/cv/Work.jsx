import Header from "./Header";
import ProjectCard from "./ProjectCard";
import SectionLayout from "./SectionLayout";

function Work() {
  const projects = [
    {
      title: "Fast React Pizza Co.",
      img: "/assets/fast_react_pizza_co.jpg",
      p1: "Online ordering platform for small pizza shop. Features dynamic menu fetched from an API, stateful shopping cart, and ordering form complete with geolocation.",
      p2: "Utilizes more advanced React techniques including data fetching with React Router, Redux Toolkit, and Thunks.",
      liveLink: "https://fast-react-pizza-izek.vercel.app/",
      repoLink: "https://github.com/dingbat-weasel/fast-react-pizza",
    },
    {
      title: "Monostich",
      img: "/assets/monostich.jpg",
      p1: "Full stack social media site. Users create poems using a feature that emulates fridge magnet poetry. Can share  to their profile and view profiles of other users.",
      p2: "Utilizes the React and MUI component library on the frontend, GraphQL, Express, and MongoDB on the backend.",
      liveLink: "https://monostich-132ed184814a.herokuapp.com/",
      repoLink: "https://github.com/dingbat-weasel/monostich",
    },
    {
      title: "The Wild Oasis",
      img: "/assets/wild_oasis.jpg",
      p1: "Administrative portal for luxury cabin retreat. Features simple and clear UI demonstrating cabins available, bookings made by guests, as well as a dashboard displaying analytics and check in/out features. Sample user login available on login page, feel free to explore the options available.",
      p2: "Utilizes React Query, Context API, Styled Components, and react-router as well as a backend using Supabase",
      liveLink: "https://the-wild-oasis-izek.vercel.app",
      repoLink: "https://github.com/dingbat-weasel/the-wild-oasis",
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
