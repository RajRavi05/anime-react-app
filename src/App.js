import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [allData, setAllData] = useState([]);
  const [apiError, setApiError] = useState(false);

  const getAllSeriesData = useCallback(async () => {
    let pageNo = 1;
    const API_DEFAULT = `https://api.jikan.moe/v4/anime`;
    const API_PAGINATION = `https://api.jikan.moe/v4/anime?page=${pageNo}`;
    const API_SEARCH = `https://api.jikan.moe/v4/anime?q=`;

    try {
      const response = await fetch(API_PAGINATION);

      if (!response.ok) {
        throw new Error("Something went wrong. :(");
      }

      const data = await response.json();

      const parsedSeries = data.data.map((item) => {
        return {
          title: item.title,
          mal_id: item.mal_id,
          imageURL: item.images.jpg.image_url,
          rating: item.score,
        };
      });

      setAllData(parsedSeries);
    } catch (error) {
      setApiError(true);
    }
  }, []);

  useEffect(() => {
    getAllSeriesData();
  }, [getAllSeriesData]);

  return (
    <div>
      <Header />
      {apiError && <HomePage list={allData} />}
    </div>
  );
}

export default App;
