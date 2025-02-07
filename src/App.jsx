import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [title, setTtitle] = useState("");

  const handleChange = (e) => {
    setTtitle(e.target.value);
  };

  useEffect(() => {
    const docTitle = (document.title = title);
    return () => docTitle;
  }, [title]);
  return (
    <>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" onChange={handleChange} />
        </label>
      </form>
    </>
  );
}

export default App;
