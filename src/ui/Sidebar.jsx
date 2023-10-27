import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="row-span-full flex-col gap-12 border border-r-zinc-100 bg-zinc-400 px-9 py-12">
      {/* TO DO: <Logo /> */}
      <div className="w-100% py-6 text-center text-4xl">izek</div>
      <MainNav />
    </aside>
  );
}

export default Sidebar;
