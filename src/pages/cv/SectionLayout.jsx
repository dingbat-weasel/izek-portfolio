function SectionLayout({ children }) {
  return (
    <div name="work" className="w-full bg-zinc-200">
      <div className="mx-auto h-full max-w-[1000px] px-4 sm:py-36">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;
