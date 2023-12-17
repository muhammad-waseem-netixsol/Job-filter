import Jobs from "./components/Jobs";
import Header from "./components/Bar";
import useAppStore from "../src/app/appStore";

function App() {
  const data = useAppStore((state) => state.data);

  const { filterKeywords } = useAppStore((state) => state);

  return (
    <div>
      <div className="header"></div>

      {filterKeywords.length > 0 && <Header />}

      <Jobs />
    </div>
  );
}

export default App;
