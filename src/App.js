import React from "react";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [allData, setAllData] = useState([]);
  const [apiComplete, setAPIComplete] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [serviceOne, setServiceOne] = useState(
    "https://api.jikan.moe/v4/anime"
  );
  const [serviceTwo, setServiceTwo] = useState(
    "https://api.jikan.moe/v4/anime?page=" + pageNo
  );
  const [serviceThree, setServiceThree] = useState("");

  const getAllData = useCallback(async () => {
    const response = await fetch(serviceTwo);
    if (!response.ok) {
      alert("Something went wrong :(");
    }
    const data = await response.json();
    setAllData(data);
    setAPIComplete(true);
  }, [serviceTwo]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <div>
      <Header />
      {apiComplete && <HomePage data={allData.data} />}
    </div>
  );
}

export default App;
