import { useGlobalContext } from "./context";
import Result from "./result";

function App() {
  const { search, setSearch } = useGlobalContext();

  return (
    <section className="container">
      <div className="title">
        <p>lyric-finder</p>
      </div>
      <div className="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch("");
          }}
        >
          <input
            type="search"
            name="search"
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search lyric"
          />
        </form>
      </div>

      <div className="result-container">
        <Result />
      </div>
    </section>
  );
}

export default App;
