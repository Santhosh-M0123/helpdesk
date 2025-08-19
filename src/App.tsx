import { useState, useEffect } from "react";
import { useAppData } from "./hooks/useAppData";
import Navbar from "./components/navbar/navbar";
import Milkdown from "./components/milkdown/milkdown";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";

const App = () => {
  const { data, error, isLoading } = useAppData();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app-container">
      {data?.Navbar && (
        <Sidebar 
          navBarData={data.Navbar} 
          isCollapsed={isSidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
      )}
      <div 
        className="main-content" 
        style={{ 
          marginLeft: isSidebarCollapsed ? '80px' : '250px',
          width: isSidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 250px)'
        }}
      >
        {data?.Navbar && (
          <Navbar 
            navBarData={data.Navbar} 
            isCollapsed={isSidebarCollapsed}
            onToggleSidebar={toggleSidebar}
          />
        )}
        {data?.milkdown && <Milkdown MilkdownData={data.milkdown} />}
      </div>
    </div>
  );
};

export default App;