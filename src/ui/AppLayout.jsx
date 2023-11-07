import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div className="mx-auto grid h-screen grid-cols-layout grid-rows-layout bg-zinc-50">
      <Sidebar>
        <div className="w-100% py-6 text-center text-4xl">izek</div>
        <MainNav />
      </Sidebar>
      <main className="overflow-y-auto bg-zinc-100 px-2 py-3">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
