import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [allData, setAllData] = useState([]);

  const getAllSeriesData = async () => {
    let pageNo = 1;
    const API_DEFAULT = `https://api.jikan.moe/v4/anime`;
    const API_PAGINATION = `https://api.jikan.moe/v4/anime?page=${pageNo}`;
    const API_SEARCH = `https://api.jikan.moe/v4/anime?q=`;

    const response = await fetch(API_PAGINATION);
    const responseData = await response.json();
    setAllData(responseData);
  };

  useEffect(() => {
    getAllSeriesData();
  }, []);

  return (
    <div>
      <Header />
      <HomePage data={[]} />
    </div>
  );
}

export default App;
