import { useCounter } from "../Hooks/useCounter";

const CounterWithHook = () => {
    
  const { value, accumulate } = useCounter();

  return (
    <>
      <h3>
        Counter With Hook <small>{value}</small>{" "}
      </h3>
      <button className="btn btn-primary" onClick={() => accumulate(1)}>
        + 1
      </button>
      &nbsp;
      <button className="btn btn-secondary" onClick={() => accumulate(-1)}>
        - 1
      </button>
    </>
  );
};

export default CounterWithHook;
