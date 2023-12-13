import NavBubble from "./NavBubble";

function NavLayout({ navArr }) {
  return (
    <div className="flex h-max w-auto items-center justify-evenly">
      {navArr.map((navItem, i) => (
        <NavBubble navItem={navItem} key={i} />
      ))}
    </div>
  );
}

export default NavLayout;
