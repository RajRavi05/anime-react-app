import Container from "../UI/Container";
import Title from "../UI/Title";
import WatchList from "../WatchList/WatchList";

import "./HomePageStyles.css";
import SeriesList from "./SeriesList";

function HomePage(props) {
  return (
    <section className="series-section">
      <Container>
        <Title title={"Top List"} />
        <SeriesList listData={props.data} />
      </Container>
    </section>
  );
}

export default HomePage;
