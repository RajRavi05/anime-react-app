import { useState } from "react";
import SeriesItem from './SeriesItem'


const SeriesList = (props) => {

  const [data,setData] = useState(props.listData)
  console.log(props.listData);

  return (
    <div className="row-wrapper">
      <div className="series__container">
        <div className="series__list" id="series__list">
          {data.map((item,index)=> (
            <SeriesItem title={item.title} imageURL={item.images.jpg.image_url} rating={item.score} malId={item.mal_id} key={item.mal_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesList;
