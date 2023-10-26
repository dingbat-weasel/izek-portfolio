function Header({ name }) {
  return (
    <div className="flex justify-start">
      <h2
        name={name}
        className=" py-3 text-6xl font-semibold text-zinc-900 sm:px-4 sm:text-8xl md:text-8xl"
      >
        {name}
      </h2>
    </div>
  );
}

export default Header;
