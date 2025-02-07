import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    const docTitle = (document.title = `Count: ${count}`);
    return () => docTitle;
  }, [count]);
  return (
    <>
      <form>
        <label htmlFor="count">
          Title:
          <input type="number" onChange={handleChange} id="count" />
        </label>
      </form>
    </>
  );
}

export default App;
