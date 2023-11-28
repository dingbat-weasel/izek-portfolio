import { Outlet } from "react-router-dom";
import PalimpsestNav from "../features/palimpsest/PalimpsestNav";

function Palimpsest() {
  return (
    <>
      <PalimpsestNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Palimpsest;
