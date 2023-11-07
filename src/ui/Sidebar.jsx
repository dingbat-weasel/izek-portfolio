import MainNav from "./MainNav";

function Sidebar({ children }) {
  return (
    <aside className="row-span-full flex-col gap-12 border border-r-zinc-100 bg-zinc-200 px-9 py-12">
      {children}
    </aside>
  );
}

export default Sidebar;
