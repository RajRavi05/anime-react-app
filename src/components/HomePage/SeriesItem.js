function SeriesItem(props) {
  console.log(props);
  return (
    <div className="series__list-item">
      <div className="series__list-item__img">
        <img src={props.listItems.imageURL} alt="" />
      </div>
      <div className="series__list-item__score">
        <p>{props.listItems.rating}/10</p>
      </div>
      <div className="series__list-item__watchList">
        <button className="series__list-item__watchList-btn">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
      <div className="series__list-item__title">
        <h3>{props.listItems.title}</h3>
      </div>
    </div>
  );
}

export default SeriesItem;