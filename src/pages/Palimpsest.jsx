import PalimpsestNav from "../features/palimpsest/PalimpsestNav";

import Posts from "../features/palimpsest/Posts";

function Palimpsest() {
  return (
    <div className="h-full">
      <PalimpsestNav />
      <Posts />
    </div>
  );
}

export default Palimpsest;
