import { useEffect, useState } from "react";
import type { AppData } from "./types/data/data";
import { useAppData } from "./hooks/useAppData";
import Navbar from "./components/navbar/navbar";
import "./App.css";

const App = () => {
  const { data, error, isLoading } = useAppData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      {data && <Navbar navBarData={data?.Navbar} />}
    </div>
  );
};

export default App;
