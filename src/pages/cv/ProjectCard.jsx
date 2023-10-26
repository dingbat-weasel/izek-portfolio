import Button from "./Button";

function ProjectCard({ img, title, p1, p2, liveLink, repoLink }) {
  return (
    <div className="py-8 sm:flex sm:h-96 sm:justify-between sm:gap-4">
      <div className="items-center sm:flex sm:w-5/12 sm:flex-col sm:justify-around">
        <h2 className="px-4 py-3 text-4xl font-medium text-zinc-900 sm:hidden ">
          {title}
        </h2>
        <img className="border border-zinc-900 object-contain" src={img}></img>

        <div className="flex justify-around px-4 py-3">
          <Button target={liveLink}>Live</Button>
          <Button target={repoLink}>Code</Button>
        </div>
      </div>
      <div className="sm:flex sm:h-full sm:w-7/12 sm:flex-col">
        <h2 className="hidden px-4 py-3 text-4xl font-medium text-zinc-900 sm:block">
          {title}
        </h2>
        <div className="text-lg font-normal text-zinc-900">
          <p className="px-4 py-3">{p1}</p>
          <p className="px-4 py-3">{p2}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
