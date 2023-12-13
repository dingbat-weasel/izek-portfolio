import { useMoveBack } from "../hooks/useMoveBack";

function Header({ back }) {
  const moveBack = useMoveBack();
  return (
    <header className="bg-zinc-0 flex items-center justify-start gap-10 border-b-zinc-100 px-20 py-6  ">
      {back && <button onClick={moveBack}>&larr; Back</button>}
    </header>
  );
}

export default Header;
