function Button({ children, target }) {
  function handleClick() {
    window.open(target, "_blank");
  }

  return (
    <button
      onClick={handleClick}
      className="font-semi-bold mx-6 w-24 rounded-full border border-zinc-900 bg-zinc-700 px-4 py-3 text-lg text-zinc-200 hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}

export default Button;
