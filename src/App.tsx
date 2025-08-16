import { useAppData } from "./hooks/useAppData";
import Navbar from "./components/navbar/navbar";
import Milkdown from "./components/milkdown/milkdown";
import "./App.css";

const App = () => {
  const { data, error, isLoading } = useAppData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      {data?.Navbar && <Navbar navBarData={data.Navbar} />}
      <div className="milkdown-container">
      {data?.milkdown && <Milkdown MilkdownData={data.milkdown} />}
      </div>
    </div>
  );
};

export default App;
