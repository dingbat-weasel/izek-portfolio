function Explainer({ arr }) {
  return (
    <div className="px-20 py-20 ">
      {arr.map((p, i) => (
        <p className="text-justify" key={i}>
          {p}
        </p>
      ))}
    </div>
  );
}

export default Explainer;
