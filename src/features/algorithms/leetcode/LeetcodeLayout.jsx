import Header from "../../../ui/Header";

function LeetcodeLayout({ children }) {
  return (
    <div>
      <Header back />
      <div className="mx-40 my-14">{children}</div>
    </div>
  );
}

export default LeetcodeLayout;
