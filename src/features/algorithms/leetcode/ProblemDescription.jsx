function ProblemDescription({
  title,
  navigator,
  problem,
  examples,
  constraints,
}) {
  return (
    <div>
      <h1 className="py-4 text-4xl">{title}</h1>
      <div>
        <h2 className="border-b pt-4 text-xl">Description</h2>
        {problem.map((p, i) => (
          <p className="p-2" key={`${navigator}_problem_${i}`}>
            {p}
          </p>
        ))}
      </div>
      <div>
        <h2 className="border-b pt-4 text-xl">Examples</h2>
        {examples.map((e, i) => (
          <div
            className="m-2 rounded-md border border-slate-300"
            key={`${navigator}_example_${i}`}
          >
            <div>
              <h3 className="rounded-t-md border-b bg-slate-200 px-2 text-lg italic">
                input
              </h3>
              <div className="p-2">
                <code>{e.input}</code>
              </div>
            </div>
            <div>
              <h3 className="border-b bg-slate-200 px-2 text-lg italic">
                output
              </h3>
              <div className="p-2">
                <code>{e.output}</code>
              </div>
            </div>

            {e.explanation && (
              <div className="rounded-t-md border-b bg-zinc-100 p-2 text-sm">
                {e.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className="border-b pt-4 text-xl">Constraints</h2>
        {constraints.map((c, i) => (
          <div
            className="m-2 rounded-md border bg-zinc-100 p-2"
            key={`${navigator}_constraint_${i}`}
          >
            <code>{c}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemDescription;
