function SeriesItem(props) {
  return (
    <div
      className="series__list-item"
      key={props.malId}
      id={"item-" + props.malId}
    >
      <div className="series__list-item__img">
        <img src={props.imageURL} alt="" />
      </div>
      <div className="series__list-item__score">
        <p>{props.rating}/10</p>
      </div>
      <div className="series__list-item__watchList">
        <button className="series__list-item__watchList-btn">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
      <div className="series__list-item__title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default SeriesItem;
