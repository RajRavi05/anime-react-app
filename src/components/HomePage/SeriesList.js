import SeriesItem from "./SeriesItem";
import { useState } from "react";

const SeriesList = (props) => {
  const [listItems, setListItems] = useState([]);
  setListItems(props.allList.data);
  return (
    <div className="row-wrapper">
      <div className="series__container">
        <div className="series__list" id="series__list">
          {/* {listItems.map((item, index) => (
            <SeriesItem listItems={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SeriesList;
