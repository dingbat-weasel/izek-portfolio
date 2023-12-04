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
          <p className="py-2" key={`${navigator}_problem_${i}`}>
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
              <h3 className="rounded-t-md border-b bg-blue-50 px-2 text-lg italic">
                input
              </h3>
              <div>{e.input}</div>
            </div>
            <div>
              <h3 className="rounded-t-md border-b bg-blue-50 px-2 text-lg italic">
                output
              </h3>
              <div>{e.output}</div>
            </div>
            <div>
              <div>{e.explanation}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {constraints.map((c, i) => (
          <div key={`${navigator}_constraint_${i}`}>{c}</div>
        ))}
      </div>
    </div>
  );
}

export default ProblemDescription;
