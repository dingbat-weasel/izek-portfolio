import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid-cols-layout grid-rows-layout mx-auto grid h-screen bg-zinc-50">
      <Header />
      <Sidebar />
      <main className="overflow-y-auto bg-zinc-100 px-2 py-3">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
